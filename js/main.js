// Menú móvil: abre/cierra con el botón hamburguesa y se cierra al elegir una opción.
const header = document.querySelector('.header');
const boton = document.querySelector('.header__hamburguesa');

boton.addEventListener('click', () => {
  const abierto = header.classList.toggle('abierto');
  boton.setAttribute('aria-expanded', abierto);
});

document.querySelectorAll('.header__nav a').forEach((a) =>
  a.addEventListener('click', () => {
    header.classList.remove('abierto');
    boton.setAttribute('aria-expanded', 'false');
  })
);

// Rompecabezas: la animación de ensamblado se dispara una sola vez, cuando la sección entra en pantalla.
const puzzle = document.querySelector('.puzzle');
if (puzzle) {
  const observador = new IntersectionObserver((entradas) => {
    if (entradas.some((e) => e.isIntersecting)) {
      puzzle.classList.add('puzzle--visible');
      observador.disconnect();
    }
  }, { threshold: 0.3 });
  observador.observe(puzzle);
}

// Enemigo: las piezas del icono empiezan a moverse cuando la sección entra en pantalla.
// Los aros (SMIL) quedan en pausa en su posición del mockup hasta entonces, o siempre con "reducir movimiento".
const enemigo = document.querySelector('.enemigo');
if (enemigo) {
  const eslabones = enemigo.querySelectorAll('svg.frag');
  eslabones.forEach((svg) => { svg.pauseAnimations(); svg.setCurrentTime(0); });
  const quieto = window.matchMedia('(prefers-reduced-motion: reduce)');
  const observadorEnemigo = new IntersectionObserver((entradas) => {
    if (entradas.some((e) => e.isIntersecting)) {
      enemigo.classList.add('enemigo--visible');
      if (!quieto.matches) eslabones.forEach((svg) => svg.unpauseAnimations());
      observadorEnemigo.disconnect();
    }
  }, { threshold: 0.3 });
  observadorEnemigo.observe(enemigo);
}

// Pizarra: los destellos empiezan a recorrer las flechas cuando la foto entra en pantalla.
const pizarra = document.querySelector('.pizarra');
if (pizarra) {
  const observadorPizarra = new IntersectionObserver((entradas) => {
    if (entradas.some((e) => e.isIntersecting)) {
      pizarra.classList.add('pizarra--visible');
      observadorPizarra.disconnect();
    }
  }, { threshold: 0.4 });
  observadorPizarra.observe(pizarra);
}

// Línea de beneficios: la chispa baja con el scroll dibujando la línea. Cuando la línea llega a un
// punto (a la altura del 60 % de la pantalla), ese beneficio se activa: punto, onda, tarjeta y destello.
const lineaTiempo = document.querySelector('.linea-tiempo');
if (lineaTiempo && document.documentElement.classList.contains('anima')) {
  const linea = lineaTiempo.querySelector('.linea-tiempo__linea');
  const chispa = lineaTiempo.querySelector('.linea-tiempo__chispa');
  const items = [...lineaTiempo.querySelectorAll('.beneficio')];
  let pendiente = false;

  const actualizar = () => {
    pendiente = false;
    const meta = window.innerHeight * 0.6;
    // medidas de layout (offset*), que no cambian con el scaleY de la propia línea
    const arriba = lineaTiempo.getBoundingClientRect().top + linea.offsetTop;
    const alto = linea.offsetHeight;
    const p = Math.min(1, Math.max(0, (meta - arriba) / alto));
    linea.style.transform = `scaleY(${p})`;
    chispa.style.transform = `translateY(${p * alto}px)`;
    chispa.style.opacity = p > 0 && p < 1 ? '1' : '0';
    for (const li of items) {
      const nodo = li.querySelector('.beneficio__nodo').getBoundingClientRect();
      const centro = nodo.top + nodo.height / 2;
      const activo = li.classList.contains('beneficio--activo');
      if (!activo && centro <= meta + 1) {
        // bajando: se enciende de nuevo (las animaciones arrancan otra vez al volver a poner la clase)
        li.classList.remove('beneficio--pulso');
        li.classList.add('beneficio--activo');
      } else if (activo && centro > meta + 20) {
        // subiendo: la chispa se devuelve por el punto, destella en color y luego se apaga
        li.classList.remove('beneficio--activo');
        if (!sinMovimiento.matches) li.classList.add('beneficio--pulso');
      }
    }
  };

  const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
  lineaTiempo.addEventListener('animationend', (e) => {
    if (e.animationName === 'nodo-color-sube') e.target.closest('.beneficio').classList.remove('beneficio--pulso');
  });

  const pedir = () => {
    if (!pendiente) {
      pendiente = true;
      requestAnimationFrame(actualizar);
    }
  };
  window.addEventListener('scroll', pedir, { passive: true });
  window.addEventListener('resize', pedir);
  actualizar();
}

// Banner: el video (~800 KB) se pide cuando la página ya cargó, para que no le quite conexión
// a la portada, las fuentes y el CSS. Mientras tanto se ve la portada (poster), que es su primer cuadro.
// Se reproduce solo, en bucle, en celular y escritorio.
const videoBanner = document.querySelector('.banner__video[data-src]');
// Con ?banner=b se prueba la animación en código: el video se quita para que no se descargue.
if (videoBanner && document.documentElement.classList.contains('banner-b')) {
  videoBanner.remove();
} else if (videoBanner) {
  videoBanner.muted = true; // iOS y Chrome solo permiten reproducción automática sin sonido
  const reproducir = () => videoBanner.play().catch(() => {});
  const cargarVideo = () => {
    videoBanner.src = videoBanner.dataset.src;
    reproducir();
  };
  if (document.readyState === 'complete') cargarVideo();
  else window.addEventListener('load', cargarVideo, { once: true });

  // Algunos celulares (iPhone en modo de bajo consumo, ahorro de batería) bloquean la
  // reproducción automática: se reintenta con el primer toque o desplazamiento.
  const alInteractuar = () => {
    if (!videoBanner.paused) return;
    reproducir();
  };
  ['touchstart', 'pointerdown', 'scroll', 'keydown'].forEach((ev) =>
    window.addEventListener(ev, alInteractuar, { passive: true }));
  // Al volver a la pestaña el navegador puede haberlo pausado.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && videoBanner.src) reproducir();
  });
}

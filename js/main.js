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

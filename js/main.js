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

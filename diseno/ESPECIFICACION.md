# Especificación del mockup — Landing Sinverso

Fuente: `diseno/mockup.pdf` (una sola página vectorial de **1440 × 11 691 pt**).
Como el lienzo es de 1440 de ancho, **1 pt del PDF = 1 px CSS** en una pantalla de 1440 px.
Fuentes y tamaños salen del PDF (exactos); los colores se midieron sobre los píxeles del render.

---

## 1. Sistema global

### Tipografías
| Uso | Fuente | Pesos usados |
|---|---|---|
| Títulos, números, preguntas FAQ | **ITC Avant Garde Gothic Pro** | XLt (Extra Light), Bk (Book), Md (Medium), Demi, Bold |
| Párrafos, menú, botones, listas | **Inter** | Regular, Italic. Visualmente los "énfasis" se ven como **Bold Italic** y el texto de las tarjetas de servicio como **SemiBold** (el PDF los marca como Regular/Italic porque son subconjuntos con trazo sintético) |

Patrón tipográfico constante: **mezcla de peso dentro de la misma línea** → la primera parte en Book/XLt (fina) y la palabra clave en Bold. En párrafos Inter, la frase clave va en *bold italic*.

### Paleta
| Token | Color | Dónde |
|---|---|---|
| `--negro` | `#161616` | Fondo base de casi todas las secciones (con **textura de grano/ruido** encima) y texto sobre fondos claros |
| `--gris-card` | `#353535` | Relleno de tarjetas de servicio y caja "Marketing genera…" |
| `--gris-medio` | `#999999` | 2.ª línea del manifiesto (blanco al 60 % de opacidad) |
| `--blanco` | `#F2F2F2` | Texto principal sobre oscuro, botones, banner placeholder |
| `--blanco-puro` | `#FFFFFF` | Líneas subrayado (2 px), separadores FAQ |
| `--azul` | `#1641C4` | Cuadrito del logo + manchas difuminadas en tarjetas |
| `--naranja` | `#FD5617` | Cuadrito del logo + manchas difuminadas en tarjetas |
| Tarjetas claras | degradado `#FEFEFE → #CBCED1` | Card "¿Dónde se están perdiendo…", card "Identificamos la causa", card del texto bajo la foto |
| Footer | degradado radial `#2F2F2F → #4B4B4B` | Fondo del footer |

### Retícula
- Ancho de lienzo: 1440. **Contenido: x 184 → 1256 (1072 px)**, márgenes laterales de 184 px.
- Header y footer usan márgenes distintos (ver cada sección).
- Radio de tarjetas pequeñas/medianas: **~24 px**. Radio de bloques grandes (secciones con esquinas redondeadas, fotos): **~40–60 px**.
- Bordes de tarjetas oscuras: **1 px** blanco translúcido (~`rgba(255,255,255,.55)`).
- Subrayados de títulos: **2 px** blanco (o `#161616` sobre claro).

---

## 2. Secciones (de arriba abajo)

### 2.1 Header — y 0 → 200 (alto 200)
- Fondo `#161616` con grano.
- Logo "sinverso" (isotipo blanco + cuadrito azul y naranja): x 64 → 256 (≈192 px de ancho), y 60 → 145.
- Menú: **Inter Regular 20 px**, `#F1F1F1`, centrado verticalmente (línea base y 109).
  Ítems: Servicios (x 430) · Casos de éxito (x 577) · Nosotros (x 776) · Recursos (x 922) → **separación ≈ 58 px** entre ítems.
- Botón "Hablemos ›": pastilla x 1191 → 1376 (**185 × 54**), y 75 → 129, radio completo, fondo `#F2F2F2`, texto Inter Regular 20 px negro + chevron ›.

### 2.2 Banner — y 200 → 891 (alto 691)
- **Placeholder "BANNER SEBAS"** (Avant Garde XLt 38 px, negro) sobre `#F2F2F2`. Pendiente el creativo real.

### 2.3 Manifiesto — y 891 → 1572 (alto ≈ 680)
- Fondo `#161616` con viñeta/brillo suave al centro. Formas decorativas: contornos de cuadrados redondeados (trazo 1 px blanco) a la izquierda (x 0–140, y 1250–1510) y a la derecha (x 1300–1440, y 945–1205).
- Bloque de texto alineado a la izquierda en **x 303**:
  1. `SOMOS LA NUEVA GENERACIÓN` — Avant Garde **Bold 47 px**, `#F2F2F2`.
  2. `DE AGENCIAS DE CRECIMIENTO,` — Bold 47 px, **60 % opacidad** (`#999999`). Interlineado 47 px (1.0).
  3. `CREADAS PARA` (Book) `EVOLUCIONAR EL MODELO TRADICIONAL` (Demi) — **27.6 px**.
  4. `DE LAS AGENCIAS DIGITALES Y RESOLVER LA FRAGMENTACIÓN` — Book 27.6 px, **texto `#161616` sobre pastilla blanca** `#F2F2F2` (x 293 → 1147, alto 35, radio ~6).
  5. `QUE` (Book) `LIMITA EL VERDADERO POTENCIAL DE LAS MARCAS.` (Demi) — 27.6 px.
  Interlineado de las líneas 3–5: **36 px** (≈1.31).

### 2.4 El verdadero enemigo — y 1572 → ≈2250
- Fondo `#161616`. Imagen 3D (eslabones cromados + cubos) a la izquierda: x ≈130 → 660.
- Columna de texto en **x 668**:
  - `EL VERDADERO ENEMIGO / DE LAS MARCAS ES LA` — Avant Garde **Book 32.8 px**, interlineado 33.
  - `FRAGMENTACIÓN.` — **Bold 55.4 px**.
  - Subrayado blanco 2 px (x 668 → 1171).
  - Párrafo: Inter **20.6 px**, interlineado 22.9, blanco. "*El problema aparece cuando cada pieza trabaja por separado.*" en bold italic.
- Caja: x 629 → 1210 (**581 × 133**), y 1966 → 2099, fondo `#353535`, borde 1 px claro, radio ~20, padding ≈ 40 / 34.
  Texto Inter **18.25 px**, interlineado 25.1, **tracking −1.1 px (≈ −0.06 em)**. Las dos primeras frases en bold italic.

### 2.5 ¿Dónde se están perdiendo tus oportunidades? — card y ≈2255 → 2713
- Tarjeta clara a casi todo el ancho: x 31 → 1409, radio ~50, degradado blanco `#FEFEFE → #E1E2E3` con brillo diagonal.
- Izquierda (alineado a la derecha, termina en x 776):
  - `¿DÓNDE SE ESTÁN PERDIENTO` — Avant Garde **XLt 42 px**, `#161616`.
  - `TUS OPORTUNIDAES?` — **Bold 50.4 px**.
- Derecha (x 825): lista con línea vertical y nodos circulares (x 815):
  - `¿En` (XLt 27.9) + `la adquisición?` (**Md 27.9**), separación entre líneas **44.5 px**.
  - Ítems: adquisición / conversión / seguimiento / operación / información.
  - Cierre: `¿O ENTRE UNA ETAPA Y OTRA?` — **Bold 27.9**, separado 71 px del último ítem.

### 2.6 Foto "No creemos en acciones aisladas" — y ≈2713 → 3398
- Foto a todo el ancho en blanco y negro (equipo frente a pizarra con diagrama: Facebook, Instagram, TikTok, LinkedIn, CRM, WhatsApp, IA…), esquinas inferiores redondeadas (~40), oscurecida.
- `No creemos / en acciones aisladas.` — Avant Garde **Bold 37.2 px**, blanco, alineado a la derecha terminando en x 1222, interlineado 37.5.
- `Identificamos la causa / antes que el síntoma.` — Bold 37.2 px, blanco, x 217.
- Tarjeta clara superpuesta (mitad sobre la foto, mitad fuera): x 235 → 1204 (**969 × 177**), y 3302 → 3479, radio ~24.
  - 3 líneas centradas Inter **18.25 px**, interlineado 25.1, tracking −0.73 px, `#161616`; las segundas mitades en bold italic.
  - `LAS HERRAMIENTAS, (POR SÍ SOLAS,) NO GENERAN CRECIMIENTO. (LOS SISTEMAS SÍ.)` — Avant Garde **Bold 21.1 px**; los paréntesis indican **pastillas con contorno** 1 px `#161616`, radio completo.

### 2.7 Diseñamos sistemas / Identificamos la causa — y 3398 → ≈4100
- Fondo `#161616`. Formas decorativas grises (cuadrados redondeados rellenos `#4x4x4x`) en esquina sup. izq. y borde derecho.
- **Columna izquierda** x 184 → 718:
  - `DISEÑAMOS SISTEMAS` (Book 32) / `DE ADQUISICIÓN Y CRECIMIENTO` (Bold 32), interlineado 32.2, blanco.
  - Subrayado 2 px blanco a y 3788.
  - Párrafo Inter **20.1 px**, interlineado 22.3; desde "*en SINVERSO diseñamos…*" en bold italic.
- **Tarjeta derecha** x 741 → 1273 (**532 × 280**), y 3684 → 3964, radio ~24, fondo blanco con brillo, padding 24.
  - `IDENFITICAMOS LA CAUSA` (Bold 32) / `ANTES QUE EL SÍNTOMA.` (Book 32), `#161616`.
  - Subrayado 2 px `#161616`.
  - Párrafo Inter 20.1 / 22.3, `#161616`, final en bold italic.

### 2.8 Método Sinverso (rompecabezas) — y ≈4139 → ≈5440
- Bloque con **esquinas superiores e inferiores redondeadas (~60)**, degradado radial: gris claro arriba al centro (`#868686`) → casi negro en los bordes (`#0F0F0F`).
- Encabezado centrado:
  - `CON EL MÉTODO SINVERSO` — Avant Garde **Book 42.7 px**.
  - `CONECTAMOS LAS PIEZAS / Y HACEMOS QUE TODO ENCAJE` — **Bold 55.1 px**, interlineado 54.
  - Subtítulo Inter **19.15 px**, interlineado 21.2, primera frase en bold italic.
- Rompecabezas de 5 piezas con **contorno blanco con resplandor (neón)** y relleno oscuro translúcido; logo sinverso al centro. Cada pieza: ícono de línea blanco + número + título + lista.
  - Números `1.`–`5.`: Avant Garde **Bold 54–59 px**, gris (blanco ~50 %).
  - Títulos (ATRAER, CAPTAR, GESTIONAR, CONVERTIR, CRECER): **Bold 37–43 px**, blanco.
  - Listas: Inter **18.9 px**, interlineado 24.9, centradas; mezcla bold italic / regular.
  - Contenido: **1. Atraer** (Estrategia digital, Contenido orgánico, Pauta digital, Influencer Marketing) · **2. Captar** (Landing pages, Sitios web, Formularios, WhatsApp) · **3. Gestionar** (CRM, Integración de canales, Seguimiento comercial) · **4. Convertir** (Automatizaciones, Bots, Flujos comerciales, Remarketing) · **5. Crecer** (Datos, Análisis, Optimización, Recompra).

### 2.9 Servicios del método Sinverso — y ≈5440 → ≈6850
- Fondo `#161616`. Imagen 3D (cadena cromada) arriba a la derecha (x ≈1020 → 1440, y ≈5400 → 5740).
- Título x 184: `SERVICIOS` (Book 36.6) `DEL MÉTODO SINVERSO` (Bold 36.6). Subrayado 2 px blanco hasta x 800.
- Subtítulo Inter **23 px**, interlineado 25.5, con "*No se trata*" y "*para que todo encaje.*" en bold italic.
- **Rejilla 2 columnas**: tarjetas x 184 → 695 y 745 → 1256 (**511 × 191**), separación horizontal **50**, vertical **22**. Radio ~24, fondo `#353535`, borde 1 px claro.
  - Cada tarjeta lleva una **mancha de color difuminada** en la esquina superior derecha (gradiente radial con blur).
  - Título abajo a la izquierda (padding izq. 28): Avant Garde **27–30 px** mezcla Bold/Book.
  - Descripción Inter **≈13.4 px** (semibold), interlineado ≈14.7, blanco.
  - Orden y color de la mancha: Estrategia digital (blanco) · Creación de contenidos (naranja) · Pauta digital (azul) · Influencer marketing (blanco) · CRM (naranja) · Automatizaciones (azul) · Agentes de IA (blanco) · Web (naranja) · **WhatsApp (azul, centrada sola en la última fila: x 469 → 980)**.

### 2.10 Menos fugas. Más control. — y ≈6900 → ≈8340
- Fondo con degradado diagonal: `#141414` (izq.) → `#303030` (der./abajo), con grano.
- Título en x 474: `MENOS FUGAS.` (Avant Garde **Book 63 px**, gris claro) / `MÁS CONTROL.` (**Bold 63 px**), interlineado 76.
- **Línea de tiempo** vertical centrada en x 720: línea ~3 px `#D2D1D1` con resplandor, 5 nodos circulares de **~34 px**, separados **228 px**.
- Tarjetas alternadas (izq. x 184 → 638, der. x 802 → 1256 → **454 × ≈190**), radio ~24, borde 1 px claro, relleno degradado gris translúcido.
  - `MENOS`/`MÁS` — Book 26 px; título — **Bold 26 px**; subrayado 1.5 px; texto Inter **16.3 px**, interlineado 18.1 (final en bold italic). Padding 28.
  - Orden: Menos oportunidades perdidas (izq.) · Menos procesos manuales (der.) · Más visibilidad (izq.) · Más control comercial (der.) · Más capacidad para escalar (izq.).

### 2.11 Preguntas frecuentes — y ≈8340 → 9835
- Fondo `#161616`. Imagen 3D (anillos dentro de un marco cuadrado) a la izquierda x 50 → 345.
- Título x 364: `PREGUNTAS` (Book 59.4) `FRECUENTES` (Bold 59.4).
- Acordeón x 184 → 1256: separadores **2 px blancos**, cada pregunta cerrada ocupa **80 px**.
  - Pregunta: Avant Garde **Book 29.6 px**; chevron (˅ / ˄) a la derecha (x ≈1222), ~24 px.
  - Respuesta abierta: titular en **Book 24.2 px** mayúsculas; listas con viñeta tipo línea de tiempo (línea vertical + círculos en x 197), Inter **bold italic 17.6 px**, separación 29.5; párrafo Inter 17.6 / 23.5.
- Preguntas: ¿Cuál es nuestro método? · ¿Qué debería cuestionar del mercado? · ¿Por qué Sinverso? (abierta) · ¿Qué es Sinverso? · ¿En qué no creemos? (abierta).

### 2.12 Sin cuentos. Sin versos. — y 9835 → ≈10645
- Foto de oficina a todo el ancho (B/N, con letreros "sinverso"), esquinas redondeadas ~40.
- Franja oscura translúcida de lado a lado (y 10133 → 10397, **alto 264**, ≈ negro al 50 %).
- Texto centrado: `SIN` (Bold) `CUENTOS.` (Book) / `SIN VERSOS.` — **54.2 px**; `SOLO CRECIMIENTO` (Book) `CON DIRECCIÓN.` (Bold) — **46.7 px**. Interlineado ≈ 54.

### 2.13 CTA final — y ≈10645 → 10997
- Fondo `#161616`.
- `ENTENDAMOS QUÉ ESTÁ LIMITANDO TU CRECIMIENTO. / Hablemos de tu negocio, de lo que ya tienes / y de lo que realmente necesitas conectar.` — Inter **Bold Italic 34.9 px**, interlineado 37.9, centrado, blanco.
- Botón `› Hablemos ‹`: pastilla x 585 → 855 (**270 × 78**), radio completo, fondo `#F2F2F2`, Inter Regular **29.25 px** negro, chevrons a ambos lados.

### 2.14 Footer — y 10997 → 11691
- **Esquinas superiores redondeadas (~60)**, fondo degradado gris `#2F2F2F → #4B4B4B` con brillo diagonal.
- Logo sinverso (gris claro + cuadritos de color): x 232 → 525.
- `Agencia / de Crecimiento` — Avant Garde **Bold 59.4 px**, gris claro, alineado a la derecha en x 1207.
- Enlaces columna x 232: Sistema · Servicios · Casos · Sin Verso · Nosotros · Contacto — Inter Regular **25.6 px**, separación **61.3 px**, gris claro.
- Isotipo grande decorativo (cuadrados redondeados grises) a la derecha, cortado por el borde.
- Íconos sociales (WhatsApp, Instagram, Behance) ~50 px, x ≈995 → 1210.

---

## 3. Observaciones del mockup (para confirmar)
- Erratas: "PERDIENTO" → **PERDIENDO**; "OPORTUNIDAES" → **OPORTUNIDADES**; "IDENFITICAMOS" → **IDENTIFICAMOS**; "Langing pages" → **Landing pages**; "…de tu negocio. conectamos" → **Conectamos**.
- El menú del header (Servicios, Casos de éxito, Nosotros, Recursos) no coincide con el del footer (Sistema, Servicios, Casos, Sin Verso, Nosotros, Contacto).
- FAQ: solo hay respuestas para "¿Por qué Sinverso?" y "¿En qué no creemos?"; faltan las de las otras 3 preguntas.
- Banner principal pendiente ("BANNER SEBAS").
- Solo hay diseño de escritorio (1440). La versión móvil hay que adaptarla.
- **Licencia de fuente**: ITC Avant Garde Gothic Pro es comercial (Adobe Fonts / Monotype). Para la web hace falta licencia web o un reemplazo libre.

## 4. Creativos necesarios
Logo (SVG, versión blanca y gris) · isotipo decorativo · banner principal · 3D eslabones+cubos (sección enemigo) · foto pizarra/equipo · 3D cadena (servicios) · 3D anillos en marco (FAQ) · foto oficina (cierre) · íconos del rompecabezas (imán, web, base de datos, engranaje, gráfica) o el rompecabezas completo · formas decorativas (cuadrados redondeados) · íconos sociales · textura de grano.

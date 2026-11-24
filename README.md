# PokeApp - Pokédex de Kalos

PokeApp es una aplicación web interactiva creada con **HTML, CSS y JavaScript puro**, sin frameworks. Permite explorar una Pokédex centrada en los Pokémon iniciales de Kalos, registrar usuarios, iniciar sesión, agregar Pokémon como administrador y jugar una batalla de decisiones.

## ¿Para qué sirve?

La aplicación funciona como una Pokédex sencilla. Su objetivo es mostrar información de los Pokémon de forma visual e interactiva, aplicando los contenidos trabajados en JavaScript: objetos, arrays, funciones, módulos, eventos, formularios, DOM, JSON y `localStorage`.

Actualmente la Pokédex incluye las tres líneas evolutivas de los iniciales de Kalos:

- Chespin, Quilladin y Chesnaught.
- Fennekin, Braixen y Delphox.
- Froakie, Frogadier y Greninja.

## Funciones principales

- Navegación entre Inicio, Pokédex, detalle, inicio de sesión, registro, Agregar Pokémon y Batalla.
- Tarjetas generadas dinámicamente desde un array de objetos.
- Buscador por nombre.
- Vista de detalle para cada Pokémon.
- Fondos diferentes según el tipo principal del Pokémon.
- Registro de usuarios e inicio de sesión.
- Área de administración para cargar Pokémon nuevos.
- Guardado de usuarios, sesión y Pokémon en el navegador mediante `localStorage`.
- Batalla guiada con decisiones: atacar, usar una poción, atrapar o escapar.
- Efectos de sonido originales realizados con Web Audio API.

## Cómo está hecha

La aplicación está organizada por responsabilidades para que el código sea más fácil de entender y mantener.

```text
pokeapp/
├── index.html
├── css/
│   ├── style.css
│   └── personal.css
└── js/
    ├── app.js
    ├── data.js
    ├── sound.js
    └── storage.js
```

### `index.html`

Contiene la estructura base de la página: barra de navegación, zona de sesión y el elemento `main` donde JavaScript muestra cada vista.

### `css/style.css` y `css/personal.css`

Definen el diseño visual: colores negro, rojo y blanco, tarjetas, formularios, fondos por tipo, la marca personal `FF`, diseño responsive y la estética inspirada en videojuegos.

### `js/data.js`

Contiene el array de objetos con los datos iniciales de los Pokémon. Cada objeto tiene información como:

```js
{
  id: 658,
  nombre: "Greninja",
  tipo: ["Agua", "Siniestro"],
  hp: 89,
  ataque: 115,
  defensa: 67,
  imagen: "..."
}
```

### `js/storage.js`

Maneja la persistencia. Como `localStorage` solo puede guardar texto, se usa `JSON.stringify()` para guardar objetos y `JSON.parse()` para recuperarlos.

### `js/app.js`

Es el archivo principal. Se encarga de:

- Crear las tarjetas con `map()`.
- Buscar un Pokémon por ID con `find()`.
- Filtrar por nombre con `filter()`.
- Cambiar de vista con la función `render()`.
- Escuchar clicks, escritura y envíos de formularios con `addEventListener()`.
- Validar el inicio de sesión y decidir si el usuario es administrador.
- Construir el objeto de un Pokémon nuevo y guardarlo en la Pokédex.

### `js/sound.js`

Genera sonidos cortos con Web Audio API. No utiliza audios oficiales de Pokémon ni archivos externos.

## Lógica de administración

Cada usuario tiene una propiedad llamada `admin`.

```js
admin: true
```

La aplicación revisa esa propiedad con `isAdmin()`. Si vale `true`, permite abrir el formulario **Agregar Pokémon**. Los usuarios registrados normalmente se crean con `admin: false`, por eso no pueden cargar datos.

## Cómo ejecutar el proyecto

1. Descargar o clonar este repositorio.
2. Abrir la carpeta `pokeapp` con Visual Studio Code.
3. Abrir `index.html` en el navegador.
4. Como alternativa, instalar la extensión **Live Server** en Visual Studio Code y abrir el proyecto con ella.

## Cuenta de administrador para probar la carga

| Campo | Dato |
| --- | --- |
| Usuario | `admin` |
| Contraseña | `admin123` |

## Flujo para agregar un Pokémon

1. Iniciar sesión con la cuenta administradora.
2. Entrar a **Agregar Pokémon**.
3. Completar el formulario.
4. La aplicación convierte los datos numéricos con `Number()`.
5. Se crea un nuevo objeto Pokémon.
6. Se agrega al array y se guarda en `localStorage`.
7. El nuevo Pokémon aparece de forma automática en la Pokédex.

## Recursos

- Imágenes oficiales públicas de Pokémon: [PokeAPI sprites](https://github.com/PokeAPI/sprites).
- Tipografías: Google Fonts.

---

Proyecto realizado como trabajo práctico de desarrollo web.

// Datos iniciales del catálogo (sin backend ni API).
// Las imágenes viven en /public/images y se pueden reemplazar por portadas reales
// con solo cambiar el nombre del archivo en el campo "image".
const games = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    image: "images/zelda-botw.jpg",
    genre: "Aventura",
    year: 2017,
    developer: "Nintendo EPD",
    platforms: "Nintendo Switch, Wii U",
    description:
      "Mundo abierto donde Link despierta tras cien años de sueño para derrotar a Calamity Ganon. Destaca por su libertad de exploración, su física interactiva y la ausencia de caminos obligatorios.",
  },
  {
    id: 2,
    name: "Uncharted 4: A Thief's End",
    image: "images/uncharted-4.jpg",
    genre: "Aventura",
    year: 2016,
    developer: "Naughty Dog",
    platforms: "PlayStation 4",
    description:
      "Nathan Drake sale de su retiro para buscar el tesoro del pirata Henry Avery. Combina escalada, tiroteos y puzles con una narrativa cinematográfica.",
  },
  {
    id: 3,
    name: "Hollow Knight",
    image: "images/hollow-knight.jpg",
    genre: "Aventura",
    year: 2017,
    developer: "Team Cherry",
    platforms: "PC, Nintendo Switch, PlayStation 4, Xbox One",
    description:
      "Metroidvania 2D ambientado en el reino subterráneo de Hallownest. Explora cuevas enormes, enfrenta jefes desafiantes y descubre su historia a través del entorno.",
  },
  {
    id: 4,
    name: "God of War",
    image: "images/god-of-war.jpg",
    genre: "Acción",
    year: 2018,
    developer: "Santa Monica Studio",
    platforms: "PlayStation 4, PC",
    description:
      "Kratos y su hijo Atreus viajan por los reinos de la mitología nórdica para esparcir las cenizas de su esposa. Combate cuerpo a cuerpo con el hacha Leviatán y cámara continua.",
  },
  {
    id: 5,
    name: "Elden Ring",
    image: "images/elden-ring.png",
    genre: "Acción",
    year: 2022,
    developer: "FromSoftware",
    platforms: "PC, PlayStation 4/5, Xbox One/Series",
    description:
      "RPG de acción en mundo abierto creado junto a George R. R. Martin. El jugador recorre las Tierras Intermedias para reparar el Círculo de Elden, con combates exigentes y mucha libertad.",
  },
  {
    id: 6,
    name: "Doom Eternal",
    image: "images/doom-eternal.jpg",
    genre: "Acción",
    year: 2020,
    developer: "id Software",
    platforms: "PC, PlayStation 4/5, Xbox One/Series, Nintendo Switch",
    description:
      "Shooter en primera persona de ritmo frenético donde el Slayer debe frenar la invasión demoníaca a la Tierra. Premia la agresividad: matar enemigos te devuelve vida, blindaje y munición.",
  },
  {
    id: 7,
    name: "EA Sports FC 24",
    image: "images/fc-24.jpg",
    genre: "Deportes",
    year: 2023,
    developer: "EA Vancouver / EA Romania",
    platforms: "PC, PlayStation 4/5, Xbox One/Series, Nintendo Switch",
    description:
      "Primera entrega de la serie tras dejar el nombre FIFA. Incluye modos como Ultimate Team y Carrera, con licencias de ligas y clubes de todo el mundo.",
  },
  {
    id: 8,
    name: "Rocket League",
    image: "images/rocket-league.jpg",
    genre: "Deportes",
    year: 2015,
    developer: "Psyonix",
    platforms: "PC, PlayStation 4/5, Xbox One/Series, Nintendo Switch",
    description:
      "Fútbol jugado con autos propulsados por cohetes. Partidas cortas, competitivo en línea y una curva de habilidad muy alta gracias a sus saltos y maniobras aéreas.",
  },
  {
    id: 9,
    name: "NBA 2K24",
    image: "images/nba-2k24.jpg",
    genre: "Deportes",
    year: 2023,
    developer: "Visual Concepts",
    platforms: "PC, PlayStation 4/5, Xbox One/Series, Nintendo Switch",
    description:
      "Simulador de baloncesto con el modo MyCAREER, MyTEAM y partidos con equipos de la NBA, la WNBA y la liga europea. Gran énfasis en el realismo de los movimientos.",
  },
  {
    id: 10,
    name: "Age of Empires II",
    image: "images/aoe-2.jpg",
    genre: "Estrategia",
    year: 1999,
    developer: "Ensemble Studios",
    platforms: "PC",
    description:
      "Estrategia en tiempo real ambientada en la Edad Media. Gestionas recursos, construyes una ciudad, avanzas de era y comandas ejércitos de distintas civilizaciones.",
  },
  {
    id: 11,
    name: "Sid Meier's Civilization VI",
    image: "images/civ-6.jpg",
    genre: "Estrategia",
    year: 2016,
    developer: "Firaxis Games",
    platforms: "PC, Nintendo Switch, PlayStation 4, Xbox One",
    description:
      "Estrategia por turnos donde guías a una civilización desde la prehistoria hasta la era de la información. Se puede ganar por ciencia, cultura, religión o dominación militar.",
  },
  {
    id: 12,
    name: "StarCraft II: Wings of Liberty",
    image: "images/starcraft-2.jpg",
    genre: "Estrategia",
    year: 2010,
    developer: "Blizzard Entertainment",
    platforms: "PC",
    description:
      "Estrategia en tiempo real de ciencia ficción con tres razas: terran, zerg y protoss. Su campaña sigue a Jim Raynor y su multijugador es referente de los esports.",
  },
];

export default games;

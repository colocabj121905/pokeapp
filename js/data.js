// Cada región incluye las tres líneas evolutivas de sus Pokémon iniciales.
const starters = [
  ['Kalos', [[650,'Chespin','Planta'],[651,'Quilladin','Planta'],[652,'Chesnaught','Planta/Lucha']], [[653,'Fennekin','Fuego'],[654,'Braixen','Fuego'],[655,'Delphox','Fuego/Psíquico']], [[656,'Froakie','Agua'],[657,'Frogadier','Agua'],[658,'Greninja','Agua/Siniestro']]]
];

export const initialPokemon = starters.flatMap(([region,...lines], regionIndex) => lines.flatMap(line => line.map(([id,nombre,tipos],stage) => ({
  id, nombre, tipo:tipos.split('/'),
  descripcion:`${nombre} es un Pokémon inicial de la región de ${region}. ${stage===0?'Está dando sus primeros pasos como compañero de aventura.':stage===1?'Ha crecido y está desarrollando todo su potencial.':'Es la evolución final de su línea y un aliado muy poderoso.'}`,
  altura:Number((0.5+stage*.35).toFixed(1)), peso:Number((6+stage*15).toFixed(1)), generacion:region==='Kalos'?6:1,
  hp:45+stage*22, ataque:49+stage*20, velocidad:45+stage*16, defensa:49+stage*18,
  habilidad:stage===2?'Espíritu de combate':'Potencial inicial', tieneEvolucion:stage<2,
  evolucion:stage<2?line[stage+1][1]:'', nivelEvolucion:stage===0?16:stage===1?36:0,
  rareza:stage===2?'Especial':'Común', imagen:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`, sonido:'', shiny:false, imagenShiny:''
}))));

export const initialUsers=[{id:1,nombre:'Entrenador Admin',email:'admin@pokeapp.com',username:'admin',password:'admin123',avatar:'',admin:true}];

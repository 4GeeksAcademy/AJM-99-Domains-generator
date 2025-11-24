  
  let pronoun = ['el', 'tu', 'un'];
  let adj = ['gran', 'perfecto', 'divertido'];
  let noun = ['malcom', 'ingles', 'bus'];
  let extension = ['.com', '.es', '.us'];

  for(let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
      for (let k = 0; k < noun.length; k++){
        for (let l = 0; l < extension.length; l++){
          console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
        }
      }
    }
  }
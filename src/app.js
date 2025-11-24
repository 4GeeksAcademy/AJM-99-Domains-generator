  
  let pronoun = ['el', 'tu', 'un'];
  let adj = ['gran', 'perfecto', 'divertido'];
  let noun = ['malcom', 'ingles', 'bus'];
  let extension = ['.com', '.es', '.us'];

  function domainHacks(string1, string2){
    let hack;

    if((string1.slice(-3,-2) != string2[1]) && (string1.slice(-2) == string2.slice(-2))){
      hack = string1.substr(0, string1.length-2) + string2;
    }else if (string1.slice(-3) == string2.slice(-3)){
      hack = string1.substr(0, string1.length-3) + string2;
    }else{
      hack = string1 + string2;
    }
    return hack;
  }

  for(let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
      for (let k = 0; k < noun.length; k++){
        for (let l = 0; l < extension.length; l++){
          console.log(domainHacks((pronoun[i] + adj[j] + noun[k]), extension[l]));
        }
      }
    }
  }
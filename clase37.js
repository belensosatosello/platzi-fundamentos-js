
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function getCharacter(id){

  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $
      .get( url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id){
  console.log(`An error occurred trying to ger character ${id}`);
}

getCharacter(1)
  .then(character1 => {
    console.log(`Character 1 is ${character1.name}`);
    return getCharacter(2)
  })
  .then( character2 => {
    console.log(`Character 2 is ${character2.name}`);
    return getCharacter(3)
  })
  .then( character3 => {
    console.log(`Character 3 is ${character3.name}`);
    return getCharacter(4)
  })
  .then( character4 => {
    console.log(`Character 4 is ${character4.name}`);
    return getCharacter(5)
  })
  .then( character5 => {
    console.log(`Character 5 is ${character5.name}`);
    return getCharacter(6)
  })
  .then( character6 => {
    console.log(`Character 6 is ${character6.name}`);
    return getCharacter(7)
  })
  .then( character7 => {
    console.log(`Character 7 is ${character7.name}`);
  })
  .catch(onError)

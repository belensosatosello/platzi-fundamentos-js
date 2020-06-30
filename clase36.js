
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
  .then(function (character){
    console.log(`Character 1 is ${character.name}`);
  })
  .catch(onError)

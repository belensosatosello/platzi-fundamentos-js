
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

async function getCharacters(){
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promises = ids.map(id => getCharacter(id))

  try {
    // va a detener toda la ejecucion de la funcion hasta q todas las promesas
    // sean resueltas
    var characters = await Promise.all(promises)
    console.log(characters)

  } catch (id){
    onError(id)
  }
}

getCharacters()

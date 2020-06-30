
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function getCharacter(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $.get( url, opts, function (person) {
    console.log(`Hi, I am ${person.name}`);

    if(callback){
      callback()
    }
  })
}


//callback HELL
// es una llamada que tira un hilo desp de otro secuencialmente
getCharacter(1, function () {
  getCharacter(2, function() {
    getCharacter(3,function(){
      getCharacter(4, function () {
        getCharacter(5, function (){
          getCharacter(6, function(){
            getCharacter(7,function(){
            })
          })
        })
      })
    })
  })
})

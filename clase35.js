
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

function getCharacter(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $
    .get( url, opts, callback)
    .fail(() => {
      console.log(`An error occurred. Could not get the character ${id}`)
    })
}

getCharacter(1, function (person) {
  console.log(`Hi, I am ${person.name}`);
  getCharacter(2, function(person) {
    console.log(`Hi, I am ${person.name}`);
    getCharacter(3,function(person){
      console.log(`Hi, I am ${person.name}`);
      getCharacter(4, function (person) {
        console.log(`Hi, I am ${person.name}`);
        getCharacter(5, function (person){
          console.log(`Hi, I am ${person.name}`);
          getCharacter(6, function(person){
            console.log(`Hi, I am ${person.name}`);
            getCharacter(7,function(person){
              console.log(`Hi, I am ${person.name}`);
            })
          })
        })
      })
    })
  })
})

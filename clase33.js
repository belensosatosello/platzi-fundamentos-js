
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain: true}

const onPeopleResponse =  function (person) {
  console.log(`Hi, I am ${person.name}`);
}

function getCharacter(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get( url, opts, onPeopleResponse)
}

getCharacter(1)
getCharacter(2)
getCharacter(3)

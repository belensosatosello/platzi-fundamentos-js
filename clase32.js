
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'


const personURL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain: true}

const onPeopleResponse =  function (person) {
  console.log(`Hi, I am ${person.name}`);
}
// 0- Object (data)
// 1- success (request status)
// 2- Request original
$.get( personURL, opts, onPeopleResponse)

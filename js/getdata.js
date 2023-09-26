import { UserTemplate } from "./template";


let UserStored =[]


async function getemployeeDate(){
    let type = "users"
    const work = new URL(`https://random-data-api.com/api/v2/${type}`)
    let params = new URLSearchParams();
    params.set("size" , 20)
    work.search = params
    const response = await fetch(work) // recieve the response body
    UserStored  = [...await response.json()] // parsing data in JSON objects 
    renderUsers(UserStored)
    
}
getemployeeDate()
console.log(UserStored)



function renderUsers (user){
    let container = document.createElement('div')
    container.classList.add('wrapper');
    
    user.forEach(user=> {
        container.append(UserTemplate(user))
    });
    document.querySelector('#cards').append(container)
    }
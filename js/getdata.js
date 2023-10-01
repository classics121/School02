import { UserTemplate } from "./template";





let slimeStored =[]

async function getSlimeDate(url){
    const response = await fetch(url) // recieve the response body
    slimeStored = [...await response.json()] // parsing data in JSON objects 
    renderslime(slimeStored)
}


getSlimeDate('db/stuff.json')




function renderslime (user){
    let container = document.createElement('div')
    container.classList.add('wrapper');
    
    user.forEach(user=> {
        container.append(UserTemplate(user))
    });
    document.querySelector('#cards').append(container)
    }
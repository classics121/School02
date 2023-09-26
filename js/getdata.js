import { slimeTemplate } from "./template";


let slimeStored =[]

async function getemployeeDate(url){
    const response = await fetch(url) // recieve the response body
    slimeStored  = [...await response.json()] // parsing data in JSON objects 
    renderSlime(slimeStored)
}

getemployeeDate('/db/stuff.json')

function renderSlime (slime){
    let container = document.createElement('div')
    container.classList.add('wrapper');
    
    slime.forEach(slime=> {
        container.append(slimeTemplate(slime))
    });
    document.querySelector('#cards').append(container)
    }
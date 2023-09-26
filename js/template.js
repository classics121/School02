function UserTemplate({address,avatar,first_name,last_name,email,date_of_birth,employment, ...users}){
    // employee is a placeholder so can name it whatever you want to 
    console.log(users)
    const template = `
    
    <div class="slime">
          
            
          
          <div class="profile">
            <div class="top-card">
            <img src="${avatar}" alt="${first_name}" />
            <h2>${first_name}  ${last_name}</h2>
            </div>
            <div class="bio">
              <ul>
              <li><span>Email:</span> ${email}</li>
              <li><span>Birthdate:</span>${date_of_birth}</li>
              <li><span>Job:</span> ${employment.title}</li>
                <br>
                <li> <h3><span>Address</span></h3>
                <ul>
                <li> <span>City:</span> ${address.city}</li>
                <li><span>Street:</span> ${address.street_address}</li>
                <li> <span>Country:</span> ${address.country}</li>
                <li><span>State:</span> ${address.state}</li>
                </ul>
                </li>
              </ul>
            </div>
          </div>
       </div>
    
    
    `
    //return template 
    // what he would do 
    //1.  Retun the template as a string with that data if there was no interactivity ( InsertAdjecentHtml)
    
    
    // return it as an element if there was interactivity
    const elm = document.createRange().createContextualFragment(template).children[0]
    return elm 
    }
    export {UserTemplate}
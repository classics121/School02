function slimeTemplate({Name,avatar,website,Price,company,Texture,Scent,size,Included, ...slime}){
    // employee is a placeholder so can name it whatever you want to 
    console.log(slime)
    const template = `
    
    <div class="slime">
          
            
          
          <div class="profile">
            <div class="top-card">
            <img src="${avatar}" alt="${Name}" />
            <h2>${Name}</h2>
            </div>
            <div class="bio">
              <ul>
              <li><span>Company:</span> ${company}</li>
              <li><span>Website:</span> <a href="${website}">${website}</a></li>
              <li><span>Price:</span> ${Price}</li>
              <li><span>Sent:</span> ${Scent}</li>
                <li><span>Size:</span> ${size}oz</li>
                <li><span>Texture:</span> ${Texture}oz</li>
                <br>
                <li> <h3><span>Product Includes:</span></h3>
                <ul>
                <li> ${Included.Includedone}</li>
                <li> ${Included.Includedtwo}</li>
                <li> ${Included.Includedthree}</li>
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
    export {slimeTemplate}
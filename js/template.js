function UserTemplate({Name,website,avatar,Price,company,Texture,Scent,Included,size, ...slime}){
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
              <li><span>Price:</span>${Price}</li>
              <li><span>WebSite:</span> ${website}</li>
              <li><span>Size:</span> ${size}oz</li>
                <br>
                <li> <h3><span>Includeds</span></h3>
                <ul>
                <li>${Included.Includedone}</li>
                <li>${Included.Includedtwo}</li>
                <li>${Included.Includedthree}</li>
                
                </ul>
                </li>
              </ul>
            </div>
          </div>
       </div>
    
    
    `
    const elm = document.createRange().createContextualFragment(template).children[0]
    return elm 
    }
    export {UserTemplate}
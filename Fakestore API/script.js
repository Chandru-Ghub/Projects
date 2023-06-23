///fake store api
async function renderApi(){

    let url = 'https://fakestoreapi.com/products';
    await fetch(url).then((data)=>{
        return data.json();
    }).then((renderData)=>{
        console.log(renderData);
    
        let product = '';

        renderData.forEach((a)=>{
                product +=`<div class="inner-container">
                                <img class = 'pimg' src="${a.image}" alt="product image">
                                <p class ="dt title">${a.title}</p>
                                <p class ="dt price">${a.price}</p>
                                <p class ="dt rating">${a.rating.rate}</p>
                                <details>
                                    <summary>
                                        Description
                                    </summary>
                                    <p class ="dt description">${a.description}</p>
                                </details>
                                <p class ="dt category">${a.category}</p>
                           </div>`
        })
    document.querySelector('.container').innerHTML=product








    }).catch((error)=>{
        console.log(error);
    })

}
renderApi()
function initAPP(){
// let apikey = 'TNuztqmo7lqm4HyAJ6ZoAvvitnTpSc3LjWboIgwzeeg'
const more = document.querySelector('.more');
let search = document.querySelector('.form');
let card =  document.querySelector('.content');
let val = document.querySelector('#search');
function fetchApi(){
    keyword = val.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=TNuztqmo7lqm4HyAJ6ZoAvvitnTpSc3LjWboIgwzeeg&per_page=12`;
    fetch(url).then((response)=>response.json()).then((data)=>{console.log(data)
        
        result = data.results
        console.log(page);
        if(page==1){
            card.innerHTML = '';
        }
        result.forEach((a)=>{
            
                let img = document.createElement('img');
                img.src = a.urls.regular;
                let link = document.createElement('a');
                link.href = a.links.html;
                link.target = '_blank';
                link.appendChild(img);
                card.appendChild(link);           
        })
      more.style.display = 'block';
        
        }).catch((error)=>console.log(error));
       
}






search.addEventListener('submit',(e)=>{
    e.preventDefault();
    page = 1;
    fetchApi();
})

more.addEventListener('click',()=>{
    page++
    fetchApi()
})
























}
initAPP();
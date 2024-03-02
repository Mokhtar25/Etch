
let drawing = false;
const main = document.querySelector(".main");

for (let i = 0; i < 64; i++){
    let new_div = document.createElement('div');
    new_div.classList.add("grid");
    document.querySelector('.main').appendChild(new_div);
}
document.addEventListener('mousedown', ()=>{
    drawing = true;
})

document.addEventListener('mouseup', ()=>{
    drawing = false;
})


let divs = document.querySelectorAll('.grid');
    divs.forEach((element) =>  {
        element.addEventListener("mousemove", function() {
            if (drawing){
            element.style.backgroundColor = 'red';
            }

        })})

        
   
       

  
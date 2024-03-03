
let drawing = false;
let color = "";
const main = document.querySelector(".main_x");

for (let i = 0; i < 256; i++){
    let new_div = document.createElement('div');
    new_div.classList.add("grid_x");
    document.querySelector('.main_x').appendChild(new_div);
}
document.addEventListener('mousedown', ()=>{
    drawing = true;
})

document.addEventListener('mouseup', ()=>{
    drawing = false;
})
var colorPicker = new iro.ColorPicker('#picker', {
    width : 100, color : "#f00"
});
 
color = colorPicker.color.hexString;

colorPicker.on('color:change', ()=>{
    color = colorPicker.color.hexString;
    eraser_button.style.backgroundColor =  "rgb(154, 216, 236)";
        eraser_button.style.color =  "black";
})

let eraser_button = document.querySelector('.eraser');
eraser_button.addEventListener("click", ()=>
    {
        color = "#fff";
        eraser_button.style.backgroundColor =  "rgb(109, 180, 241)";
        eraser_button.style.color =  "white";
    })

let divs = document.querySelectorAll('.grid_x');
    divs.forEach((element) =>  {
        element.addEventListener("mousemove", function() {
            if (drawing){
            element.style.backgroundColor = color;
            }
            

        element.addEventListener("click", function() {
           
            element.style.backgroundColor = color;
            })

        })})

        
   
       

  
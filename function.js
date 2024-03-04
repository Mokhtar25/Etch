function return_divs(){
    return document.querySelectorAll(".grid_x");
}
let drawing = false;
let color = "";
let current_size = 0;
const main = document.querySelector(".main_x");
function grid(num=16){
for (let i = 0; i < (num*num) ; i++){
    let new_div = document.createElement('div');
    new_div.classList.add("grid_x");
    document.querySelector('.main_x').appendChild(new_div);
    current_size = num;
}
}
grid();
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



        
        const rest = document.querySelector('.rest');
        rest.addEventListener('click', () => {
            divs = return_divs();
            divs.forEach((element) => {
                element.style.backgroundColor = "#fff";
            });
        });   
        const submit = document.querySelector(".submit");
        submit.addEventListener("click", ()=>{
            const text = document.querySelector(".input");
            let value = text.value;
            let v1 = value.split("*");   
            if (v1[0] > 100 || v1[0] < 0){
                alert("Please enter a Number from 0 to 100")
                return 0;
            }
            main.innerHTML = "";
            grid(v1[0]);
            let divs = document.querySelectorAll('.grid_x');
            divs.forEach((e)=> {
                e.style.width= `${(600/v1[0])}px`;
                e.style.height= `${600/(v1[0])}px`;
            })
              
            
            draw();

            
        })
        function draw(){

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
        }
        draw()
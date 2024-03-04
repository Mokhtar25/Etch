
// return list with the divs in the grid


//varibles
let divs = document.querySelectorAll(".grid_x");
let drawing = false;
let color = "";
let grid_show = false;
let current_size = 0;
let rainbow = false;
let erase = false;

function return_divs(){
    divs = document.querySelectorAll(".grid_x");
    return divs;
}

//making the grid
const main = document.querySelector(".main_x");
function grid(num=16){
   const cont =  document.createDocumentFragment();
for (let i = 0; i < (num*num) ; i++){
    let new_div = document.createElement('div');
    new_div.classList.add("grid_x");
    cont.appendChild(new_div);
}
main.appendChild(cont);
current_size = num;
}
grid();
document.addEventListener('mousedown', ()=>{
    drawing = true;
})

document.addEventListener('mouseup', ()=>{
    drawing = false;
})

//color wheel api
var colorPicker = new iro.ColorPicker('#picker', {
    width : 100, color : "#f00"
});
 
color = colorPicker.color.hexString;
colorPicker.on('color:change', ()=>{
    color = colorPicker.color.hexString;
    erase = false;
    rainbow = false;
    update_buttons();
})


// eraser button
let eraser_button = document.querySelector('.eraser');
eraser_button.addEventListener("click", ()=>
    {
        erase = true;
        rainbow = false;
        update_buttons();
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





        // making the grid 
        const submit = document.querySelector(".submit");
        submit.addEventListener("click", ()=>{
            const text = document.querySelector(".input");
            let value = text.value;
            let v1 = value.split("*");   
            v1[0] = Number(v1[0]);
            if (v1[0] > 100 || v1[0] < 0 || v1[0] === NaN || !v1[0]){
                alert("Please enter a Number from 0 to 100")
                return 0;
            }
            main.innerHTML = "";
            grid(v1[0]);
            return_divs();
            divs.forEach((e)=> {
                e.style.width= `${(600/v1[0])}px`;
                e.style.height= `${600/(v1[0])}px`;
            })
            draw();
        })

        // check box to hide the grid
        const check_box = document.querySelector("#check")
        check_box.addEventListener("click", ()=>{
            let divs = document.querySelectorAll('.grid_x');
            if (!grid_show){
            
            divs.forEach((e)=>{
                e.style.border = "1px solid rgba(206, 195, 195, 0.3)";

                grid_show = true;
            })}
            else{
            divs.forEach((e)=>{
                e.style.border = "";
                grid_show = false;
            })}

        })
            

        
    



        // random int for the rainbow function
        function random(max=255) {
            return Math.floor(Math.random() * max);
          }

        const rainbow_btn = document.querySelector(".rainbow");

        rainbow_btn.addEventListener("click", ()=>
        {
            color = "#fff";
            rainbow_btn.style.backgroundColor =  "rgb(109, 180, 241)";
            rainbow_btn.style.color =  "white";
            rainbow = true;
            erase = false;
            update_buttons()

        })
          

        function update_buttons(){
            if (erase){
                rainbow_btn.style.backgroundColor =  "rgb(154, 216, 236)";
                rainbow_btn.style.color =  "black";
            }
            else if (rainbow){
                eraser_button.style.backgroundColor =  "rgb(154, 216, 236)";
                eraser_button.style.color =  "black";
            }
            else {
                eraser_button.style.backgroundColor =  "rgb(154, 216, 236)";
                eraser_button.style.color =  "black";
                rainbow_btn.style.backgroundColor =  "rgb(154, 216, 236)";
                rainbow_btn.style.color =  "black";
            }
            
        }


        //draw to the screen when the mouse click and dragged
        function draw(){
        let divs = document.querySelectorAll('.grid_x');
        divs.forEach((element) =>  {
            element.addEventListener("mousemove", function() {
                if (drawing){
                    if (rainbow){
                    color = `rgb(${random()},${random()},${random()})`;
                    }
                element.style.backgroundColor = color;

                }
                
    
            element.addEventListener("click", function() {
               
                element.style.backgroundColor = color;
                })
    
            })})
        }
        draw()
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color="black"
width=1
var mouse_event="empty"
var last_position_of_x, last_position_of_y
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_event="mousedown"
};

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup"
};

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave"
};

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouse_event=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last_position_of_x_and_y_coordinates");
        console.log("x="+ last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("current_position_of_x_and_y_coordinates");
        console.log("x="+ current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
};


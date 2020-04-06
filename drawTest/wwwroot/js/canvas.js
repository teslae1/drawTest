
window.addEventListener("load", () => {

    this.DGN = {
        context: undefined,
        canvas: undefined,
    }

    DGN.canvas = document.querySelector('#canvas');
    DGN.context = canvas.getContext("2d");
    
    //resizing
    //edit to update rezize window event handler
    DGN.canvas.height = 1000;
    DGN.canvas.width = 1000;
    DGN.context.lineWidth = 10;



    let isDrawing = false;

    function startedDrawing(e) {
        isDrawing = true;
        draw(e);
    }
    function stoppedDrawing() {
        isDrawing = false;
        DGN.context.beginPath();
    }



    function draw(e) {
        if (isDrawing) {

            DGN.context.lineCap = "round";


            var rect = canvas.getBoundingClientRect();

            DGN.context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
            DGN.context.stroke();

            DGN.context.beginPath();
            DGN.context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
        }
    }

    DGN.canvas.addEventListener("mouseup", stoppedDrawing);
    DGN.canvas.addEventListener("mousedown", startedDrawing);
    DGN.canvas.addEventListener("mousemove", draw);



})

function changeColor(color) {
    this.DGN.context.strokeStyle = color;
}

function setPaintWidth(width) {
    for (i = 5; i <= 15; i += 5) {
        if (i == width)
            document.getElementById(i).style.color = "black";
        else
            document.getElementById(i).style.color = "gray";
    }
    this.DGN.context.lineWidth = width;
}

function clearCanvas() {
    this.DGN.context.clearRect(0,0,DGN.canvas.width, DGN.canvas.height);
}
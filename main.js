function setup(){
Canvas = createCanvas(500,500);
Canvas.position(100,300);
video = createCapture(VIDEO);
video.hide();
}

tintColor = "";

function draw(){
    image(video,0,0,500,500);
    tint(tintColor)
}

function tintFilter(){
    tintColor = document.getElementById("input1").value;
}

function take_snapshot(){
    save("student_name.jpg");
}

leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(520,500);
    canvas=createCanvas(550,400);
    canvas.position(560,340);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('Posenet Is initialised.');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log(leftWristX,rightWristX);
        difference=floor(leftWristX-rightWristX);
        console.log("difference is "+difference);

    }
}
function draw(){
    canvas.background('#f06969');
    textSize(difference);
    textFont('Parisienne, cursive')
    fill('#f5f7fa');
    text('Hola!',50,100);
}
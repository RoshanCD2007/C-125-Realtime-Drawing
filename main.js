noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 160);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " nose Y = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist x = " + leftWristX + " rightWrist x = " + rightWristX);
    }
}

function draw(){
    background("#c7f0e7");
    document.getElementById("pixels").innerHTML = "Width and Height of the square will be = " + difference + "px";
    fill("#ff2d03");
    stroke("#ff2d03");
    square(noseX , noseY , difference); 
   
}

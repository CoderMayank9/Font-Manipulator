rightWristX=0;
leftWristX=0;
difference=0;
function setup()
{
canvas=createCanvas(500,500);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,500);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose", gotposes);
}
function modelloaded()
{
console.log("Model is initialized");
}
function gotposes(results)
{
if(results.length > 0)
{
console.log(results);
rightWristX=results[0].pose.rightWrist.x;
leftWristX=results[0].pose.leftWrist.x;
difference=floor(leftWristX-rightWristX);
}
}
function draw()
{
background("#33FFFC");
textSize(difference);
fill("#EC13D2");
text("Mayank",100,150);
document.getElementById("fontsize").innerHTML="Font size of the text will be "+ difference + "px";
}
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
}
}
function draw()
{
background("#33FFFC");
textSize(50);
fill("#EC13D2");
text("Mayank",100,150);
}
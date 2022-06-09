function setup() {
canvas=createCanvas(380,380);
canvas.center()
video=createCapture(VIDEO);
video.hide();


} 
img="";
Status="";
object=[];
function preload() {
img=loadImage("dog_cat.jpg");
}

function draw() {
    image(video,0,0,380,380);

   
    if(Status !="" )
    {
       //r=random(255);
        //g=random(255);
        //b=random(255);
        objectDetector.detect(video,gotResult);
       for (i = 0; i < object.length; i++) {
           document.getElementById("status").innerHTML = "Status = Object Detected";
           document.getElementById("number_of_objects").innerHTML = "Number of objects detected are:" + object.length;
           //fill(r,g,b);
           fill("#ff0000");
           percent = floor(object[i].confidence * 100);
           text(object[i].label + "  " + percent + "%" , object[i].x + 15  , object[i].y + 15);
           noFill();
           //stroke(r,g,b);
           stroke("#ff0000");
           rect(object[i].x , object[i].y , object[i].width , object[i].height );
       }
    }
}

function modelLoaded() {
    console.log("Model is loaded");
    Status=true;

}

function gotResult(error,result) {
    if (error) {
        console.log(error);
    }
console.log(result);
object = result;    
}

function start() {
    objectDetector=ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects ";

    
}
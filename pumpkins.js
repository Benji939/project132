status=""
function preload(){
    img=loadImage("20211030_193525.jpg")
    }
    function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"
    }
    function draw(){
        image(img,0,0,640,420)
    }
    function modelLoaded(){
        console.log("Model Loaded!");
    
    }
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
    }
    function back(){
    
    }
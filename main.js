function preload(){

}
function setup(){
canvas= createCanvas(300,400);
canvas.center()
video=createCapture(VIDEO);
video.hide()
Classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Sd3J1j3mZ/model.json",modelloaded);
}
function modelloaded(){
    console.log("Model is loaded");
}
function draw(){
image(video,0,0,300,400);
Classifier.classify(video,gotresult)
}
function gotresult(error,result){
    if(error){
        console.log("ERROR :",error)
    }
    else{
       console.log("result :",result);
       obj=result[0].label;
       accuracy=result[0].confidence.toFixed(2)*100;
       document.getElementById("displayresult").innerHTML=obj;
       document.getElementById("displayaccuracy").innerHTML=accuracy+"%";
    }
}
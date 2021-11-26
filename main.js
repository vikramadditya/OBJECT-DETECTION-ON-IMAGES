 img = "";
  opjects = [];
 var status = "";
 objectDetector="";
 function start()
 {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerhtml="Status : Detectind Objects "
 }
function setup ()
{
    canvas = creteCanvas(380,380)
    canvas.center()
    video = createcanvas(VIDEO);
    video.size(380,380)
    video = hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerhtml="Status : Detectind Objects "
}
function preload()
{
img= loadImage('dog_cat.jpg');
}
function draw()
{
image(video, 0, 0, 380 , 380);

if(status !="")
{
    objectDetector.detect(video , gotresult)
    
    r = random (255)
    g = random (255)
    b = random (255)
    for (i=0; i <object.length; i++)
        {
            document.getElementById("status").innerhtml="Status : Detectind Objects "
            document.getElementById("number_of_opjects").innerHTML= "number of opjects detected are"+ opjects.length
            fill(r,g,b);
            percent =floor(objects[i].confidence * 100);
            text(object[i].lable +" " + percent = "%", object[i].x +15,object[i].y +15 );
            noFill();
           stoke(r,g,b);
rect(object[i].x,object[i].y, object[i].width, object[i].height)
        }
    }
}
fill("#FF0000");
text("Dog",45,75);
stoke("#FF0000");
rect(30 , 60 ,450 , 350);

fill("#FF0000");
text("cat",45,75);
noFill();
stoke("#FF0000");
rect(300 , 90 ,270 , 320);
}
function modelLoaded ()
{
    console.log("model Loaded!");
   status =  true;
    objectDetector.detect(video , gotresult);
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult()
{
if(error) {
console.log(error);
}
console.log (result);
object = result;
}
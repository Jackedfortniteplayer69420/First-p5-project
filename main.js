function preload()
 { 
 
 }

function setup()
{
     canvas = createCanvas(800, 700);
     canvas.position(100, 250);
      video = createCapture(VIDEO);
      video.hide(); 
}

function draw()
 { 
    image(video, 100, 100, 600, 500);
    stroke("blue");
    fill("green");
    circle(50,50,80);
    stroke("blue");
    fill("yellow");
    rect(90,40,700,20);
    stroke("blue");
    fill("green");
    circle(750,50,80);
    stroke("blue");
    fill("yellow");
    rect(750,50,20,600);
    stroke("blue");
    fill("green");
    circle(750,650,80);
    stroke("blue");
    fill("yellow");
    rect(80,650,700,20);
    stroke("blue");
    fill("green");
    circle(80,650,80);
    stroke("blue");
    fill("yellow");
    rect(50,45,20,600);
    stroke("blue");
    fill("green");
    
    
    
 }

function take_snapshot() 
{ 
    save("my_Filteredimg.png"); 
}



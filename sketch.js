let img1, img2;

let numbRects;
let rects = [];

function setup() 
{
    img1 = loadImage("data/pantalla1.png");
    numbRects = 0;

	createCanvas(800, 600);

    rects.forEach(function(element)
    {
        element.setSize(element.size);
   })

    for(let i = 0; i < numbRects; i++)
    {
        rects.push(new rectangle(random(0, 400), random(0, 400), random(10, 40), random(1, 40), random(-2, 2))); 
    }
}

function draw()
{
    background(110, 154, 157);
    console.log(mouseX + ", " + mouseY);
    rectMode(CENTER);
    image(img1, 0, 0);
    textSize(70);
    textAlign(CENTER);
    text(numbRects, 400, 314);
    //rects.paint();
}

function mousePressed()
{
    if(dist(mouseX, mouseY, 116, 284) < 20)
    {
        if(numbRects == 0)
        {
            numbRects = 10;
        }

        else
        {
            numbRects--;
        }
    }

    if(dist(mouseX, mouseY, 681, 284) < 20)
    {
        if(numbRects == 10)
        {
            numbRects = 0;
        }

        else
        {
            numbRects++;
        }
    }
}

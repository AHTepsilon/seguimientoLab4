let img1, img2;

let numbRects;
let rects = [];

let screen1;

function setup() 
{
    img1 = loadImage("data/pantalla1.png");
    img2 = loadImage("data/pantalla2.png");
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

    if(!screen1)
    {
        image(img1, 0, 0);
        textSize(70);
        textAlign(CENTER);
        text(numbRects, 400, 314);
    }

    if(screen1)
    {
        image(img2, 0, 0);
    }

    //rects.paint();
}

function mousePressed()
{
    if(dist(mouseX, mouseY, 116, 284) < 42)
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

    if(dist(mouseX, mouseY, 681, 284) < 40)
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

    if(mouseX > 303 && mouseX < 497 && mouseY > 383 && mouseY < 452 && numbRects != 0)
    {
        screen1 = true;
    }
    else if(numbRects == 0)
    {
        textSize(30);
        text('ERROR: el número no puede ser 0', 200, 300);
    }
}

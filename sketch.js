let img1, img2;

let numbRects;
let rects = [];

let screen1;

let rectObject, circleObject;

let isError;

function setup() 
{
    img1 = loadImage("data/pantalla1.png");
    img2 = loadImage("data/pantalla2.png");
    numbRects = 0;
    isError = false;

    rectObject = new rectangle(random(0, 800), random(0, 300), random(10, 40), random(1, 10), random(-2, 2));
    circleObject = new circ(random(0, 800), random(301, 600), random(10, 40), random(1, 10), random(-2, 2))
    // rectObject = new rectangle(numbRects);
    //rectObjectMap = rectObject.map(numbRects++);

	createCanvas(800, 600);

    rects.forEach(function(element)
    {
        element.setSize(element.size);
   })

   
   //rectObject.assignNumbs(random(0, 800), random(0, 300), random(10, 40), random(0, 10), random(-2, 2));

}

function draw()
{
    background(110, 154, 157);
    //console.log(mouseX + ", " + mouseY);
    rectMode(CENTER);

    if(!screen1)
    {
        fill(0);
        image(img1, 0, 0);
        textSize(70);
        textAlign(CENTER);
        text(numbRects, 400, 314);

        if(isError)
        {
            textSize(30);
            fill(255, 0, 0);
            text("ERROR: número no puede ser igual a 0", 400, 200);
        }
    }

    if(screen1)
    {
        image(img2, 0, 0);

        rectInit();
        //circleObject.paint();
    }
}

function rectInit()
{
    for(let i = 0; i < numbRects; i++)
    {
        rects.push(rectObject); 
        rectObject.paint();
    }
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
        rects = [numbRects];
    }
    else if(mouseX > 303 && mouseX < 497 && mouseY > 383 && mouseY < 452 && numbRects == 0)
    {
        textSize(30);
        isError = true;
    }
}

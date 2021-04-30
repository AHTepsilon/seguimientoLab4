let img1, img2;

let numbRects;
let rects = [];
let circs = [];

let paintCircle;

let screen1;

let rectObject;

let isError;

let rectPosX, rectPosY, rectSize, rectNumb, rectDir;

function setup() 
{
    img1 = loadImage("data/pantalla1.png");
    img2 = loadImage("data/pantalla2.png");
    numbRects = 0;
    isError = false;

    // rectObject = new rectangle(numbRects);
    //rectObjectMap = rectObject.map(numbRects++);

	createCanvas(800, 600);

   //rectObject.assignNumbs(random(0, 800), random(0, 300), random(10, 40), random(0, 10), random(-2, 2));   
}

function draw()
{
    background(110, 154, 157);
   // console.log(mouseX + ", " + mouseY);
    //console.log(numbRects);
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
        for (let index = 0; index < rects.length; index++) 
        {
            rects[index].paint();
            rects[index].move();
        }   
    }
}

function rectInit()
{    
    for(let i = 0; i < numbRects; i++)
    {
        rectPosX = random(0, 800);
        rectPosY = random(0, 300);
        rectSize = random(10, 40);
        rectNumb = random(1, 10);
        rectDir = random(-2, 2);


        let rectObject = new rectangle(rectPosX, rectPosY, rectSize, random(1, 10), rectDir);
        rects[i] = rectObject;
        //rects.push(rectObject);
    
    }
}

function rectReSize()
{
    for (let index = 0; index < rects.length; index++) 
    {
        rects[index].resize();
    }
}

function rectPaint()
{
    
}

function sortThat()
{
    for (let index = 0; index < rects.length; index++) 
    {
        rects.sort(rects[index], rectPosX);
    }
}

function keyPressed()
{
    switch(key)
    {
        case 'n':
            sortThat();
            break;
        case 'N':
            sortThat();
            break;
        default:
            break;
    }
}

function mousePressed()
{
    //buttons screen 1

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
        rectInit();
    }
    else if(mouseX > 303 && mouseX < 497 && mouseY > 383 && mouseY < 452 && numbRects == 0)
    {
        textSize(30);
        isError = true;
    }

    //buttons screen 2

    if(dist(mouseX, mouseY, 125, 533) < 30) //add a new rect
    {
        rects.push(new rectangle(random(0, 800), random(0, 300), random(5, 40), random(1, 10), random(-2, 2)));
        numbRects++;

        if(numbRects > 10) //keeps the amount of squares from going above 10
        {
            rects.pop();
            numbRects = 10;
        }
    }

    if(dist(mouseX, mouseY, 291, 533) < 30) //deletes a rect
    {
        rects.pop();
        numbRects--;

        if(numbRects < 1) //keeps the amount of squares from going below 0
        {
            rects.push(new rectangle(random(0, 800), random(0, 300), random(5, 40), random(1, 10), random(-2, 2)));
            numbRects = 1;
        }
    }

    if(dist(mouseX, mouseY, 489, 533) < 30) //changes the size
    {
        rects.forEach(rectReSize);
    }

    if(dist(mouseX, mouseY, 668, 533) < 30) //creates the ball array
    {
        if (paintCircle == false) 
        {

            circs = rects.map
            (element => 
            {
                return element = new circ(element.getPosx());
            })
    
            paintCircle = true;
        }
    }

}

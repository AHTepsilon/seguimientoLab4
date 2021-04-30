class rectangle
{
    constructor(posX, posY, size, numb, dir)
    {
        this.posX = posX;
        this.posY = posY;
        this.size = size;

        this.numb = numb;
        this.dir = dir;
    }

    paint()
    {
        rect(this.posX, this.posY, this.size);  
    }

    move()
    {
        this.posX += this.dir;

        if(this.posX > 800)
        {
           this.posX = 0;
        }

        if(this.posX < 0)
        {
            this.posX = 800;
        }
    }

    /*static get[Symbol.species]() {return Array;}

    assignNumbs(posX, posY, size, numb, dir)
    {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.numb = numb;
        this.dir = dir;
    }

    paint()
    {
        rect(posX, posY, size);
    }*/


}
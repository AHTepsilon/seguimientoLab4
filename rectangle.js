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
        rect(posX, posY, size);  
    }

}
class circ
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
        circle(this.posX, this.posY, this.size);
        console.log("it works")
    }

    move()
    {
        this.posX += this.dir;
    }
}
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
        stroke(255);
        strokeWeight(2);
        fill(0);
        circle(this.posX, this.posY, this.size);

        noStroke();
        textSize(20);
        fill(255);
        text(Math.floor(this.numb), this.posX, this.posY + 5);
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

    stop()
    {
        this.posY = 200;
    }

    getNumb(){
        return this.numb;
    }

    getSize()
    {
        return this.size;
    }

    getDir()
    {
        return this.dir;
    }

    getPosX()
    {
        return this.posX;
    }

    setPosX(posX)
    {
        this.posX = posX;
    }

    getPosY()
    {
        return this.posY;
    }

    setPosY(posY)
    {
        this.posY = posY;
    }

    resize()
    {
        this.size += 1;
    }

}
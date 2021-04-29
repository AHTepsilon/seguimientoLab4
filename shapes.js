class shapes
{
    constructor()
    {
        this.size = 50;
    }

    paint()
    {

    }

    move()
    {

    }

    setSize() 
    {
        if (this.size < 100) 
        {
            this.size = this.size * 2;
        }
    }
}
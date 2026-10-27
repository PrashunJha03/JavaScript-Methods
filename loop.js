function printno()
{
    for(i = 1;i <= 100; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log("CDAC Bangalore")
        }

        else if (i % 3 === 0)
        {
            console.log("Cdac")
        }
        
        else if (i % 5 === 0)
        {
            console.log("Bangalore")
        }
        
        else
        {
            console.log(i)
        }
    }
}

printno()
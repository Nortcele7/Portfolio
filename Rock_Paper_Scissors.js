function go()
{
    a = document.getElementById("a").value
    var user,comp;

    comp = Math.floor(Math.random()*3)

    if(a=="Rock")
    {
       user=0
    }
    else if(a=="Paper")
    {
       user=1
    }
    else if(a=="Scissors")
    {
       user=2
    }
    else
    {
        alert("Invalid")
        return;
    }

    if(comp==0)
    {
        b="Rock"
    }

    else if(comp==1)
    {
        b="Paper"
    }

    else
    {
        b="Scissors"
    }

    if(user==comp)
    {
        alert(`You choose ${a}\n Computer choose ${b}\n Draw`)
    }

    else if(user==0 && comp==1 )
    {
        alert(`You choose ${a}\n Computer choose ${b}\n You Lose`)
    }

    else if(user==1 && comp==2 )
    {
        alert(`You choose ${a}\n Computer choose ${b}\n You Lose`)
    }

    else if(user==2 && comp==0 )
    {
        alert(`You choose ${a}\n Computer choose ${b}\n You Lose`)
    }

    else
    {
        alert(`You chose ${a}\nComputer chose ${b}\nYou WIN`);

    }




    


}
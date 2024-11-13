function generate()
{
    a = Math.ceil(Math.random()*10);
    var quote;

    if(a==1)
    {
        quote = "If you get what you want thats God's direction but if you don't get what you want thats God's protection";
    }
    else if(a==2)
    {
        quote = "We cannot solve problems with the kind of thinking we employed when we came up with them";
    }
    else if(a==3)
    {
        quote = "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you"
    }
    else if(a==4)
    {
        quote = "I never dreamed about success. I worked for it"
    }
    else if(a==5)
    {
        quote="You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction"
    }
    else if(a==6)
    {
        quote="Keep your eyes on the stars, and your feet on the ground"
    }
    else if(a==7)
    {
        quote="Champions keep playing until they get it right"
    }
    else if(a==8)
    {
        quote="In three words I can sum up everything I've learned about life: It goes on"
    }
    else if(a==9)
    {
        quote="A problem is a chance for you to do your best"
    }
    else if(a==10)
    {
        quote="If you fail one time doesn't matter but if you fail another time, fail better"
    }
   

    document.getElementById("output").innerHTML=quote;


}
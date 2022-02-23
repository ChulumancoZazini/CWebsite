

var myHeader = document.getElementById('my_name');
var mybio = document.getElementById('my_bio');

function validateForm()
{
    let fname = document.forms["myFrm"]["name"].value;
    let lname =  document.forms["myFrm"]["surname"].value;
    let email = document.forms["myFrm"]["email"].value;
    let msg = document.forms["myFrm"]["message"].value;

    var regname= /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regname.test(fname))
    {
        alert ("Invalid name given")
    }    
    /*if (fname == "")
    {
        alert("Name must not be empty");
        else if(lname == "" && )
        {
            alert("Surname must not be empty");
        }
        else if(email == "")
        {
            alert("Email must not be empty");
        }
        else if(msg == "")
        {
            alert("Message must not be empty");
        }
    }*/
   
    
}


myHeader.innerHTML ="Chulumanco";
mybio.innerHTML=mybio.innerHTML+ "Chulumanco is a Xhosa word meaning happiness\nhence the logo happiness.Happiness means different\n";
mybio.innerHTML =mybio.innerHTML+ "things to different people and I believe I was given that\nname for a reason and as I grow up I see that I have folowed my\n";
mybio.innerHTML =mybio.innerHTML+ "name. Happiness is laughter, happiness is family,happines is learning\nhappiness is growing and happiness is\n";
mybio.innerHTML =mybio.innerHTML+ "being free ,but that's only what happiness is to me.So\njoin me in my world of happiness as I embark and grow on a journey of web\n";
mybio.innerHTML =mybio.innerHTML+ "devolpment for the first time. I hope I make it worth your while";




 
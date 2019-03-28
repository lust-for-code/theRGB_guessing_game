var numberOfSquares=6;
var colors=generateRandomColors(numberOfSquares); 

//slecting all the squares
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();

//select the color display
var colorDisplay=document.getElementById("colordisplay");
colorDisplay.textContent=pickedColor;

var messageDisplay=document.querySelector("#message");


var h1=document.querySelector("h1");


var reset=document.getElementById("reset");
var level=document.querySelectorAll(".level")

for(var i=0;i<level.length;i++)
{
    level[i].addEventListener("click",function(){
        level[0].classList.remove("selected");
        level[1].classList.remove("selected");
        this.classList.add("selected");
        
        if(this.textContent==="EASY")
        {
            numberOfSquares=3;
            
            
        }
        else
        {
            numberOfSquares=6;
        }
        resetit();
    });
}

function resetit()
{
     //reset the message dispaly
     messageDisplay.textContent="";
     //reset the text content of the Button
     reset.textContent="NEW COLORS";
     //create new random colors
     colors=generateRandomColors(numberOfSquares);
     //pick a new color
     pickedColor=pickColor();
     //reset the colorDisplay 
     colorDisplay.textContent=pickedColor;

     for(var i=0;i<squares.length;i++)
     {
         if(colors[i])
         {
             squares[i].style.display="block";
             squares[i].style.background=colors[i];
         }
         else
         {
            squares[i].style.display="none";
         }
     }
     h1.style.background="lightsalmon";
}



reset.addEventListener("click",function(){
    resetit();
});

for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background;
        if(clickedColor===pickedColor )
        {
            messageDisplay.textContent="Correct!!";
            changeAll(pickedColor);
            h1.style.background=clickedColor;
            reset.textContent="PLAY AGAIN ?";
        }
        else
        {
            this.style.background="#232323";
            messageDisplay.textContent="Try Again!!";
        }
    });
}

function changeAll(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}

function pickColor()
{
    var rand=Math.floor(Math.random()*colors.length);
    return colors[rand];
}

function generateRandomColors(n)
{
    //make an array
    arr=[];
    //fill the array
    for(var i=0;i<n;i++)
    {
        var s=randomColor();
        arr.push(s);
    }
    //return the array
    return arr;
}

function randomColor()
{
    var R=String(Math.floor(Math.random()*256));
    var G=String(Math.floor(Math.random()*256));
    var B=String(Math.floor(Math.random()*256));
    var rgbColor="rgb("+R+", "+G+", "+B+")";
    return rgbColor;
}
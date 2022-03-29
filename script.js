
var ball = document.getElementById("ball");
ball.style.top=(10*Math.floor(Math.random()*50)).toString()+"px";
ball.style.left=(10*Math.floor(Math.random()*50)).toString()+"px";
// ball.style.left="800px";
window.addEventListener("keydown", function (event) {
  let code = event.key;
  console.log(code);
   if(code=='w')
   { if(ball.style.top=="0px")
   {
       return;
   }
     let topDistance=ball.style.top;
     
     let dist=parseInt(topDistance);
    
     dist--;
     ball.style.top=dist.toString()+ "px";
 
   }
   else  if(code=='a')
   { if(ball.style.left=="0px")
   {
       return;
   }
     let topDistance=ball.style.left;
     
     let dist=parseInt(topDistance);
    
     dist--;
     ball.style.left=dist.toString()+ "px";
 
   }
   else  if(code=='s')
   { 
    if(ball.style.top>=(window.innerHeight-50).toString()+"px")
    {
        return;
    }
     let topDistance=ball.style.top;
     
     let dist=parseInt(topDistance);
    
     dist++;
     ball.style.top=dist.toString()+ "px";
 
   }
   else  if(code=='d')
   {  if(ball.style.left==(window.innerWidth-50).toString()+"px")
   {
       return;
   }
     let topDistance=ball.style.left;
     
     let dist=parseInt(topDistance);
    
     dist++;
     ball.style.left=dist.toString()+ "px";
 
   }
});

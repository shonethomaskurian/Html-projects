
   function page(use,pas)
   {
     var x=0;
     var user= use.value;
     var pass= pas.value;
     var usear=["shone","alex","ashi","hari"];
     var passr=["123","234","456","342"];
     for(var i=0; i<=usear.length;i++)
       {
           if(user==usear[i] && pass==passr[i])
            {
               x=1;
               break;
             }
        }
     if(x==1)
     window.alert("Login Successfull");
     else
     window.alert("Access denied");
      }

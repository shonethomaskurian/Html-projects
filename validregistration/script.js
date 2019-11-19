$(document).ready(function() {
  $("#c").blur (function(){
    if(document.getElementById("c").value=="")
    {
      document.getElementById("o").innerHTML="please fill out this field";

    }
    else{
      document.getElementById("o").innerHTML="";
    }
  });
  $("#e").blur (function(){
    var char = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(document.getElementById("e").value.match(char))
{
  document.getElementById("p").innerHTML="";

}
else
{
  document.getElementById("p").innerHTML="You have entered an invalid email address!";

}
  });
  $("#g").keyup (function(){
  var passw=  /^[A-Za-z]\w{6,8}/;

if(document.getElementById("g").value.match(passw))
{
document.getElementById("q").innerHTML="<img src=\"tic.png\" width=\"25px\" height=\"25px\">";
}
else
{
  document.getElementById("q").innerHTML="<img src=\"x-mark-32.png\" width=\"25px\" height=\"25px\">";
}
});
$("#i").keyup(function() {
       var password = $("#g").val();
       $("#r").html(password == $(this).val() ? "<img src=\"tic.png\" width=\"25px\" height=\"25px\">" : "<img src=\"x-mark-32.png\" width=\"25px\" height=\"25px\">");
   });
   $("#k").blur(function() {
   var exp2 = document.getElementById("k").value;
            var d = new Date( exp2 );
            var year = d.getFullYear();

            var dr = new Date();
            var n = dr.getFullYear();
            var age= n-year;
            if(age>=18){
              document.getElementById("s").innerHTML="hey you can give the bio";
            }
            else{
                document.getElementById("s").innerHTML=" should contain parents sign"+"<input type=\"checkbox\">";
            }
          });
        });
var len=140;
function fun(){
  var x = document.getElementById("m").value.length;
 var y = 140-x;
 if(y>=0)
 {
   document.getElementById("z").innerHTML ="must contain:"+y;
 }

}

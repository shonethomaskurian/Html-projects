var x=new XMLHttpRequest();
x.onload=function(){
  if(x.status === 200){
    document.getElementById('content').innerHTML=x.responseText;
  }
};
x.open('GET','ajax2.html',true);
x.send(null);

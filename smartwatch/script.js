  $('a').on('click',function(e){//message part
  e.preventDefault();
  var url=this.href;
  $('a.current').removeClass('current');
  $(this).addClass('current');
  $('#container').remove();
  $('#content').load(url + '#container').hide().fadeIn('slow');
});
window.onload = function () {//on  loading function carryon
        DisplayCurrentTime();
    };
function DisplayCurrentTime() {
        var date = new Date();//getting date
        var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        time = hours + ":" + minutes +" "+ am_pm;
         document.getElementById("f").innerHTML=time;
    };

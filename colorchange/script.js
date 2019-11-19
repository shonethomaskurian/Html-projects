  $(document).ready(function(){
    var div = $('div');
    var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];//creating colours in array
    var currentIndex = 0;
    setInterval(function () {
       div.css({
         backgroundColor: colors[currentIndex]//setting background color as the array elements
       });
       if (!colors[currentIndex]) {
           currentIndex = 0;
       } else {
           currentIndex++;
       }
    }, 900);
});

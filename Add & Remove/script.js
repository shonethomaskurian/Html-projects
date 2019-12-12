$(document).on("keypress", function(e){
        if(e.which == 13){
          var ne = document.createElement('li');
        var newT = document.createTextNode( $("#a").val());
        ne.appendChild(newT);
        var position = document.getElementsByTagName('ul')[0];
        position.appendChild(ne);
        $('#a').val('');
        }
        $("#listi").click(function (e) {
           $(e.target).remove();
         });
});

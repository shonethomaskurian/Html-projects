
$(document).ready(function () {

    $("#submitCity").click(function () {
        return getWeather();
    });


});

function getWeather() { //function to get weather condition
    var city = $("#city").val();

    if (city != '') {

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                var widget = showResults(data)


                $("#showWeather").html(widget);

                $("#city").val('');
            }

        });


    } else {
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }


}


function showResults(data) {   //function to showing results
    return '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for ' + data.name + ', ' + data.sys.country + '</h2>' + "<h3 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + " &deg;C</h3>"
}

$(document).ready(function() {

      var cities = ["NEWYORK","NEW YORK CITY","NY","SAN FRANCISCO","SF","BAY AREA","LOS ANGELES","LA","LAX","SYDNEY","SYD","AUSTIN","ATX"];
      var images = ["nyc.jpg","nyc.jpg","nyc.jpg","sf.jpg","sf.jpg","sf.jpg","la.jpg", "la.jpg", "la.jpg", "sydney.jpg", "sydney.jpg","austin.jpg","austin.jpg"];
      $("#submit-btn").click(UpdateCityImage);
      

      function UpdateCityImage(e) {
        var cityName = "";
        e.preventDefault();
        cityName = $("#city-type").val();
        if (citynameIsValid(cityName)) {
            showCityAsBackground(cityName);
        } else {
            showDefaultCityBackground(cityName);
        }
      }

      function citynameIsValid(cityName) {
        var result = false;
        if (cities.indexOf(cityName.toUpperCase().replace(/ /g, "")) > -1) {
            result = true;
        }
        return result;
      }

      function showCityAsBackground(cityName) {
        var i = 0;
        var bgURL = ""
        i = cities.indexOf(cityName.toUpperCase().replace(/ /g, ""));
        bgURL = "url(images/" + images[i] + ")"
        $("body").css("background-image", bgURL);
      }

      function showDefaultCityBackground(cityName) {
        $("body").css("background-image","url(images/citipix_skyline.jpg)");  
        $("#city-type").html("");
        $("#city-type").attr("placeholder", cityName + " no image");
      }
});
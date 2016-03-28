$(document).ready(function () {
    //on load show the 'explore' options based on a pre-set tag; the functions should request the user to log in by default
    //then grab the user's client ID and then determine the access token using that.

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/kanwars/media/recent?callback=?&access_token=175248726.5787f40.a5de342ca8d84f08b57294de6a37ab88",
        success: function (data) {
            console.log(data);
            for (var i = 0; i < 15; i++) { // if no results, put an alert
                $(".explore-list").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>");
            }
        }
    });

    /*   var feed = new Instafeed({
           get: 'tagged',
           tagName: 'awesome',
           clientId: '5787f4085ec443409cde6d78c0ee6817'
       });
       feed.run();*/

    // Get the value from the search box, pass it to a function that displays the results by appending them to the area
    $('#search-term').submit(function (event) {
        event.preventDefault();
        var searchTerm = $('#query').val();
        getResults(searchTerm);
    });




});

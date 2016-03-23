$(document).ready(function () {

    /*$.ajax({
        url: url,
        data: params,
        dataType: 'jsonp',
        type: 'GET',
        error: function (data) {
            console.log(data);
        }
    });*/
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=175248726.5787f40.a5de342ca8d84f08b57294de6a37ab88",
        success: function (data) {
            console.log(data);
            for (var i = 0; i < 6; i++) { // if no results, put an alert
                $(".popular").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url + "'></img></a></li>");
            }
        }
    });
});

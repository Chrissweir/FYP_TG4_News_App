// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);


    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);


        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    //Page Header and Content Loader -- Language Select
    $(document).ready(function () {
        var feedURL = "http://www.rte.ie/news/rss/nuacht.xml";
        $("#section-title").html("");
        $("#section-title").append("Nuacht TG4");
        fetch();
        $("#languageSelect").change(function() {
            if($('#languageSelect').val() == "Gaeilge")
            {
                feedURL = "http://www.rte.ie/news/rss/nuacht.xml";
                $("#section-title").html("");
                $("#section-title").append("Nuacht TG4");
                fetch(feedURL);
            }
            else if ($('#languageSelect').val() == "English")
            {
                feedURL = "http://www.rte.ie/news/rss/news-headlines.xml";
                $("#section-title").html("");
                $("#section-title").append("TG4 News");
                fetch(feedURL);
            }
        });

        //Fetch the RSS feed and append items to Content page
        function fetch() {
            $("#rssOutput").html("");
            $.get(feedURL, function (data) {
                var $xml = $(data);
                $xml.find("item").each(function () {
                    var $this = $(this),
                        item = {
                            title: $this.find("title").text(),
                            img: $this.find("enclosure").attr('url'),
                            link: $this.find("link").text(),
                            description: $this.find("description").text(),
                            pubDate: $this.find("pubDate").text(),
                            author: $this.find("author").text()
                        }
                    $("#rssOutput").append($('<h5/>').text(item.pubDate));
                    $("#rssOutput").append($('<img id="image"/>').attr("src", item.img));
                    $("#rssOutput").append($('<a id="news-title"/>').text(item.title).attr("href", item.link));
                    $("#rssOutput").append($('<p id="news-desc"/>').text(item.description));
                    $("#rssOutput").append($('<p id="border"/>'));
                });
            });
        }
    });
})();


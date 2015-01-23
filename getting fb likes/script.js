/*
23rd Jan - created initial func which logs likes to console - however, it requires the band's url, for example, searching you blew it returns nothing, you would need to search for youblewitfl. Need a way to search facebook pages, find the right one and get the likes for that. Sure it can be done. Instead of leaving it up to the code to find the right one, some way to put in the facbook drop down thing?
*/

function facebookLikes() {
	$.get('https://graph.facebook.com/' + searchValue + '?fields=likes', function(data) {
        $(data).each(function(){
            console.log(data.likes);
        })
    })
};

$(document).ready(function(){    
    $('#submit').click(function(){
        searchValue = document.getElementById("search").value;
        facebookLikes();
    })
});
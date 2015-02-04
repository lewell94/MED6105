/*
4th feb - on the advice of nick making it all last fm. made this. new system - instead of tiers do it subtracting from a total. means all this has to do is get the number of listeners. 
*/

function listenerSearch() {
	$.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=' + searchValue + '&api_key=2fc90f462963de3f1aa5889f105418ec&format=json', function(data) {
        $(data.artist).each(function(){
            listeners = this.stats.listeners;
        })
    })
}

$(document).ready(function(){    
    $('#submit').click(function(){
        searchValue = document.getElementById("search").value;
        listenerSearch();
    })
});
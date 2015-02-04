/*
4th feb - created this. it works. uses stuf from genre check and last.fm listener checl. makes sure that they dont go over 10mil listeners. other things are genre specifics (basement not being allowed in rock despite rock being the closest one) and the actual number of listeners we are allowing them.
*/

$(document).ready(function(){    
    $('#genre-save').click(function(){
        genreValue = document.getElementById("genre-select").value;
    })
});

function listenerSearch() {
	$.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=' + searchValue + '&api_key=2fc90f462963de3f1aa5889f105418ec&format=json', function(data) {
        $(data.artist).each(function(){
            listeners = this.stats.listeners;
            newListenersToSpend = listenersToSpend - listeners;
            if(newListenersToSpend < 0){
                $('body').append('<p>Sorry, you do not have enough listeners left for this artist</p>');
            } else {
                $('.text').empty();
                $('.text').append('<p>Your remaining listener count is ' + newListenersToSpend + '</p>');
            }
        })
    })
}

function listenerSearchTwo() {
	$.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=' + searchValue + '&api_key=2fc90f462963de3f1aa5889f105418ec&format=json', function(data) {
        $(data.artist).each(function(){
            listeners = this.stats.listeners;
            newListenersToSpendTwo = newListenersToSpend - listeners;
            if(newListenersToSpendTwo < 0){
                $('body').append('<p>Sorry, you do not have enough listeners left for this artist</p>');
            } else {
                $('.text').empty();
                $('.text').append('<p>Your remaining listener count is ' + newListenersToSpendTwo + '</p>');
            }
        })
    })
}

function listenerSearchThree() {
	$.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=' + searchValue + '&api_key=2fc90f462963de3f1aa5889f105418ec&format=json', function(data) {
        $(data.artist).each(function(){
            listeners = this.stats.listeners;
            newListenersToSpendThree = newListenersToSpendTwo - listeners;
            if(newListenersToSpendThree < 0){
                $('body').append('<p>Sorry, you do not have enough listeners left for this artist</p>');
            } else {
                $('.text').empty();
                $('.text').append('<p>Your remaining listener count is ' + newListenersToSpendThree + '</p>');
            }
        })
    })
}

function genreCheck() {
	$.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=' + searchValue + '&api_key=2fc90f462963de3f1aa5889f105418ec&format=json', function(data) {
        $(data.artist).each(function(){
            tagList = this.tags.tag
            if (tagList === undefined){
                $('body').append('no genre');
            } else {
                doesGenreMatch = null
                function getTagName(element, index, array) {
                    if(element.name === genreValue) {
                        doesGenreMatch = true
                    } else {}
                }
                tagList.forEach(getTagName);
                if(doesGenreMatch === true){
                    $('body').append('<p>Yay! ' + searchValue + ' is a ' + genreValue + ' band</p>');
                } else {
                    $('body').append('<p>Nay! ' + searchValue + ' is not a ' + genreValue + ' band</p>');
                }
            }
        })
    })
}

function updateListenerCount() {
    newListenersToSpend = listenersToSpend - listeners;
    console.log(newListenersToSpend);
}

$(document).ready(function(){  
    listenersToSpend = 10000000;
    $('.text').append(" " + listenersToSpend);
    $('#submit-one').click(function(){
        searchValue = document.getElementById("search-one").value;
        listenerSearch();
        genreCheck();
    })
    $('#submit-two').click(function(){
        searchValue = document.getElementById("search-two").value;
        listenerSearchTwo();
        genreCheck();
    })
    $('#submit-three').click(function(){
        searchValue = document.getElementById("search-three").value;
        listenerSearchThree();
        genreCheck();
    })
});
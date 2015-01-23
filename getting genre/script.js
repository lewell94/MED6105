/* Trying it with three different services. At first used last.fm because had used it before - couldn't get it to drill down. Then tried spotify - see problems, then tried itunes - see problems - 15th jan. 

Finally got last.fm to work with the getTagName function and forEach, next big step - check the genre matches, this might be easier when genre is stored in db? done! create the genreValue var at top - akin to db save - and run the check in the getTagName function (which is completely changed from earlier), before checking the value of the doesGenreMatch variable. PROBLEM = user created tags cause problems - a great big pile of leaves dont have emo on. how to fix? also moved spotify and itunes into fail.js to clean up. - 19th jan */

//What do when no genre? Also A Great Big Pile of Leaves not having emo?

$(document).ready(function(){    
    $('#genre-save').click(function(){
        genreValue = document.getElementById("genre-select").value;
    })
});

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

$(document).ready(function(){    
    $('#submit').click(function(){
        searchValue = document.getElementById("search").value;
        genreCheck();
    })
});

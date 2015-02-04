$(document).ready(function(){    
    $('#genre-save').click(function(){
        genreValue = document.getElementById("genre-select").value;
        if(genreValue === 'pop'){
            document.getElementById("search-one").setAttribute("data-maximum", "999999999999");
            document.getElementById("search-one").setAttribute("data-minimum", "2500000");
            document.getElementById("search-two").setAttribute("data-maximum", "2499999");
            document.getElementById("search-two").setAttribute("data-minimum", "1000000");
            document.getElementById("search-three").setAttribute("data-maximum", "999999");
            document.getElementById("search-three").setAttribute("data-minimum", "500000");
            document.getElementById("search-four").setAttribute("data-maximum", "499999");
            document.getElementById("search-four").setAttribute("data-minimum", "100000");
            document.getElementById("search-five").setAttribute("data-maximum", "99999");
            document.getElementById("search-five").setAttribute("data-minimum", "50000");
            document.getElementById("search-six").setAttribute("data-maximum", "49999");
            document.getElementById("search-six").setAttribute("data-minimum", "0");
        }
        if(genreValue === 'rock'){
            document.getElementById("search-one").setAttribute("data-maximum", "999999999999");
            document.getElementById("search-one").setAttribute("data-minimum", "10");
            document.getElementById("search-two").setAttribute("data-maximum", "9");
            document.getElementById("search-two").setAttribute("data-minimum", "8");
            document.getElementById("search-three").setAttribute("data-maximum", "7");
            document.getElementById("search-three").setAttribute("data-minimum", "6");
            document.getElementById("search-four").setAttribute("data-maximum", "5");
            document.getElementById("search-four").setAttribute("data-minimum", "4");
            document.getElementById("search-five").setAttribute("data-maximum", "3");
            document.getElementById("search-five").setAttribute("data-minimum", "2");
            document.getElementById("search-six").setAttribute("data-maximum", "1");
            document.getElementById("search-six").setAttribute("data-minimum", "0");
        }
    })
});

function artistSearch() {
	$.get('https://api.spotify.com/v1/search?q=' + searchValue + '&type=artist', function(data) {
        $(data.artists).each(function(){
            allResults = this.items;
            bandId = (allResults[0].id);
            $.get('https://api.spotify.com/v1/artists/' + bandId, function(data) {
                followers = data.followers.total;
                if(followers < maximum && followers > minimum){
                    $('body').append('<p>Yay! ' + searchValue + ' is the right size for this slot!</p>');
                } else {
                    $('body').append('<p>Sorry! ' + searchValue + ' is not the right size for this slot!</p>');
                }
            })
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

$(document).ready(function(){    
    $('#submit-one').click(function(){
        searchValue = document.getElementById("search-one").value;
        searchItem = document.querySelector("#search-one");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
        genreCheck();
    })
});

$(document).ready(function(){    
    $('#submit-two').click(function(){
        searchValue = document.getElementById("search-two").value;
        searchItem = document.querySelector("#search-two");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
        genreCheck();
    })
});

$(document).ready(function(){    
    $('#submit-three').click(function(){
        searchValue = document.getElementById("search-three").value;
        searchItem = document.querySelector("#search-three");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
        genreCheck();
    })
});

$(document).ready(function(){    
    $('#submit-four').click(function(){
        searchValue = document.getElementById("search-four").value;
        searchItem = document.querySelector("#search-four");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
        genreCheck();
    })
});

$(document).ready(function(){    
    $('#submit-five').click(function(){
        searchValue = document.getElementById("search-five").value;
        searchItem = document.querySelector("#search-five");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
        genreCheck();
    })
});

$(document).ready(function(){    
    $('#submit-six').click(function(){
        searchValue = document.getElementById("search-six").value;
        searchItem = document.querySelector("#search-six");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
        genreCheck();
    })
});
/*

28th jan - made this a few days ago. it works. moved into this new folder. 

*/

function artistSearch() {
	$.get('https://api.spotify.com/v1/search?q=' + searchValue + '&type=artist', function(data) {
        $(data.artists).each(function(){
            allResults = this.items;
            bandId = (allResults[0].id);
            $.get('https://api.spotify.com/v1/artists/' + bandId, function(data) {
                followers = data.followers.total;
                if(followers < maximum && followers > minimum){
                    $('body').append('<p>success!</p>');
                } else {
                    $('body').append('<p>failure!</p>');
                }
            })
        })
    })  
}

$(document).ready(function(){    
    $('#submit-large').click(function(){
        searchValue = document.getElementById("search-large").value;
        searchItem = document.querySelector("#search-large");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
    })
});

$(document).ready(function(){    
    $('#submit-middle').click(function(){
        searchValue = document.getElementById("search-middle").value;
        searchItem = document.querySelector("#search-middle");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
    })
});

$(document).ready(function(){    
    $('#submit-small').click(function(){
        searchValue = document.getElementById("search-small").value;
        searchItem = document.querySelector("#search-small");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        artistSearch();
    })
});
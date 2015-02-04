/*
23rd Jan - created initial func which logs likes to console - however, it requires the band's url, for example, searching you blew it returns nothing, you would need to search for youblewitfl. Need a way to search facebook pages, find the right one and get the likes for that. Sure it can be done. Instead of leaving it up to the code to find the right one, some way to put in the facbook drop down thing?

24th jan - started trying to fix problem of getting the right band, got to the point where i have a list of all the band's ids logged that are a band and match the name. how to get them to display and user to pick the right one? perhaps this might be easier with last fm listeners?

28th - created new folder for spotify and moved scipt and index into there. leaving this alone for now. 
*/

function findFacebookPage() {
    $.get('https://graph.facebook.com/search?q=' + searchValue + '&type=page&access_token=708633852512243|e0e07e1d784a7594890b358a297663a3', function(data) {
        //idList = [];
        $(data).each(function(){
            searchResults = this.data;
            
            function findBandFromSearchResults(element, index, array) {
                if(element.category === 'Musician/band'){
                    console.log(element.id);
                    /*
                    idPush = element.id;
                    idList.push(idList, idPush);
                    console.log(idList);
                    */
                } else {}
            }
            searchResults.forEach(findBandFromSearchResults);
            
            
        })
    })
};
    

function facebookLikes() {
	$.get('https://graph.facebook.com/' + idNumber + '?fields=likes', function(data) {
        $(data).each(function(){
            likes = data.likes;
        })
        if(likes < maximum && likes > minimum){
            console.log('success');
        } else {
            console.log('failure');
        }
    })
};

$(document).ready(function(){    
    $('#submit-large').click(function(){
        searchValue = document.getElementById("search-large").value;
        findFacebookPage();
        searchItem = document.querySelector("#search-large");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        //facebookLikes();  
    })
});

$(document).ready(function(){    
    $('#submit-middle').click(function(){
        searchValue = document.getElementById("search-middle").value;
        searchItem = document.querySelector("#search-middle");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        facebookLikes();  
    })
});

$(document).ready(function(){    
    $('#submit-small').click(function(){
        searchValue = document.getElementById("search-small").value;
        searchItem = document.querySelector("#search-small");
        maximum = searchItem.dataset.maximum;
        minimum = searchItem.dataset.minimum;
        facebookLikes();  
    })
});
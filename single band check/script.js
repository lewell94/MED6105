$(document).ready(function(){    
    $('#genre-save').click(function(){
        genreValue = document.getElementById("genre-select").value;
    })
});

function bandCheck() {
    $.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=' + searchValue + '&api_key=2fc90f462963de3f1aa5889f105418ec&format=json', function(data){
        $(data.artist).each(function(){
            tagList = this.tags.tag;
            if(tagList === undefined){
                mvNotifier.error('Sorry, this band does not seen to have any last.fm tags.');
            } else {
                doesGenreMatch = null;
                function getTagName(element, index, array) {
                    if(element.name === genreValue) {
                        doesGenreMatch = true
                    } else {}
                }
                tagList.forEach(getTagName);
                listeners = this.stats.listeners;
                newListenersToSpend = $scope.listenersToSpend - listeners;
                if(doesGenreMatch === true && newListenersToSpend > 0){
                    $scope.$apply(function(){
                        $scope.listenersToSpend = newListenersToSpend;
                    })
                    mvNotifier.notify('You may use this artist for your label!');
                }
                else if(doesGenreMatch === true && newListenersToSpend < 0){
                    mvNotifier.error('Sorry, you do not have enough listeners for this artist.');
                }
                else if(doesGenreMatch === null && newListenersToSpend > 0){
                    mvNotifier.error('Sorry, this artist is not considered part of the ' + genreValue + ' genre.')
                }
                else if(doesGenreMatch === null && newListenersToSpend < 0){
                    mvNotifier.error('Sorry, you do not have enough listeners for this artist.');
                    mvNotifier.error('Sorry, this artist is not considered part of the ' + genreValue + ' genre.')
                }
            }
        })
    })
}

$(document).ready(function(){
    $('#submit-one').click(function(){
        searchValue = document.getElementById("search-one").value;
        listenersToSpend = 1000000;
        bandCheck();
    })
})


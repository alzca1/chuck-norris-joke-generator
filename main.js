$(function(){

    $("button").on("click",getJSONData)


    function getJSONData(){
        var jokesApi = ' http://api.icndb.com/jokes/random';

        $.getJSON(jokesApi, function (item){
            var joke = item.value.joke;
            $("#jokebox").html(joke)
        })
    }
           
})
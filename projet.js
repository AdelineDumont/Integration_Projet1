jQuery(document).ready(function () {
    $.ajax({
        url:"http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c417af9f4e94447b3314ec2fd0ff20c",
        type: "GET",
        dataType : "json",
        success: function (data) {
            console.log(data.articles);
            for(i=0; i<data.articles.length; i++){
                $("#news").append("<div class=\"item\"><img src ="+ data.articles[i].urlToImage +"></img>" +
                                    "<h3>" + data.articles[i].title + "</h3>"+
                                    "<p>" + data.articles[i].description + "</p>" +
                                    "<a href=" + data.articles[i].url + ">" +
                                    "<button>" + "Voir l'article" + "</button></div>");
            }
        },
        error : function(resultat, statut, erreur){
         
        },
 
        complete : function(resultat, statut){
 
        }
    });
}); 
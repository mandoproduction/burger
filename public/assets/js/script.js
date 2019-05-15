$(document).ready(function(){


    $(".devour-form").on("submit", function(event){
        event.preventDefault();
        console.log("submit devour")

        var id = $(this).children(".burger_id").val().trim()
        console.log("id: ", id)

        $.ajax({
            method: "PUT",
            url: '/burgers/' + id
        }).then(function(data){
            console.log("data: ", data)

        });

    })




});
//module.exports = script.js;
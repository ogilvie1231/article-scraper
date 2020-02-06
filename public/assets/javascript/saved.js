$(document).ready(function() {
    $('.addFav').on("click", function(event){
        event.preventDefault()
        const title = $(this).attr('data-title');
        const id = $(this).attr('data-id');
        const link = $(this).attr('data-link');
        const summary = $(this).attr('data-sum');
        const img = $(this).attr('data-img');


        console.log("id: ", id)
        console.log("link: ", link)
        console.log("sum: ", summary)
        
        $.ajax({
            url : "/favorites",
            type: "POST",
            data: {title, id, link, summary, img},
            success: function( data ){

            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
    })

    $('.deleteFav').on("click", function(event){
        event.preventDefault()
        const id = $(this).attr('data-id');
        console.log("id: ", id)
        console.log('deleteFav button clicked')
        $.ajax({
            url : "/api/delete/" + id,
            type: "DELETE",
            
        }).then(function() {
            location.reload()
        })
    })

})


// 3-get id from buttton

// 4- Ajax post to send id to route


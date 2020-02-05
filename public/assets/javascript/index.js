$(document).ready(function() {
    $('.deleteFav').on("click", function(event){
        event.preventDefault()
        const id = $(this).attr('data-id');
        console.log("id: ", id)
        console.log('deleteFav button clicked')
        $.ajax({
            url : "/api/delete/:id",
            type: "DELETE",
            data: {id},
            success: function( data ){

            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
    })
    
})

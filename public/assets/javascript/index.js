$(document).ready(function() {
    $('.deleteFav').on("click", function(event){
        event.preventDefault()
        const id = $(this).attr('data-id');
        console.log("id: ", id)
        console.log('deleteFav button clicked')
        $.ajax({
            url : "/api/delete/" + id,
            type: "DELETE",
            success: function( data ){
                location.reload();
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });
    })
    
})

$(function(){
    $('.load-more').on('click',event=>{
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url:'/data.html',
            type:'GET',
            beforeSend:function(){
                btn.addClass('disabled');
                loader.addClass('d-inline-block');
            },
            success:function(response){
                setTimeout(function(){
                    loader.removeClass('d-inline-block');
                    btn.removeClass('disabled');
                    $('.after-posts').before(response);
                },1000)
            },
            error:function(error){
                console.error(error);
                loader.removeClass('d-inline-block');
                btn.removeClass('disabled');
            }
        })
    })
});
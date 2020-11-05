// document.querySelector('.ui').addEventListener('mouseover', function(e){
//     const featuredui = document.getElementById('featured_ui');
//     featuredui.style.opacity='1';
//     featuredui.style.transition='all 0.2s ease-in-out';
//   })
//   document.querySelector('.ui').addEventListener('mouseout', function(e){
//     const featuredui = document.getElementById('featured_ui');
//     featuredui.style.opacity='0';
//     featuredui.style.transition='all 0.2s ease-in-out';
//   })
// THE CODE RUNS
// JS VANILLA VERSION
// const UI = document.querySelectorAll('.ui');
// UI.forEach(function(e){
//     e.addEventListener('mouseover', function(b){
//         e.children[1].style.opacity='1';

//     });
//     e.addEventListener('mouseout', function(b){
//         e.children[1].style.opacity='0';

//     });
// })




// JQUERY VERSION
        $(document).ready(function(){
//featured ui function
function featuredUI_Enter(){
    $(this).parent().parent().parent().find('.featured_ui').animate({
        top: '20%',
        opacity: '1'
    });
}

function featuredUI_Leave(){
    $(this).parent().parent().parent().find('.featured_ui').animate({
        top: '25%',
        opacity: '0',
    });
}

//featuredUI:hover
//carousel section
$('.product').each(function(){
    $(this).mouseenter(function(){
        // $(this).find('.featured_ui').css('opacity', '1');
        $(this).find('.featured_ui').animate({
            top: '20%',
            opacity: '1'
        });
    });
})
$('.product').each(function(){
    $(this).mouseleave(function(){
        // $(this).find('.featured_ui').css('opacity', '0');
        $(this).find('.featured_ui').animate({
            top: '25%',
            opacity: '0'
        });
    });
})



            //carousel section
            $('.ui').each(function(){
                $(this).mouseenter(function(){
                    // $(this).find('.featured_ui').css('opacity', '1');
                    $(this).find('.featured_ui').animate({
                        top: '20%',
                        opacity: '1'
                    });
                });
            })
            $('.ui').each(function(){
                $(this).mouseleave(function(){
                    // $(this).find('.featured_ui').css('opacity', '0');
                    $(this).find('.featured_ui').animate({
                        top: '25%',
                        opacity: '0'
                    });
                });
            })

        });
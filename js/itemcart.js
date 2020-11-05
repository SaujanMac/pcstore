// $(document).ready(function(){
//     $('.item_cart').click(function(){
//         if ($(this).hasClass('selected') === false){
//             $(this).contents(0).remove();
//             $(this).css({'background': '#6C757D'});
//             $(this).addClass('selected');
//             $(this).attr('data-toggle' , 'modal');
//             $(this).attr('data-target', '.bd-example-modal-lg');
//             $(this).append('Remove From Cart');
//             $(this).hover(function(){
//                 $(this).css({"background-color" : "#333333", "color": "#ffffff"});
//             }, function(){
//                 $(this).css({"background-color" : "#6C757D", "color": "#ffffff"});
//             })
//             console.log($(this).contents());
//         }
//         else {
//             $(this).removeClass('selected');
//             $(this).removeAttr('data-toggle');
//             $(this).removeAttr('data-target');
//             $(this).removeAttr('style');
//             $(this).hover(function(){
//                 $(this).css({"background-color" : "#000000", "color": "#da7f08"});
//             }, function(){
//                 $(this).css({"background-color" : "#da7f08", "color": "#ffffff"});
//             })
//             $(this).contents(0).remove();
//             $(this).append('<i class="fa fa-shopping-cart"></i> Add To Cart');
//             console.log($(this).contents());
//         }

//     })
// })
// Constructor for objects

// forEach
function loadStorage() {
    let loadCart = localStorage.getItem('productNum');
    if (loadCart) {
        document.querySelector('.cart_count').textContent = loadCart;
        document.querySelector('.cart_count').style.transform = 'scale(1)';
        document.querySelector('.cart_count').style.display = 'inline-block';
        document.querySelector('.shopcart').classList.add('active');
    }
    if (localStorage.getItem('productNum') === '0') {
        // console.log ('triggered');
        document.querySelector('.cart_count').style.transform = 'scale(0)';
        document.querySelector('.cart_count').style.display = 'none';
        document.querySelector('.shopcart').classList.remove('active');
    }

}

function itemList(){
    let loadCart = localStorage.getItem('brands');
    loadCart = JSON.parse(loadCart);
    console.log(loadCart);
    if (loadCart) {
        document.querySelector('.itemlist').innerHTML='';
        Object.values(loadCart).map(item => {
            document.querySelector('.itemlist').innerHTML += `
            <div class="row">
            <div class="col-md-6"><img src="images/${item.img}.png" width=100></div>
            <div class="col-md-6">${item.name}</div>
            </div>
            `;
        })

    }
    else if (localStorage.getItem('brands') === null) {
        document.querySelector('.itemlist').innerHTML = '<p>No Item</p>';
    }
}

$(document).ready(function(){
    //constructor
    function Item(brandname,img){
        this.name = brandname;
        this.img = img;
    }

function removeLS(b){
    console.log(b);
    //remove item from local storage
    let brands;
    if (localStorage.getItem('brands') === null){
        brands = [];
    }
    else {
        brands = JSON.parse(localStorage.getItem('brands'));
    }
    console.log(typeof brands);
    brands.forEach(function(item1, index) {
        console.log(item1.name);
        console.log(typeof item1.name);
        console.log(typeof b);
        console.log(b);
        if(item1.name === b) {
            brands.splice(index, 1);
        }
        else {
            console.log('didnt work BITCH!! SUCK IT!!');
        }
    });
    // $.each (brands,function(index,i){
    //     // console.log(brands.indexOf(i));
    //     // console.log(i);
    //     // console.log(titleText);
    //     if (titleText === i){
    //         brands.splice(index, 1);
    //     }
    //     else {
    //         console.log('not working');
    //     }

    // })
    
   
    localStorage.setItem('brands', JSON.stringify(brands));
    itemList();
}    

    $('.item_cart').each(function(){
        $(this).click(function(a){
            a.preventDefault();
             //setting value of the objects for each product selected
             const brandname = $(this).parent().siblings().eq(0).text();
             const img = $(this).parent().parent().siblings().eq(0).attr('alt');
             console.log (img);
             const item1 = new Item(brandname, img);
             console.log(item1);
            // StorageCode
            let totalProductNum = localStorage.getItem('productNum');
            // Parsing totalProductNum into integer
            totalProductNum = parseInt(totalProductNum);

            //check if the item is selected or not
            if ($(this).hasClass('selected') === false){
                $('.cart_count').css({'transform': 'scale(1)'});
                $('.shopcart').css({'color': '#fabb32'});
                $('.shopcart').addClass('animate_cart').one("webkitAnimationEnd animationend", function(){
                    $(this).removeClass('animate_cart');
                });
                $(this).contents(0).remove();
                $(this).css({'background': '#6C757D'});
                $(this).addClass('selected');
                $(this).attr('data-toggle' , 'modal');
                $(this).attr('data-target', '.bd-example-modal-lg');
                $(this).append('Remove From Cart');
                $(this).hover(function(){
                    $(this).css({"background-color" : "#333333", "color": "#ffffff"});
                }, function(){
                    $(this).css({"background-color" : "#6C757D", "color": "#ffffff"});
                })
                //cart_counter
                if (totalProductNum){
                    // $('.cart_count').text() === '' (this belongs in the above if statement)

                    localStorage.setItem('productNum', totalProductNum + 1);
                    $('.cart_count').text(totalProductNum+1);
                    
                }
                else {

                    localStorage.setItem('productNum', 1);
                    $('.cart_count').text(parseInt(localStorage.getItem('productNum')));
                    $('.cart_count').css({
                        'display': 'inline-block',
                        'transform': 'scale(1)',
                        'transition': 'all 0.2s ease-in-out',
                    });
                }

                

                 //storing selected items brandnames in local storage
            let brands;
                 if (localStorage.getItem('brands') === null){
                     brands = [];
                 }
                 else {
                     brands = JSON.parse(localStorage.getItem('brands'));
                 }

                 brands.push(item1);
                 localStorage.setItem('brands', JSON.stringify(brands));

                 itemList();
            }
            else {
                $(this).removeClass('selected');
                $(this).removeAttr('data-toggle');
                $(this).removeAttr('data-target');
                $(this).removeAttr('style');
                $(this).hover(function(){
                    $(this).css({"background-color" : "#000000", "color": "#da7f08"});
                }, function(){
                    $(this).css({"background-color" : "#da7f08", "color": "#ffffff"});
                })
                $(this).contents(0).remove();
                $(this).append('<i class="fa fa-shopping-cart"></i> Add To Cart');
                $('.shopcart').addClass('animate_cart').one("webkitAnimationEnd animationend", function(){
                    $(this).removeClass('animate_cart');
                });
                $('.cart_count').text(totalProductNum-1);
                localStorage.setItem('productNum', totalProductNum - 1);
                
                removeLS(a.target.parentElement.previousElementSibling.previousElementSibling.textContent);

                if ($('.cart_count').text() === '0') {
                    $('.shopcart').addClass('animate_cart').one("webkitAnimationEnd animationend", function(){
                        $(this).removeClass('animate_cart');
                    });
                    $('.cart_count').css({"transform": "scale(0)"});
                }
                if ($(window).scrollTop()>650){
                    $('.shopcart').addClass('scrollactive');
                }
            }
    
        })
    })
})
itemList();
loadStorage();
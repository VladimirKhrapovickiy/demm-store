$(document).ready(function() {
    if($(".collection>.carousel")){
        $(".collection>.carousel").slick({
            dots: true,
            slidesToShow:4,
            nextArrow:$(".collection>.btn__arrow-right"),
            prevArrow:$(".collection>.btn__arrow-left"),
            slidesToScroll: 2,
        });
    }
    if($(".add-products>.carousel")){
        $(".add-products>.carousel").slick({
            dots: true,
            slidesToShow:4,
            nextArrow:$(".add-products>.btn__arrow-right"),
            prevArrow:$(".add-products>.btn__arrow-left"),
            slidesToScroll: 1,
        });
    }
    if(document.getElementById("slider-1")){
        slideOne();
        slideTwo();
    }


    ///burger menu
    const $mobileMenuButton = $(".burger");
    const $mobileBurgerCheckbox = $(".burger-checkbox");
    const $mobileMenuContainer = $(".menu-mobile__container")
    const $mobileMenu = $(".menu-mobile")
    $mobileMenuButton.on("click",function(){
        if($mobileBurgerCheckbox.is(':checked')) {
            $mobileMenuContainer.hide();
        }else {
            $mobileMenuContainer.show()
            $mobileMenu.css("margin-right", `-${$mobileMenu.width()*1.2}px`);
            $mobileMenu.animate({"margin-right": `0px`},1000);
        }
    })
   



    ///inner menu animation
    const $innerMenus = $(".with-inner-menu");
    $innerMenus.each(function(){
        const $innerMenuName = $(this).find(".filters__name");
        const $innerMenu = $(this).find(".inner-listing__list");
        const $arrow = $(this).find(".arrow");
        $innerMenuName.on("click",function(){
            if($innerMenu){
                $innerMenu.toggle(500)
                $arrow.toggleClass("rotate")
            }
        })
    })




    ///add to cart on product card button
    const $toCartButtons = $(".btn-to-cart")
    $toCartButtons.each(function(){
        const $controlButtons = $(this).parent().find(".product-card__add-to-cart");
        const $decreaseButton = $controlButtons.find(".add-to-cart__decrease");
        const $increaseButton = $controlButtons.find(".add-to-cart__increase");
        const $productQuantity =$controlButtons.find(".add-to-cart__quantity");
        const $toCartButton = $(this);
        $decreaseButton.on("click", function(){
            $productQuantity.text(`${+$productQuantity.text()-1}`)
            if($productQuantity.text() === "0"){
                $productQuantity.text("1");
                $controlButtons.hide();
                $toCartButton.show()
            }
        })
        $increaseButton.on("click", function(){
            $productQuantity.text(`${+$productQuantity.text()+1}`)
        })
        $(this).on("click",function(){
            $(this).hide()
            $controlButtons.css("display", "flex")
        })
    })




    })




    ///range slider on catalog
    if(document.getElementById("slider-1")){
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValOne = document.getElementById("range1");
        let displayValTwo = document.getElementById("range2");
        let minGap = 0;
        let sliderTrack = document.querySelector(".slider-track");
        let sliderMaxValue = document.getElementById("slider-1").max;

        function slideOne() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.value = sliderOne.value;
        fillColor();
        }
        function slideTwo() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.value = sliderTwo.value;
        fillColor();
        }
        function fillColor() {
        percent1 = (sliderOne.value / sliderMaxValue) * 100;
        percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , rgba(33, 63, 116, 1) ${percent1}% , rgba(33, 63, 116, 1) ${percent2}%, #dadae5 ${percent2}%)`;
        }
    }
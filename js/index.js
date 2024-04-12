    
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#F68A1F',
                primary_text: '#120C0B',
                secondary_text: '#A09E9D',
                stroke: '#E7E6E6',
                hover: '#EBE8EA',
                bg_color: '#FFFCFE',
                footer: '#EEEEEE',
                language: '#F2EFF1',
                btn_hover: '#C56E19',
                btn_sec_hover: '#E76C0F',
            },
            borderRadius: {
                'custom': '40px',
            },
        }
    }
}

// START INDEX
$(document).ready(function(){
    $("#download_phone").click(function(){
        $("#download_phone_box").toggle();
    });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 600,
    autoplay: {
        delay: 2000,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const thumbsSwiper = new Swiper('.swiper_thumbs', {
    direction: 'horizontal',
    speed: 600,
    autoplay: {
        delay: 2000,
    },
    loop: true,
    thumbs: {
        swiper: thumbsSwiper
    },
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// END INDEX

$(document).ready(function() {        
    $('#filter_dropdown').click(function(event) {
        event.stopPropagation();
        $('.down_arrow').toggle();
        $('.up_arrow').toggle();
    });            
    $(document).click(function(event) {
        if (!$(event.target).closest('#filter_dropdown').length) {                    
            $('.down_arrow').show();
            $('.up_arrow').hide();
        }
    });    
});    
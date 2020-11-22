$(document).ready(function () {
  //инициализация главного слайдера с акциями
  $(".main-slider .slider-content").slick({
    dots: true,
    arrows: false,
    appendDots: $(".main-slider .slider-nav")
  });



  $(".sertificates-content").slick({
    slidesToShow: 6,
    dots: false,
    infinite: false,
    responsive: [{
        breakpoint: 1001,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(".sales-slider__content, .buywith-slider__content").slick({
    slidesToShow: 4,
    dots: false,
    infinite: false,
    responsive: [{
        breakpoint: 901,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.header-logo__contacts .logo').on('click', function () {
    window.location.href = "/";
  });



  $('.header-menu__main .toggle').on('click', function () {
    $('.header-menu__catalog-popup').toggleClass('opened');
  });

  $('.mobile-toggle').on('click', function () {
    if ($('.header-menu__catalog-popup').hasClass('opened')) {
      $('.header-menu__catalog-popup').removeClass('opened');
    }
    $(this).toggleClass('is-active');
    $('.header-menu__mobile').slideToggle();
    $('.header-menu__mobile').toggleClass('opened');
  });

  $('.header-menu__mobile .head img').on('click', function () {
    $('.header-menu__mobile').slideToggle();
    $('.header-menu__mobile').toggleClass('opened');
  });

  $('.header-menu__mobile .cat-m').on('click', function () {
    $(this).find('.ul-sub').slideToggle();
  });

  $(' .left-block__item .title').on('click', function () {
    $(this).parent().find('.content').slideToggle();
    $(this).parent().find('.content').toggleClass('active');
    $(this).toggleClass('active');
  });

  $('.header-menu__mobile .m-cat-tgl').on('click', function () {
    /* $(this).toggleClass('active');
    $(this).parent().find('.m-cat-ul').slideToggle(); */
    $('.header-menu__mobile').slideToggle();
    $('.header-menu__mobile').toggleClass('opened');
    $('.header-menu__catalog-popup').toggleClass('opened');
  });

  $('.header-menu__catalog-popup .section-h').eq(0).on('click', function () {
    $('.header-menu__catalog-popup').toggleClass('opened');
  });

  $('.product-page__content-right .tabs-content__text').hide();
  $('.product-page__content-right .tabs-content__text:first').show();

  $('.product-page__content-right .tabs-tab').on('click', function () {
    $('.product-page__content-right .tabs-tab').removeClass('active');
    $(this).toggleClass('active');
    $('.product-page__content-right .tabs-content__text').hide();
    let parent = $(this).parents('.product-page__content-right');
    let tab = parent.find('.tabs-content__text').eq($(this).index());
    tab.slideToggle();
  });

  /* $(window).scroll(function () {
     var $this = $(this),
       $head = $("header .header-menu");
     if ($this.scrollTop() > 101) {
       $head.addClass("fixed_header");
     } else {
       $head.removeClass("fixed_header");
     }
   }); */

  $(".brands-page .brands-products__content").hide();
  $(".brands-page .brands-products__content:first").show();

  $(".brands-page .right-filter__alphabet-letters li").on("click", function () {
    $(".brands-page .right-filter__alphabet-letters li").removeClass("active");
    $(".brands-page .brands-products__content").hide();
    $(this).addClass("active");
    $(".brands-page .brands-products__content").eq($(this).index()).show();
  });


  function send_email(numbere) {

    if (numbere == 1) {
      var phone = $("#main .main-form #phone1").val();
      var name = $("#main .main-form #name1").val();
      var input_wrapper = '#main .main-form .fields';
      var input_title = '#main .main-form .f-title';
      var input_desc = '#main .main-form .f-desc';
      var success = '#main .main-form .success';
      var fields = '#main .main-form .requred';
      var hidden = $("#main .main-form .hidden-title").val();
    };

    if (numbere == 2) {
      var phone = $("#defend .main-form #phone2").val();
      var name = $("#defend  .main-form #name2").val();
      var input_wrapper = '#defend  .main-form .fields';
      var input_title = '#defend .main-form .f-title';
      var input_desc = '#defend .main-form .f-desc';
      var success = '#defend .main-form .success';
      var fields = '#defend .main-form .requred';
      var hidden = $("#defend .main-form .hidden-title").val();
    };

    if (numbere == 3) {
      var phone = $("#how-work .main-form #phone3").val();
      var name = $("#how-work .main-form #name3").val();
      var input_wrapper = '#how-work .main-form .fields';
      var input_title = '#how-work .main-form .f-title';
      var input_desc = '#how-work .main-form .f-desc';
      var success = '#how-work .main-form .success';
      var fields = '#how-work .main-form .requred';
      var hidden = $("#how-work .main-form .hidden-title").val();
    };

    if (phone != '' && name != '') {
      $.ajax({
        url: "php/mail.php",
        type: "POST",
        data: {
          'hidden-title': hidden,
          'name': name,
          'phone': phone
        },
        dataType: "json",
        success: function (result) {


        }

      });


      $(input_wrapper).hide();
      $(input_title).hide();
      $(input_desc).hide();
      $(success).show();
    } else {}
  }




});
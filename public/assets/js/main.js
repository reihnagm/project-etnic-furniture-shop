let $modalProducts = $(".modal.products");
let $backdropProducts = $(".backdrop.products");

let $modalOtherProducts = $(".modal.other-products");
let $backdropOtherProducts = $(".backdrop.other-products");

let $closeModal = $(".modal-close");

let $blogLatestPost1 = $(".blog-latest-container.1one");
let $blogLatestPost2 = $(".blog-latest-container.2two");
let $blogLatestPost3 = $(".blog-latest-container.3three");

let $blogLatestPostImg1 = $(".blog-latest-img.1one");
let $blogLatestPostImg2 = $(".blog-latest-img.2two");
let $blogLatestPostImg3 = $(".blog-latest-img.3three");

let $eyeQuickViewClearTimeout;

let $productsItemHover = $(".products-item-li.1one");
let $productsInfoHover = $(".products-info-hovered.1one");
let $productsChangeHover = $(".products-img-hovered.1one");
let $productsInfoAddToCart = $(".products-info-add-to-cart.1one a");
let $productsRate = $(".products-info-rate.1one");

let $productsItemHover2 = $(".products-item-li.2two");
let $productsInfoHover2 = $(".products-info-hovered.2two");
let $productsChangeHover2 = $(".products-img-hovered.2two");
let $productsInfoAddToCart2 = $(".products-info-add-to-cart.2two a");
let $productsRate2 = $(".products-info-rate.2two");

let $productsItemHover3 = $(".products-item-li.3three");
let $productsInfoHover3 = $(".products-info-hovered.3three");
let $productsChangeHover3 = $(".products-img-hovered.3three");
let $productsInfoAddToCart3 = $(".products-info-add-to-cart.3three a");
let $productsRate3 = $(".products-info-rate.3three");

let $productsItemHover4 = $(".products-item-li.4fourth");
let $productsInfoHover4 = $(".products-info-hovered.4fourth");
let $productsChangeHover4 = $(".products-img-hovered.4fourth");
let $productsInfoAddToCart4 = $(".products-info-add-to-cart.4fourth a");
let $productsRate4 = $(".products-info-rate.4");

let $productsItemHoverOnsale = $(".products-item-li-onsale.1one");
let $productsInfoHoverOnsale = $(".products-info-hovered-onsale.1one");
let $productsChangeHoverOnsale = $(".products-img-hovered-onsale.1one");
let $productsInfoAddToCartOnsale = $(".products-info-add-to-cart-onsale.1one a");
let $productsRateOnsale = $(".products-info-rate-onsale.1one");

let $productsItemHoverOnsale2 = $(".products-item-li-onsale.2two");
let $productsInfoHoverOnsale2 = $(".products-info-hovered-onsale.2two");
let $productsChangeHoverOnsale2 = $(".products-img-hovered-onsale.2two");
let $productsInfoAddToCartOnsale2 = $(".products-info-add-to-cart-onsale.2two a");
let $productsRateOnsale2 = $(".products-info-rate-onsale.2two");

let $productsItemHoverOnsale3 = $(".products-item-li-onsale.3three");
let $productsInfoHoverOnsale3 = $(".products-info-hovered-onsale.3three");
let $productsChangeHoverOnsale3 = $(".products-img-hovered-onsale.3three");
let $productsInfoAddToCartOnsale3 = $(".products-info-add-to-cart-onsale.3three a");
let $productsRateOnsale3 = $(".products-info-rate-onsale.3three");

let $productsItemHoverOnsale4 = $(".products-item-li-onsale.4fourth");
let $productsInfoHoverOnsale4 = $(".products-info-hovered-onsale.4fourth");
let $productsChangeHoverOnsale4 = $(".products-img-hovered-onsale.4fourth");
let $productsInfoAddToCartOnsale4 = $(".products-info-add-to-cart-onsale.4fourth a");
let $productsRateOnsale4 = $(".products-info-rate-onsale.4fourth");

let $eyeStyleHover = $(".products-info-eye-style.1one");
let $eyeStyleImg = $(".products-info-eye-style-img.1one");
let $eyeQuickView = $(".products-info-eye-quick-view.1one");

let $eyeStyleHover2 = $(".products-info-eye-style.2two");
let $eyeStyleImg2 = $(".products-info-eye-style-img.2two");
let $eyeQuickView2 = $(".products-info-eye-quick-view.2two");

let $eyeStyleHover3 = $(".products-info-eye-style.3three");
let $eyeStyleImg3 = $(".products-info-eye-style-img.3three");
let $eyeQuickView3 = $(".products-info-eye-quick-view.3three");

let $eyeStyleHover4 = $(".products-info-eye-style.4fourth");
let $eyeStyleImg4 = $(".products-info-eye-style-img.4fourth");
let $eyeQuickView4 = $(".products-info-eye-quick-view.4fourth");

/* Products Onsale */ 

let $eyeStyleHoverOnsale = $(".products-info-eye-style-onsale.1one");
let $eyeStyleImgOnsale = $(".products-info-eye-style-img-onsale.1one");
let $eyeQuickViewOnsale = $(".products-info-eye-quick-view-onsale.1one");

let $eyeStyleHoverOnsale2 = $(".products-info-eye-style-onsale.2two");
let $eyeStyleImgOnsale2 = $(".products-info-eye-style-img-onsale.2two");
let $eyeQuickViewOnsale2 = $(".products-info-eye-quick-view-onsale.2two");

let $eyeStyleHoverOnsale3 = $(".products-info-eye-style-onsale.3three");
let $eyeStyleImgOnsale3 = $(".products-info-eye-style-img-onsale.3three");
let $eyeQuickViewOnsale3 = $(".products-info-eye-quick-view-onsale.3three");

let $eyeStyleHoverOnsale4 = $(".products-info-eye-style-onsale.4fourth");
let $eyeStyleImgOnsale4 = $(".products-info-eye-style-img-onsale.4fourth");
let $eyeQuickViewOnsale4 = $(".products-info-eye-quick-view-onsale.4fourth");

let $discountBanner = $(".discount-banner");
let $discountBannerLink = $(".discount-banner-link");

let $searchInput = $(".container-input-search");

let $boxPromotion = $(".box-promotion");

let $boxSearch = $(".container-box-search");

//- PROTOTYPE TOGGLE CLICK

(function ($) {
  $.fn.clickToggle = function (func1, func2) {
    var funcs = [func1, func2];
    this.data("toggleclicked", 0);
    this.click(function () {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };
})(jQuery);

$(function () {
  /* Add Sticky Nav When Scrolling Page */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".menu").addClass("sticky");
    } else {
      $(".menu").removeClass("sticky");
    }
  });
  $discountBanner.hover(
    function () {
      $discountBannerLink.css({
        background: "#000000",
        color: "#ffffff",
        borderColor: "#000000",
      });
    },
    function () {
      $discountBannerLink.css({
        background: "transparent",
        color: "#ffffff",
        borderColor: "#ffffff",
      });
    }
  );
  $(".container-language").click(function () {
    $(".container-language-item").slideToggle();
  });
  $(".container-currency").click(function () {
    $(".container-currency-item").slideToggle();
  });
  $(".categories-title").click(function () {
    $(".category-item-li").slideToggle();
  });
  $(".service-item-li.ship").hover(
    function () {
      $(".service-item-title.ship").css({
        color: "#fa6161",
        transition: "color .3s ease-in-out",
      });
      $(".ship-img").css({
        transform: "translate3d(0, -78px, 0)",
      });
    },
    function () {
      $(".service-item-title.ship").css({
        color: "#000000",
      });
      $(".ship-img").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );
  $(".service-item-li.truck").hover(
    function () {
      $(".service-item-title.truck").css({
        color: "#fa6161",
        transition: "color .3s ease-in-out",
      });
      $(".truck-img").css({
        transform: "translate3d(0, -75px, 0)",
      });
    },
    function () {
      $(".service-item-title.truck").css({
        color: "#000000",
      });
      $(".truck-img").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );
  $(".service-item-li.speaker").hover(
    function () {
      $(".service-item-title.speaker").css({
        color: "#fa6161",
        transition: "color .3s ease-in-out",
      });
      $(".speaker-img").css({
        transform: "translate3d(0, -70px, 0)",
      });
    },
    function () {
      $(".service-item-title.speaker").css({
        color: "#000000",
      });
      $(".speaker-img").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );
  $(".service-item-li.hand").hover(
    function () {
      $(".service-item-title.hand").css({
        color: "#fa6161",
        transition: "color .3s ease-in-out",
      });
      $(".hand-img").css({
        transform: "translate3d(0, -78px, 0)",
      });
    },
    function () {
      $(".service-item-title.hand").css({
        color: "#000000",
        transition: "color .3s ease-in-out",
      });
      $(".hand-img").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );
  //- PULSE EFFECT

  //- $adsImage.hover(function() {
  //-   $(this).find("#pulse-effect-1").css({
  //-         visibility: "visible",
  //-         animation: "effectShowScale 0.2s",
  //-         background: "rgba(255, 0, 0, 0.1)"
  //-   })
  //-   $(this).find("#pulse-effect-2").delay(260).queue(function(next){
  //-       $(this).css({
  //-             visibility: "visible",
  //-             animation: "effectShowScale 0.2s",
  //-             background: "rgba(255, 0, 0, 0.2)"
  //-       })
  //-         next();
  //-   })
  //-   }, function() {
  //-   $(this).find("#pulse-effect-1").css({
  //-         transition: "visibility 300ms",
  //-         visibility: "hidden",
  //-         animation: "effectShowScaleClose 300ms"
  //-   })
  //-   $(this).find("#pulse-effect-2").css({
  //-         transition: "visibility 800ms",
  //-         visibility: "hidden",
  //-         animation: "effectShowScaleClose 800ms"
  //-   })
  //- })

  $boxPromotion.hover(
    function () {
      $(".box-promotion-title").css({
        color: "#fff",
      });
      $(".box-promotion-link").css({
        background: "black",
      });
    },
    function () {
      $(".box-promotion-title").css({
        color: "#fa6161",
      });
      $(".box-promotion-link").css({
        background: "#fa6161",
      });
    }
  );
  $eyeStyleHover.hover(
    function () {
      $eyeStyleImg.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickView.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickView.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImg.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickView.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickView.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHover2.hover(
    function () {
      $eyeStyleImg2.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickView2.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickView2.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImg2.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickView2.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickView2.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHover3.hover(
    function () {
      $eyeStyleImg3.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickView3.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickView3.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImg3.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickView3.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickView3.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHover4.hover(
    function () {
      $eyeStyleImg4.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickView4.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickView4.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImg4.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickView4.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickView4.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHoverOnsale.hover(
    function () {
      $eyeStyleImgOnsale.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickViewOnsale.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickViewOnsale.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImgOnsale.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickViewOnsale.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickViewOnsale.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHoverOnsale2.hover(
    function () {
      $eyeStyleImgOnsale2.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickViewOnsale2.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickViewOnsale2.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImgOnsale2.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickViewOnsale2.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickViewOnsale2.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHoverOnsale3.hover(
    function () {
      $eyeStyleImgOnsale3.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickViewOnsale3.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickViewOnsale3.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImgOnsale3.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickViewOnsale3.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickViewOnsale3.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $eyeStyleHoverOnsale4.hover(
    function () {
      $eyeStyleImgOnsale4.css({
        transform: "translate3d(0, -60px, 0)",
      });
      $eyeQuickViewOnsale4.css({
        visibility: "visible",
        opacity: "1",
      });
      $eyeQuickViewOnsale4.animate({
        left: "20%",
      });
    },
    function () {
      $eyeStyleImgOnsale4.css({
        transform: "translate3d(0, 0, 0)",
      });
      $eyeQuickViewClearTimeout = setTimeout(function () {
        $eyeQuickViewOnsale4.css({
          transition: "visibility 0.5s, opacity 0.5s linear",
          visibility: "hidden",
          opacity: "0",
        });
        $eyeQuickViewOnsale4.animate({
          left: "30%",
        });
      }, 1);
    }
  );

  $boxSearch.hover(
    function () {
      $(".box-search-img").css({
        transform: "translate3d(0, -44px, 0)",
      });
    },
    function () {
      $(".box-search-img").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $boxSearch.click(function () {
    if ($searchInput.css("display") === "none") {
      $(".box-search-img").attr("src", "/assets/close/close.png").css({
        transform: "translate3d(0, -127px, 0)",
      });
      $(this).hover(
        function () {
          $(".box-search-img").css({
            transform: "translate3d(0, -127px, 0)",
          });
        },
        function () {
          $(".box-search-img").css({
            transform: "translate3d(0, -73px, 0)",
          });
        }
      );
      $searchInput.slideDown();
    } else {
      $(".box-search-img").css({
        transform: "translate3d(0, 0, 0)",
      });
      $(this).hover(
        function () {
          $(".box-search-img").css({
            transform: "translate3d(0, -44px, 0)",
          });
        },
        function () {
          $(".box-search-img").css({
            transform: "translate3d(0, 0, 0)",
          });
        }
      );
      $searchInput.slideUp();
    }
  });

  $(".container-input-search-img").hover(
    function () {
      $(".input-search-img").css({
        transform: "translate3d(0, -44px, 0)",
      });
    },
    function () {
      $(".input-search-img").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $(".container-input-search-img-mobile").hover(
    function () {
      $(".input-search-img-mobile").css({
        transform: "translate3d(0, -44px, 0)",
      });
    },
    function () {
      $(".input-search-img-mobile").css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $eyeQuickView.hover(
    function () {
      clearTimeout($eyeQuickViewClearTimeout);
      $(this).css({
        visibility: "visible",
        opacity: "1",
      });
      $(this).animate({
        left: "20%",
      });
      $eyeStyleImg.css({
        transform: "translate3d(0, -60px, 0)",
      });
    },
    function () {
      $(this).css({
        visibility: "hidden",
        transition: "visibility 0.5s, opacity 0.5s linear",
        opacity: "0",
      });
      $(this).animate({
        left: "30%",
      });
      $eyeStyleImg.css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $eyeQuickView2.hover(
    function () {
      clearTimeout($eyeQuickViewClearTimeout);
      $(this).css({
        visibility: "visible",
        opacity: "1",
      });
      $(this).animate({
        left: "20%",
      });
      $eyeStyleImg2.css({
        transform: "translate3d(0, -60px, 0)",
      });
    },
    function () {
      $(this).css({
        visibility: "hidden",
        transition: "visibility 0.5s, opacity 0.5s linear",
        opacity: "0",
      });
      $(this).animate({
        left: "30%",
      });
      $eyeStyleImg2.css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $eyeQuickView3.hover(
    function () {
      clearTimeout($eyeQuickViewClearTimeout);
      $(this).css({
        visibility: "visible",
        opacity: "1",
      });
      $(this).animate({
        left: "20%",
      });
      $eyeStyleImg3.css({
        transform: "translate3d(0, -60px, 0)",
      });
    },
    function () {
      $(this).css({
        visibility: "hidden",
        transition: "visibility 0.5s, opacity 0.5s linear",
        opacity: "0",
      });
      $(this).animate({
        left: "30%",
      });
      $eyeStyleImg3.css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $eyeQuickView4.hover(
    function () {
      clearTimeout($eyeQuickViewClearTimeout);
      $(this).css({
        visibility: "visible",
        opacity: "1",
      });
      $(this).animate({
        left: "20%",
      });
      $eyeStyleImg4.css({
        transform: "translate3d(0, -60px, 0)",
      });
    },
    function () {
      $(this).css({
        visibility: "hidden",
        transition: "visibility 0.5s, opacity 0.5s linear",
        opacity: "0",
      });
      $(this).animate({
        left: "30%",
      });
      $eyeStyleImg4.css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $eyeQuickViewOnsale.hover(
    function () {
      clearTimeout($eyeQuickViewClearTimeout);
      $(this).css({
        visibility: "visible",
        opacity: "1",
      });
      $(this).animate({
        left: "20%",
      });
      $eyeStyleImgOnsale.css({
        transform: "translate3d(0, -60px, 0)",
      });
    },
    function () {
      $(this).css({
        visibility: "hidden",
        transition: "visibility 0.5s, opacity 0.5s linear",
        opacity: "0",
      });
      $(this).animate({
        left: "30%",
      });
      $eyeStyleImgOnsale.css({
        transform: "translate3d(0, 0, 0)",
      });
    }
  );

  $productsItemHover.hover(
    function () {
      $productsInfoHover.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCart.css("transition", "0.5s");
      $productsRate.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHover.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHover.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHover.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCart.css({
        transition: "none",
      });
      $productsRate.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHover.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHover.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHover2.hover(
    function () {
      $productsInfoHover2.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCart2.css("transition", "0.5s");
      $productsRate2.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHover2.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHover2.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHover2.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCart2.css({
        transition: "none",
      });
      $productsRate2.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHover2.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHover2.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHover3.hover(
    function () {
      $productsInfoHover3.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCart3.css("transition", "0.5s");
      $productsRate3.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHover3.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHover3.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHover3.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCart3.css({
        transition: "none",
      });
      $productsRate3.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHover3.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHover3.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHover4.hover(
    function () {
      $productsInfoHover4.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCart4.css("transition", "0.5s");
      $productsRate4.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHover4.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHover4.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHover4.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCart4.css({
        transition: "none",
      });
      $productsRate4.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHover4.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHover4.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHoverOnsale.hover(
    function () {
      $productsInfoHoverOnsale.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCartOnsale.css({
        transition: "0.5s",
      });
      $productsRateOnsale.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHoverOnsale.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHoverOnsale.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCartOnsale.css({
        transition: "none",
      });
      $productsRateOnsale.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHoverOnsale.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHoverOnsale2.hover(
    function () {
      $productsInfoHoverOnsale2.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCartOnsale2.css({
        transition: "0.5s",
      });
      $productsRateOnsale2.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHoverOnsale2.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale2.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHoverOnsale2.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCartOnsale2.css({
        transition: "none",
      });
      $productsRateOnsale2.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHoverOnsale2.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale2.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHoverOnsale3.hover(
    function () {
      $productsInfoHoverOnsale3.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCartOnsale3.css({
        transition: "0.5s",
      });
      $productsRateOnsale3.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHoverOnsale3.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale3.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHoverOnsale3.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCartOnsale3.css({
        transition: "none",
      });
      $productsRateOnsale3.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHoverOnsale3.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale3.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $productsItemHoverOnsale4.hover(
    function () {
      $productsInfoHoverOnsale4.css({
        animation: "effectShowScale 0.3s",
        visibility: "visible",
      });
      $productsInfoAddToCartOnsale4.css({
        transition: "0.5s",
      });
      $productsRateOnsale4.css({
        animation: "effectShowScale 0.3s",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "25%",
      });
      $eyeStyleHoverOnsale4.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale4.css({
        animation: "effectShowScale 500ms",
        transition: "visibility 0.3s",
        visibility: "visible",
      });
    },
    function () {
      $productsInfoHoverOnsale4.css({
        animation: "effectShowScaleClose 0.8s",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
      $productsInfoAddToCartOnsale4.css({
        transition: "none",
      });
      $productsRateOnsale4.css({
        animation: "effectShowScaleClose 0.5s",
        transition: "visibility 0.5s",
        visibility: "hidden",
      });
      $eyeStyleHoverOnsale4.css({
        animation: "effectShowScaleClose 0.3s",
        transition: "visibility 0.3s",
        visibility: "hidden",
        "transform-origin": "top right",
      });
      $productsChangeHoverOnsale4.css({
        animation: "effectShowScaleClose 500ms",
        transition: "visibility 0.3s",
        visibility: "hidden",
      });
    }
  );

  $eyeStyleHover.click(function () {
    $modalProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $eyeStyleHover2.click(function () {
    $modalProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $eyeStyleHover3.click(function () {
    $modalProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $eyeStyleHover4.click(function () {
    $modalProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $backdropProducts.click(function () {
    $modalProducts.css({
      top: "0",
      opacity: "0",
      visibility: "hidden",
    });
    $(this).css({
      visibility: "hidden",
      opacity: "0",
    });
  });

  $eyeStyleHoverOnsale.click(function () {
    $modalOtherProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropOtherProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $eyeStyleHoverOnsale2.click(function () {
    $modalOtherProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropOtherProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });

  $eyeStyleHoverOnsale3.click(function () {
    $modalOtherProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropOtherProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $eyeStyleHoverOnsale4.click(function () {
    $modalOtherProducts.css({
      top: "6%",
      opacity: "1",
      visibility: "visible",
    });
    $backdropOtherProducts.css({
      visibility: "visible",
      opacity: "1",
    });
  });
  $backdropOtherProducts.click(function () {
    $modalOtherProducts.css({
      top: "0",
      opacity: "0",
      visibility: "hidden",
    });
    $(this).css({
      visibility: "hidden",
      opacity: "0",
    });
  });

  $closeModal.click(function () {
    $modalProducts.css({
      top: "0",
      opacity: "0",
      visibility: "hidden",
    });
    $backdropProducts.css({
      visibility: "hidden",
      opacity: "0",
    });
    $modalOtherProducts.css({
      top: "0",
      opacity: "0",
      visibility: "hidden",
    });
    $backdropOtherProducts.css({
      visibility: "hidden",
      opacity: "0",
    });
  });

  $(".modal-products-radio-white-color").click(function () {
    if ($(this).is(":checked")) {
      $(".modal-products-radio-black-color").prop("checked", false);
      $(".modal-products-radio-black-color").removeClass("active-color");
      $(this).addClass("active-color");
    }
  });
  $(".modal-products-radio-black-color").click(function () {
    if ($(this).is(":checked")) {
      $(".modal-products-radio-white-color").prop("checked", false);
      $(".modal-products-radio-white-color").removeClass("active-color");
      $(this).addClass("active-color");
    }
  });
  $(".qty-input").keypress(function (event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  });
  $(".container-arrow-up-increment-qty-img").on("click", function () {
    var oldValue = $(".qty-input").val();
    var newValue = +oldValue + 1;
    $(".qty-input").val(newValue);
  });
  $(".container-arrow-down-decrement-qty-img").on("click", function () {
    var newValue;
    var oldValue = $(".qty-input").val();
    if (oldValue > 1) {
      newValue = +oldValue - 1;
    } else {
      newValue = 1;
    }
    $(".qty-input").val(newValue);
  });
  $(".swiper-modal-products-img").click(function (event) {
    $(".modal-products-img").attr("src", event.currentTarget.src);
  });
  $(".hamburger-menu-icon").clickToggle(
    function () {
      $(".left-menu-mobile").css({
        display: "block",
      });
      $("body").css({
        overflow: "hidden",
      });
    },
    function () {
      $(".left-menu-mobile").css({
        display: "none",
      });
      $("body").css({
        overflow: "auto",
      });
    }
  );
  $(".furniture-btn").clickToggle(
    function () {
      $(".furniture-sub-ul-mobile-menu").css({
        maxHeight: "180px",
      });
    },
    function () {
      $(".furniture-sub-ul-mobile-menu").css({
        maxHeight: "0",
      });
    }
  );
  $(".table-btn").clickToggle(
    function () {
      $(".furniture-table-sub-ul-mobile-menu").css({
        maxHeight: "100px",
      });
    },
    function () {
      $(".furniture-table-sub-ul-mobile-menu").css({
        maxHeight: "0",
      });
    }
  );

  $(".chair-btn").clickToggle(
    function () {
      $(".furniture-chair-sub-ul-mobile-menu").css({
        maxHeight: "100px",
      });
    },
    function () {
      $(".furniture-chair-sub-ul-mobile-menu").css({
        maxHeight: "0",
      });
    }
  );
  $(".desks-btn").clickToggle(
    function () {
      $(".furniture-desks-sub-ul-mobile-menu").css({
        maxHeight: "100px",
      });
    },
    function () {
      $(".furniture-desks-sub-ul-mobile-menu").css({
        maxHeight: "0",
      });
    }
  );
  $(".furniture-table-btn").clickToggle(
    function () {
      $(".table-ul").css({
        maxHeight: "100px",
      });
    },
    function () {
      $(".table-ul").css({
        maxHeight: "0",
      });
    }
  );
  $(".furniture-chair-btn").clickToggle(
    function () {
      $(".chair-ul").css({
        maxHeight: "100px",
      });
    },
    function () {
      $(".chair-ul").css({
        maxHeight: "0",
      });
    }
  );
  $(".furniture-sofa-set-btn").clickToggle(
    function () {
      $(".sofa-set-ul").css({
        maxHeight: "100px",
      });
    },
    function () {
      $(".sofa-set-ul").css({
        maxHeight: "0",
      });
    }
  );
});

//- Return always number format

//- function isNumberKey(evt)
//-
//-     var charCode = (evt.which) ? evt.which : evt.keyCode
//-     if (charCode > 31 && (charCode < 48 || charCode > 57))
//-     return false;
//-
//-     return true;

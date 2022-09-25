// Header ve footer load işlemi
$(document).ready(function () {
    $(".mobile-wrap-btn").click(function (e) {
        e.preventDefault();
        $("header").toggleClass("m-active");
    });
    $(".search-header").click(function (e) {
        e.preventDefault();
        $(this).parent().addClass("active");
        $(".nav").hide();
        if (window.matchMedia("(max-width: 767px)").matches) {
            $(".mobile-wrap-btn").hide();
        }
    });
    $(".close-search-head").click(function (e) {
        e.preventDefault();
        $(this).parent().removeClass("active");
        $(".nav").show();
        if (window.matchMedia("(max-width: 767px)").matches) {
            $(".mobile-wrap-btn").show();
        }
    });

    const searhData = location.search.split("?search=")[1];
    console.log(searhData);
    if (searhData) {
        $("#search").val(searhData);
    }


    let elDropdown = $("[dropdown-target]");
    $(elDropdown).each(function (index, element) {
        let elAttr = $(element).attr("dropdown-target");
        // element == this
        $(element).click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!$(this).hasClass("active")) {
                $("[dropdown-target]").removeClass("active");
                $(".dropdown-content").removeClass("active");
            }
            $(this).toggleClass("active");
            $(elAttr).toggleClass("active");
        });
    });
    $("body").click(function (e) {
        $("[dropdown-target]").removeClass("active");
        $(".dropdown-content").removeClass("active");
    });


    $("#search").keyup(function (e) {
        var searchData = $(this).val();
        $.ajax({
            type: "GET",
            url: "assets/js/data.js",
            data: "data=" + $(this).val(),
            success: function (response) {
                const data = JSON.parse(response);
                $("#brand-wrap .searchable").remove();
                if (searchData != 0) {
                    data.forEach(element => {
                        let content = `<div class="col-lg-3 col-md-4 col-sm-6 searchable">
                        <div class="company-card">
                            <h5 class="card-title">${element.name}</h5>
                            <img src="assets/img/brands/${element.file}">
                            <a class="btn-detail" href="firma-detay.html">Detail <i class="icon-chevron-right"></i></a>
                        </div>
                    </div>`;
                        $("#brand-wrap").append(content);
                    });
                } else {
                    for (let index = 0; index < 3; index++) {
                        let content = `
                        <div class="col-lg-3 col-md-4 col-sm-6 searchable">
                    <div class="company-card">
                        <h5 class="card-title">Amazon</h5>
                        <img src="assets/img/brands/amazon.svg">
                        <a class="btn-detail" href="firma-detay.html">Detail <i class="icon-chevron-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 searchable">
                    <div class="company-card">
                        <h5 class="card-title">Ebay</h5>
                        <img src="assets/img/brands/ebay.svg">
                        <a class="btn-detail" href="firma-detay.html">Detail <i class="icon-chevron-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 searchable">
                    <div class="company-card">
                        <h5 class="card-title">Nestle</h5>
                        <img src="assets/img/brands/nestle.svg">
                        <a class="btn-detail" href="firma-detay.html">Detail <i class="icon-chevron-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 searchable">
                    <div class="company-card">
                        <h5 class="card-title">Microsoft</h5>
                        <img src="assets/img/brands/microsoft.svg">
                        <a class="btn-detail" href="firma-detay.html">Detail <i class="icon-chevron-right"></i></a>
                    </div>
                </div>
                        `;
                        $("#brand-wrap").append(content);
                    }

                }


            }
        });
    });


});

var companySwiper1 = new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev",
    },
});

var companySwiper1 = new Swiper(".companySwiper1", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".companySwiper1-button-next",
        prevEl: ".companySwiper1-button-prev",
    },
});
var companySwiper2 = new Swiper(".companySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".companySwiper2-button-next",
        prevEl: ".companySwiper2-button-prev",
    },
});
var companySwiper3 = new Swiper(".companySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".companySwiper3-button-next",
        prevEl: ".companySwiper3-button-prev",
    },
});
var companySwiper4 = new Swiper(".companySwiper4", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".companySwiper4-button-next",
        prevEl: ".companySwiper4-button-prev",
    },
});

//#####Swiper Örneği######

// var announcementSwiper = new Swiper(".announcementSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     centeredSlides: true,
//     breakpoints: {

//         768: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".announcementSwiper-button-next",
//         prevEl: ".announcementSwiper-button-prev",
//     },
// });


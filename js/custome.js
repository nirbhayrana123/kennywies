

$(document).ready(function () {
  $('#menu-toggle').click(function () {
    $('#nav-menu').toggleClass('openmenu');
  });



  new Swiper(".videoslider", {
    initialSlide: 0,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      }
    }
  });


  new Swiper(".mySwiper", {
    initialSlide: 0,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 1
      }
    }
  });


  new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });


  new Swiper(".emotional-swiper", {
    initialSlide: 0,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 1
      }
    }
  });









  AOS.init();

  //////////////////////cont////////////
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    counter.innerText = '0';

    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200; // smaller = slower

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target + (target === 500 ? '+' : '%');
      }
    };

    // Trigger when scrolled into view (Optional improvement)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(entry.target); // run once
        }
      });
    }, { threshold: 1 });

    observer.observe(counter);
  });

  ////////////cont number

  $('#toggleBtn').on('click', function () {
    $('#readMoreBox').toggleClass('expanded');

    if ($('#readMoreBox').hasClass('expanded')) {
      $(this).text('Read Less');
    } else {
      $(this).text('Read More..');
    }
  });


  $('#toggleBtnkanny').on('click', function () {
    $('#kannypagecontent').toggleClass('kannyhideshow');

    if ($('#kannypagecontent').hasClass('kannyhideshow')) {
      $(this).text('Read Less');
    } else {
      $(this).text('Read More..');
    }
  });
 

});



$(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#headerbg').addClass('bgcolor');
    } else {
      $('#headerbg').removeClass('bgcolor');
    }
  });
   
  $(window).scroll();
});


////////////faq////////////


let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})


//////////////////Success Exercises//////////////////  

$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(window).height();
  var scrollMiddle = scrollTop + windowHeight / 2;

  $('.step').each(function () {
    var offsetTop = $(this).offset().top;
    var offsetBottom = offsetTop + $(this).outerHeight();

    if (scrollMiddle >= offsetTop && scrollMiddle < offsetBottom) {
      $('.step').removeClass('active');
      $(this).addClass('active');
    }
  });
});


 $(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  var windowHeight = $(window).height();
  var scrollMiddle = scrollTop + windowHeight / 2;

  $('.step').each(function () {
    var offsetTop = $(this).offset().top;
    var offsetBottom = offsetTop + $(this).outerHeight();

    if (scrollMiddle >= offsetTop && scrollMiddle < offsetBottom) {
      $('.step').removeClass('active');
      $(this).addClass('active');
    }
  });
});
 

////////////////tab//////////////////

$(document).ready(function () {
  $('.tab-buttons li').click(function () {
    var tab_id = $(this).data('tab');
    $('.tab-buttons li').removeClass('active');
    $('.tab-pane').removeClass('active');
    $(this).addClass('active');
    $('#' + tab_id).addClass('active');
  });
});



 
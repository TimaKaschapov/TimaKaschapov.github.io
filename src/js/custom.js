$(document).ready(function () {

    var show = true;
    var countbox = ".statist_container";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.by').css('opacity', '1');
            $('.by').spincrement({
                thousandSeparator: "",
                duration: 12000
            });
            show = false;
        }
    });
    
    let options = {threshold:[0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el)
    });
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
           change.target.classList.add('show-animation');
          }
        });
      }

      $(document).ready(function() {
        $('.image-link').magnificPopup({type:'image'});
      });

      $(document).ready(function(){
        var pp     = $("#pp"),
            bg     = $("#pp-bg");
     
        function pp_hide(pp, bg){
            pp.animate({top: "-550px"}, 1000, function(){bg.fadeOut(1000);});
        }
     
        function pp_show(pp, bg){
            pp.animate({top: "150px"}, 2000);
            bg.fadeIn(1000).click(function(){pp_hide(pp, bg)});
        }
     
        if ( $.cookie('visit') == undefined ){
          setTimeout(function(){
            $.cookie('visit', true);
            pp_show(pp, bg);
        }, 1000);
        } else {
            $('body').append('<h1>Вы у нас уже были :)</h1><a href="#" id="remove_cookie">Удалить куки!</a>');
            $('#remove_cookie').click(function(e){
                e.preventDefault();
                $.removeCookie('visit');
                $(this).after("<span>Куки удалены успешно! Перезагрузите страницу :)</span>").remove();
            });
        }
    });
});


 

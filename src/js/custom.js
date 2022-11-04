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

      window.addEventListener('load', function() { //дожидаемся полной загрузки страницы
        if (getCookie('modal_shown') == null) { //проверяем наличие куки и если её нет, то
            setTimeout(function() { //ждём 15 секунд
                setCookie('modal_shown', 'yes', 1); //ставим куку
                $('#modal-order').modal('show'); //вызываем модально окно
            }, 15000);
        }
    });
    
    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }
    
    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    function eraseCookie(name) {
        setCookie(name, '', {
            'max-age': -1
        });
    }
});


 

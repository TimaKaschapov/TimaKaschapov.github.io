$(document).ready(function () {

    new WOW().init();

    $("#inputTel").mask("+7(999) 999-9999");
    $('form').submit(function(){
        if ($("#inputTel").val() == "" || $("#email").val() == "" ){
            alert("snfdkjnsdkfjdsfn");
        }
    });
    


    
});

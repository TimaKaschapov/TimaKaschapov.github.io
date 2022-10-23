let site, design, adaptive;

let calculator = {
    price: [
        [100, 500, 1000],
        [500, 1000, 2000],
        [1000, 2000, 5000],
    ],
    days: [
        [1, 2, 3],
        [3, 2, 4],
        [1, 5, 6],
    ],
    run(siteType, desingType, adaptiveType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][desingType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][desingType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
         alert("Стоимость: "+ sum +"\n Сроки: "+ days);
    }
}

function getAnswers() {
    site = prompt("Введите тип сайта: \n1 - Одностраничный, \n2 - Корпоративный, \n3 - Интернет-магазин");
        if(site != 1 && site != 2 && site != 3 ){
            alert("Такого варианта нет");
            getAnswers();
            return;
        }
    design = prompt("Выберите дизайн: \n1 - Шаблонный, \n2 - Уникальный, \n3 - WOW-Дизайн");
        if(design != 1 && design != 2 && design != 3 ){
            alert("Такого варианта нет");
            getAnswers();
            return;
        }
    adaptive = prompt("Адаптивность: \n1 - Только ПК, \n2 - Только Мобильная версия, \n3 - ПК + Мобильный");
        if(design != 1 && design != 2 && design != 3 ){
            alert("Такого варианта нет");
            getAnswers();
            return;
        }
        calculator.run(site, design, adaptive);
}

getAnswers();
    
    
    
    
    
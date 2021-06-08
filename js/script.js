function num1() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var month_string = "";
    var day = date.getDate();
    var day_string = "";
    var day_of_week = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    switch (day_of_week) {
        case 0:
            day_string = "Воскресенье";
            break;
        case 1:
            day_string = "Понедельник";
            break;
        case 2:
            day_string = "Вторник";
            break;
        case 3:
            day_string = "Среда";
            break;
        case 4:
            day_string = "Четверг";
            break;
        case 5:
            day_string = "Пятница";
            break;
        case 6:
            day_string = "Суббота";
            break;
        default:
            break;
    }
    switch (month) {
        case 0:
            month_string = "Январь";
            break;
        case 1:
            month_string = "Февраль";
            break;
        case 2:
            month_string = "Март";
            break;
        case 3:
            month_string = "Апрель";
            break;
        case 4:
            month_string = "Май";
            break;
        case 5:
            month_string = "Июнь";
            break;
        case 6:
            month_string = "Июль";
            break;
        case 7:
            month_string = "Август";
            break;
        case 8:
            month_string = "Сентябрь";
            break;
        case 9:
            month_string = "Октябрь";
            break;
        case 10:
            month_string = "Ноябрь";
            break;
        case 11:
            month_string = "Декабрь";
            break;
        default:
            break;
    }
    document.getElementById("result_1").innerHTML = "Сегодня " + year + " год, " + month_string + " месяц, " + day + " число, " + day_string + ", " + hour + ":" + minute + ":" + second;
}

function num2() {
    var today = new Date();
    var birth = Date.parse(document.getElementById("birthdate").value);
    var birthDate = new Date(birth);
    var result;
    if (today > birthDate) {
        result = (today.getFullYear() - birthDate.getFullYear()) * 365 + Math.abs(today.getMonth() - birthDate.getMonth()) * 31 + Math.abs(today.getDate() - birthDate.getDate()); 
        document.getElementById("result_2").innerHTML = "Результат: " + result + " прожитых дней";
    } else {
        document.getElementById("result_2").innerHTML = "Результат: вы еще не родились!";
    }
}

// Необходимо подключение с интернетом, так как я загрузил библиотеки JQuery из сети

function num3() {  
    var $mq = $('#ticket').marquee(
        {
            duration: 3000,
            startVisible: true,
            duplicated: false,
            delayBeforeStart: 0
        }
    ); 
    
}

function timerResume() {
    let timerId = setInterval(function() {
        var $mq = $('#ticket').marquee("toggle");
      }, 3000);
}

function num4() {
    var timer = parseInt(document.getElementById("timer").value);
    var clock = document.getElementById("result_4");
    let timerId = setInterval(function() {
        clock.innerText = timer;
        timer--;
        if (timer < 0) {
            clearInterval(timerId);
        }
    }, 1000);
}

$(function () {
    let tabLink = document.querySelectorAll(".tabs__item");
    let tabItem = document.querySelectorAll(".projects__block");
    for (let i = 0; i < 6; i++) {
        tabLink[i].onclick = function (e) {
            for (let i = 0; i < 6; i++) {
                tabLink[i].classList.remove('tabs__item--active');
                tabItem[i].classList.remove("projects__block--active");
            }
            tabItem[i].classList.add("projects__block--active");
            tabLink[i].classList.add('tabs__item--active');
        };
    }

    let step = document.querySelectorAll(".steps-block");
    let stepDesc = document.querySelectorAll(".steps-block__desc");
    for (let i = 0; i < 6; i++) {
        step[i].onmouseenter = function (e) {
            for (let i = 0; i < 6; i++) {
                step[i].classList.remove('steps-block--active');
                stepDesc[i].classList.remove("steps-block__desc--active");
            }
            step[i].classList.add("steps-block--active");
            stepDesc[i].classList.add('steps-block__desc--active');
        };
    }
    let burgerLink = document.querySelector(".header__nav-item-link--burger");
    let burgerBlock = document.querySelector(".burger-menu-sites");

    burgerLink.onclick = function (e) {
        burgerLink.classList.toggle("header__nav-item-link--burger--active");
        burgerBlock.classList.toggle("burger-menu-sites--active")
    }




    let burgerButton = document.querySelector(".burger-button");
    let burgerMenu = document.querySelector(".header__nav");
    burgerButton.onclick = function (e) {
        burgerMenu.classList.toggle("header__nav--active");
        burgerButton.classList.toggle("burger-button--active");
    }

    var popup = document.querySelector('.popup__inner');
    document.addEventListener('mousedown', function (e) {

        if (e.target.closest('.popup__inner') === null) {
            document.querySelector('.popup').style.display = 'none';
        }
    });
    let currentTab = 0;
    document.addEventListener('click', function (e) {
        if (e.target == document.querySelector('.callback-btn')) {
            document.querySelector('.popup').style.display = 'flex';
        }

        if (e.target == document.querySelector(".main-btn")) {
            document.querySelector(".popup-start").classList.add('popup-start--active');
            document.getElementById("popup1").style.display = "block";
        }


        let popupTab = document.querySelectorAll(".tab");
        let popupBtn = document.querySelectorAll(".tab__buttons-item");
        let popupSkip = document.querySelectorAll(".popup-skip");
        if (e.target == document.querySelector('#tab__application')) {
            popupTab[currentTab].style.display = "none";
            popupTab[currentTab + 7].style.display = "block";
            currentTab = currentTab + 7;
        }
        else if (e.target == document.querySelector('#tab__brand')) {
            popupTab[currentTab].style.display = "none";
            popupTab[currentTab + 9].style.display = "block";
            currentTab = currentTab + 9;
        }
        else if (e.target == document.querySelector('#tab__design')) {
            popupTab[currentTab].style.display = "none";
            popupTab[currentTab + 13].style.display = "block";
            currentTab = currentTab + 13;
        }
        else {
            for (let n = 0; n < 200; n++) {
                if (e.target == popupBtn[n]) {
                    if (currentTab == 8 || currentTab==14) {
                        popupTab[currentTab].style.display = "none";
                        currentTab = 2;
                        popupTab[currentTab].style.display = "block";
                    }
                    if (currentTab == 12) {
                        popupTab[currentTab].style.display = "none";
                        currentTab = 4;
                        popupTab[currentTab].style.display = "block";
                    }
                    else{
                       popupTab[currentTab].style.display = "none";
                    popupTab[currentTab + 1].style.display = "block";
                    currentTab = currentTab + 1;
                    }

                }
                if (e.target == popupSkip[n]) {
                    popupTab[currentTab].style.display = "none";
                    popupTab[currentTab + 1].style.display = "block";
                    currentTab = currentTab + 1;
                }
            }
        }
        //Кнопка назад
        if (e.target == document.querySelector(".btn-back")) {
            if (currentTab == 7 || currentTab == 9 || currentTab == 13|| currentTab == 2) {
                popupTab[currentTab].style.display = "none";
                currentTab = 0;
                popupTab[currentTab].style.display = "block";
            }
            else {
                popupTab[currentTab].style.display = "none";
                currentTab = currentTab - 1;
                popupTab[currentTab].style.display = "block";
            }

        }

        if (e.target == document.querySelector(".btn-close")) {
            document.querySelector(".popup-start").classList.remove('popup-start--active');
            popupTab[currentTab].style.display = "none";
            currentTab = 0;
        }
        //Отключение изображения кнопки назад на первом экране
        if (currentTab == 0) {
            document.querySelector(".btn-back").style.display = "none";
        }
        if (currentTab != 0) {
            document.querySelector(".btn-back").style.display = "block";
        }
    });
    // var currentTab = 0;
    // showTab(currentTab);

    // function showTab(n) {
    //     var x = document.getElementsByClassName("tab");
    //     x[n].style.display = "block";
    //     if (n == 0) {
    //         document.getElementById("prevBtn").style.display = "none";
    //     } else {
    //         document.getElementById("prevBtn").style.display = "inline";
    //     }
    //     if (n == (x.length - 1)) {
    //         document.getElementById("nextBtn").innerHTML = "Submit";
    //     } else {
    //         document.getElementById("nextBtn").innerHTML = "Next";
    //     }
    //     fixStepIndicator(n)
    // }

    // function nextPrev(n) {
    //     var x = document.getElementsByClassName("tab");
    //     if (n == 1 && !validateForm()) return false;
    //     x[currentTab].style.display = "none";
    //     currentTab = currentTab + n;
    //     if (currentTab >= x.length) {
    //         document.getElementById("regForm").submit();
    //         return false;
    //     }
    //     showTab(currentTab);
    // }

    // function fixStepIndicator(n) {
    //     var i, x = document.getElementsByClassName("step");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].className = x[i].className.replace(" active", "");
    //     }
    //     x[n].className += " active";
    // }


    var answersData = [];

    $(".tab__buttons-item").click(function() {
        var element = $(this);
        var question = $(this).parent().parent().find(".tab-title").text();
        var answer = element.text();
        var result = question + " " + answer;
        result = result.replace(/\s{2,}/g, ' ');;
        answersData.push(result);
    });

    $(".popup-skip").click(function() {
        var element = $(this);
        var question = $(this).parent().find(".tab-title").text();
        var answer = element.text();
        var result = question + " " + answer;
        result = result.replace(/\s{2,}/g, ' ');;
        answersData.push(result);
    });

    // находим форму и вешаем обработчик на событие отправки (submit)
    $("#popup-start-form").submit(function(e) {
        e.preventDefault(); // отключаем стандартное поведение формы

        var form = $(this);
        var url = form.attr('action'); // вытаскиваем адрес скрипта, на который должна отправиться форма
        var formData = form.serializeArray(); // собираем данные полей формы в переменную
        formData["answers"] = answersData; // добавляем к данным формы данные собранных ответов на вопросы

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            success: function(data)
            {
                console.log(data); // Действие при успешной отправке формы (по идее закрывать окно надо)
            },
            error: function (error) {
                console.log(error); // Действие при не успешной отправке формы
            }
        });
    });
});

function errorMark(name) {
    return document.getElementById(name).className = 'error';
};

    document.getElementById('btn-hw3').addEventListener('click', () => {
        let name = '';
        let phone = null;
        let email = '';
        let text = '';
        name = document.getElementById('name').value;
        phone = document.getElementById('phone').value;
        email = document.getElementById('email').value;
        text = document.getElementById('text').value;
    // ||роверка Имя содержит только буквы.
        console.log(text.match(/^[[а-я]+[a-z]+]?1/gi));
        if (((name.match(/^[a-z]+[\s\b[a-z]+]?$/gi)) === null) && ((name.match(/^[а-я]+[\s\b[а-я]+]?$/gi)) === null)) {
            errorMark('name');
        }
        //проверка имеет вид +7(000)000-0000.
        if (((phone.match(/^\+\d\(\d\d\d\)\d\d\d-\d\d\d\d$/g)) === null)) {
            errorMark('phone');
        }
        //проверка почты/ c. E-mail имеет вид mymail@mail.ru , или my.mail@mail.ru , или my-mail@mail.ru .
        if ((email.match(/^\w+[.-]?\w+@\w+\.\w+$/gi)) === null) {
            errorMark('email');
        }
    });
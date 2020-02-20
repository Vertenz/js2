/*
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок
(обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ###
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и
полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую
стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички,
но можно использовать и свою.
 */

class Burger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = null;
    }

    addTopping(topping) {
        this.topping = topping;
    }

    removeTopping() {
        this.topping = null;
    }

    calc() {
        let totalPrice = 0;
        let totalCalories = 0;
        if (this.size !== 'big' && this.size !== 'small') {
            console.log(`size ${this.size}`);
            alert('Неверный размер');
        }
        if (this.size === 'big') {
                totalPrice += 100;
                totalCalories += 40
        }else  {
            totalPrice += 50;
            totalCalories += 20;
        }
        switch (this.stuffing) {
            case 'cheese':
                totalPrice += 10;
                totalCalories += 20;
                break;
            case 'salad':
                totalPrice += 20;
                totalCalories += 5;
                break;
            case 'potato':
                totalPrice += 15;
                totalCalories += 10;
                break
        }
        if (this.topping === 'seasoning') {
            totalPrice += 15;
        } else if (this.topping === 'mayonnaise') {
            totalPrice += 20;
            totalCalories += 5;
        }else {
            totalPrice = totalPrice;
            totalCalories = totalCalories;
        }

        return console.log(`Итоговая цена ${totalPrice}. Калорияность ${totalCalories}.`)
}
}

const bigBurger = new Burger('big', 'salad');
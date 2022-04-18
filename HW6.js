
//From previous homework
function Car(model, year, color, mpg, id) {
    this.model = model
    this.year = year
    this.color = color
    this.mpg = mpg
    this.id = id
}

function car_list () {
    var row = []
    var lst = []
    for (var i = 1; i <= 100; i++) {
        car = new Car('320i', '2017', 'Gray', '28', i)
        if (i%10 == 0) {
            row.push(car);
            lst.push(row);
            row = []
        }
        else {
            row.push(car);
        }
    }
    return lst
}

lst = car_list()

function getCarsBetweenIds (idMin, idMax) {
    var array = []
    for (var i = Math.floor((idMin/10)); i < Math.ceil((idMax/10)); i++) {
        for (var j = 0; j < 10; j++){
            if (lst[i][j].id >= idMin && lst[i][j].id <= idMax) {
                lst[i][j].color = "blue";
                array.push(lst[i][j]);
            }
        }
    }
    return array
}

lst1 = getCarsBetweenIds(30, 77)
lst2 = getCarsBetweenIds(10, 16)
lst3 = getCarsBetweenIds(1, 27)
console.log(lst1)
console.log(lst2)
console.log(lst3)
console.log(lst3[0].color)
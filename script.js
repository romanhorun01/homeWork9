// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a


// function TagName(nameTag, action, attribute) {
//     this.nameTag = nameTag;
//     this.action = action;
//     this.attribute = attribute
//
// }
//
// let title = ('<a>');
// let action = ('Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ');
// let attributes =[
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
//
// ]
// let a = new TagName(title,action,attributes);
// console.log(a)
//
// // -div
//
// let titleDiv = ('<div>');
// let actionDiv = ('Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей');
// let attributesDiv =[
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//
// ]
// let div = new TagName(titleDiv,actionDiv,attributesDiv);
// console.log(div)
//
//
//
// // -h1
// let titleH1 = ('<h1>');
// let actionH1 = ('HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка');
// let attributesH1 =[
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
//
//
// ]
// let h1 = new TagName(titleH1,actionH1,attributesH1);
// console.log(h1)
//
// // -span
// let titleSpan = ('<span>');
// let actionSpan = ('Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.');
// let attributesSpan =[
//     {titleOfAttr: 'align', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'},
//
//
// ]
// let span = new TagName(titleSpan,actionSpan,attributesSpan);
// console.log(span)
//
//
//
//
//
// // -input
// let titleInput = ('<input>');
// let actionInput = ('Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.');
// let attributesInput =[
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {titleOfAttr: 'align', actionOfAttr: ' Определяет выравнивание изображения'}
//
//
// ]
// let input = new TagName(titleInput,actionInput,attributesInput);
// console.log(input)
//
// // -form
//
// let titleForm = ('<form>');
// let actionForm = ('Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.');
// let attributesForm =[
//     {titleOfAttr: 'name', actionOfAttr: 'Имя формы'},
//     {titleOfAttr: 'novalidate', actionOfAttr: 'Отменяет встроенную проверку данных формы на корректность ввода.'}
//
//
// ]
// let form = new TagName(titleForm,actionForm,attributesForm);
// console.log(form)
// // -option
// let titleOption = ('<option>');
// let actionOption = ('Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. ');
// let attributesOption =[
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'}
//
//
// ]
// let option = new TagName(titleOption,actionOption,attributesOption);
// console.log(option)
//
//
//
//
//
//
// // -select
//
//
//
//
//
// let titleSelect = ('<select>');
// let actionSelect = ('Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее ');
// let attributesSelect =[
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//     {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка..'}
//
//
// ]
// let select = new TagName(titleSelect,actionSelect,attributesSelect);
// console.log(select)
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
//
// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)

// Назва.
//     В кожного компютера має бути метод включання.
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//


// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.


//      Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.
//
//
// class PC{
//     constructor(ram ,cpuPower = 500) {
//         this.ram = ram;
//         this.cpuPower = cpuPower;
//     }
//     onPc(){
//         console.log('PC on!!!')
//     }
// }
//
// let pc = new PC(8 , undefined)
// pc.onPc();
// console.log(pc);
// class Laptop extends PC{
//     constructor(ram,cpuPower ,inchMonitor,) {
//         super(ram ,cpuPower);
//         this.inchMonitor = inchMonitor;
//
//         this.battery= Math.round(this.cpuPower/(this.inchMonitor*this.ram))
//     }
//
//
// }
// let laptop = new Laptop(16 ,500,15);
//
// console.log(laptop);
//
// class Ultrabook extends Laptop{
//     constructor(ram,cpuPower ,inchMonitor,weight,battery=0) {
//         super(ram,cpuPower ,inchMonitor,battery);
//         this.weight = weight;
//         if(this.weight > 2 ){
//             console.log('the battery lasts less than 4 hours')
//         }
//         else{
//             console.log('battery good )')
//         }
//
//
//     }
//
//
// }
// let ultrabook = new Ultrabook(2 ,400, 12,2.1,);
// console.log(ultrabook);
//
// class basePC extends PC{
//     constructor(ram ,cpuPower,fps) {
//         super(ram,cpuPower,fps);
//
//         this.fps = this.cpuPower / this.ram;
//         console.log(`You are playing CS_GO with ${this.fps} fps`)
//     }
//     upCpu(){
//         this.cpuPower += this.cpuPower/10;
//
//     }
//     upRam(){
//         this.ram *=2;
//     }
//
// }
// let basicPc = new basePC(4 ,200,)
// basicPc.upRam();
// basicPc.upCpu();
// console.log(basicPc);
//
//
// class gamePC extends basePC{
//     constructor(ram,cpuPower) {
//         super(ram ,cpuPower);
//         this.fps *=2;
//     }
//
//     downCpu(){
//         if(this.cpuPower < 500 && this.ram < 8 )
//         {
//             console.log('На цьому відрі ігри не запускаються');
//
//         } else
//         {
//             this.cpuPower -= this.cpuPower*0.01;
//         }
//     }
// }
// let gamingPC = new gamePC(4,500,);
// gamingPC.downCpu();
// console.log(gamingPC);
//
//


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// let car = {
//     manufacturer: 'bmw',
//     model: 'x5',
//     year: 2018,
//     maxSpeed: 250,
//     capacity: 3.0,
//     driver: 'no',
//
//     drive(){
//         console.log(`Ідемо зі швидкістю ${this.maxSpeed} км на годину`)
//
//     },
//     info(){
//         console.log(`Марка машини ${this.manufacturer}`);
//         console.log(`Модель машини ${this.model}`);
//         console.log(`Рік випуску машини ${this.year}`)
//         console.log(`Максимальна швидкість машини ${this.maxSpeed}`)
//         console.log(`Об'єм двигуна машини ${this.capacity}`)
//         console.log(`Водій ${this.driver}`)
//
//     },
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     },
//     changeYear(newYear){
//         this.year = newYear;
//     },
//     addDriver(newDriver){
//         this.driver = newDriver;
//     }
// }
// car.drive();
// car.changeYear(2020);
// car.increaseMaxSpeed(280);
// car.addDriver({name:'Roman',age:20});
// car.info();
// console.log(car.driver);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//
// function Car(manufacturer, model, year, maxSpeed, capacity) {
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = 'name';
//
//     this.drive = function () {
//         console.log(`Ідемо зі швидкістю ${this.maxSpeed} км на годину`)
//
//     }
//
//
//     this.info = function ()
//     {
//         console.log(`Марка машини ${this.manufacturer}`);
//         console.log(`Модель машини ${this.model}`);
//         console.log(`Рік випуску машини ${this.year}`)
//         console.log(`Максимальна швидкість машини ${this.maxSpeed}`)
//         console.log(`Об'єм двигуна машини ${this.capacity}`)
//
//
//     }
//
//     this.increaseMaxSpeed = function (newSpeed)
//     {
//         this.maxSpeed = newSpeed;
//     }
//
//     this.changeYear = function (newYear)
//     {
//         this.year = newYear;
//     }
//
//     this.addDriver = function (newDriver)
//     {
//         this.driver = newDriver;
//     }
// }
// let car = new Car('audi','a3',2009,170,2.2,)
// car.drive();
// car.changeYear(2020);
// car.increaseMaxSpeed(280);
// car.addDriver({name: 'Roman', age: 20});
// car.info();
// console.log(car.driver);


// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
//
// }
//
// class Prince extends Human {
//     constructor(name, age, lookShoes) {
//         super(name, age);
//         this.lookShoes = lookShoes;
//     }
//
// }
// let Prince1 = new Prince('Ivan',25,36)
// let Cinderellas = [
//     new Cinderella('Ira',20,34),
//     new Cinderella('Yana',21,35),
//     new Cinderella('Olia',22,37),
//     new Cinderella('Maria',23,36),
//     new Cinderella('Vira',24,38),
//     new Cinderella('Anya',25,32),
//     new Cinderella('Veronika',26,31),
//     new Cinderella('Natalia',27,40),
//     new Cinderella('Marta',28,32),
//     new Cinderella('Solomia',28,30),
// ]
// for (const cinderella of Cinderellas) {
//     if(cinderella.footSize === Prince1.lookShoes){
//         console.log(cinderella)
//     }
// }

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
//
// }
//
// class Prince extends Human {
//     constructor(name, age, lookShoes) {
//         super(name, age);
//         this.lookShoes = lookShoes;
//     }
//     findCin(arr){
//         for (const cinderella of arr) {
//             if(cinderella.footSize === Prince1.lookShoes){
//                 console.log(cinderella)
//             }
//         }
//     }
//
// }
// let Prince1 = new Prince('Ivan',25,40)
// let Cinderellas = [
//     new Cinderella('Ira',20,34),
//     new Cinderella('Yana',21,35),
//     new Cinderella('Olia',22,37),
//     new Cinderella('Maria',23,36),
//     new Cinderella('Vira',24,38),
//     new Cinderella('Anya',25,32),
//     new Cinderella('Veronika',26,31),
//     new Cinderella('Natalia',27,40),
//     new Cinderella('Marta',28,32),
//     new Cinderella('Solomia',28,30),
// ]
// Prince1.findCin(Cinderellas);

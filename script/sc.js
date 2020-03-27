// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// // Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
  manufacturer: "TeslaInc",
  model: "TeslaRoadster",
  yesr: 2012,
  averageSpeed: 100
};

let watch = function() {
  for (let key in car) {
    console.log(key);
    console.log(car[key]);
  }
};

let howTimeForKM = km => {
  let result = km / car.averageSpeed;
  let PlusRest = 0;
  if (result > 4) {
    PlusRest = Math.floor(result / 4);
  }
  return result + PlusRest;
};

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом:
// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов.

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая.
//  Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
  day: 0,
  hour: 17,
  minutes: 11,
  seconds: 20
};

let howTime = function() {
  console.log(`${time.hour}:${time.minutes}:${time.seconds}`);
};

let secPlus = S => {
  time.seconds += S;

  let kosmos = time.seconds;
  time.seconds = time.seconds % 60;
  time.minutes += Math.floor(kosmos / 60);
};

let minPlus = M => {
  time.minutes += M;

  let kosmos = time.minutes;
  time.minutes = time.minutes % 60;
  time.hour += Math.floor(kosmos / 60);
};

let hourPlus = H => {
  time.hour += H;

  let kosmos = time.hour;
  time.hour = time.hour % 23;
  time.day += Math.floor(kosmos / 23);
  console.log(`Day#${time.day}  ${time.hour}:${time.minutes}:${time.seconds}`);
};

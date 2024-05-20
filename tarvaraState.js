let currentSyna = "";
let currentLanguage = "et";
const synad = [
    'teostus',
    'algoritm',
    'kavand',
    'kasutajaliides',
    'mudel',
    'andmebaasi skeem',
    'standart',
    'tsükkel',
    'andmetõõtlus',
    'andmestruktuur',
    'arendusKeskkond',
    'projektihaldus tõõriist',
    'kavandamine',
    'iteratsioon',
    'parandus',
    'parandamine',
    'koskmudel',
    'agiilne mudel',
    'spiraalne mudel',
    'inkrementaalne mudel',
    'nõudmised',
    'realiseerimine',
    'testimine',
    'intergreerimine',
    'kasutamine',
    'holdus',
    'eelised',
    'puudused',
    'elutsükkel',
    'arendamine',
    'validaarimine'
];

const ruSynad = [
    'выполнение',
    'алгоритм',
    'дизайн',
    'пользовательский интерфейс',
    'модель',
    'схема базы данных',
    'стандартный',
    'цикл',
    'сбор данных',
    'структура данных',
    'среда разработки',
    'инструмент управления проектами',
    'планирование',
    'итерация',
    'коррекция',
    'фиксация',
    'модель водопада',
    'гибкая модель',
    'спиральная модель',
    'инкрементная модель',
    'претензии',
    'реализация',
    'тестирование',
    'интеграция',
    'использовать',
    'держать',
    'преимущества',
    'недостатки',
    'жизненный цикл',
    'разработка',
    'Проверка'
];
// Funktsioon juhusliku eestikeelse sõna genereerimiseks ja kuvamiseks
function randomSynaET() {
    const juhuslikSyna = Math.floor(Math.random() * synad.length);
    currentSyna = synad[juhuslikSyna];
    currentLanguage = "et";
    document.getElementById("random-syna").innerHTML = currentSyna;
}
// Funktsioon juhusliku vene sõna genereerimiseks ja selle kuvamiseks
function randomSynaRU() {
    const juhuslikSyna = Math.floor(Math.random() * ruSynad.length);
    currentSyna = ruSynad[juhuslikSyna];
    currentLanguage = "ru";
    document.getElementById("random-syna").innerHTML = currentSyna;
}
// Funktsioon, mis kontrollib, kas sisestatud tõlge on õige.
function kontroll() {
    const inputValue = document.getElementById("kontroll").value.trim().toLowerCase();
    let index, correctAnswer;

    if (currentLanguage === "et") {
        index = synad.indexOf(currentSyna);
        correctAnswer = ruSynad[index].toLowerCase();
    } else {
        index = ruSynad.indexOf(currentSyna);
        correctAnswer = synad[index].toLowerCase();
    }

    if (correctAnswer === inputValue) {
        document.getElementById("vastus").innerText = "Õige";
    } else {
        document.getElementById("vastus").innerText = "Vale";
    }
}

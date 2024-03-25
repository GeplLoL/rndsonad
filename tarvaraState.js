let currentSyna = "";
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
function randomSyna() {
    const juhuslikSyna = Math.floor(Math.random() * synad.length);
    currentSyna = synad[juhuslikSyna];
    document.getElementById("random-syna").innerHTML = currentSyna;
}

function kontroll() {
    const inputValue = document.getElementById("kontroll").value;
    const index = synad.indexOf(currentSyna);

    if (ruSynad[index] === inputValue) {
        document.getElementById("vastus").innerText = "õigus";
    } else {
        document.getElementById("vastus").innerText = "vale";
    }
}

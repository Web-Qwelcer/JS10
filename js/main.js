let list = [
    [
        'Лелека'
    ],
    [
        'Ставок'
    ],
    [
        'Чайник'
    ],
    [
        'Торт'
    ],
    [
        'Вогонь'
    ],
    [
        'Цукерка'
    ],
    [
        'Зошит'
    ],
    [
        'Вікно'
    ],
    [
        'Хліб'
    ],
    [
        'Свічка'
    ]
];

let $input = document.querySelectorAll('input'),
    $button = document.querySelectorAll('button');

for (let i = 0; i < $input.length; i++) {
    $button[i].addEventListener('click', function() {
        if ($input[i] != list[i]) {
            console.log('No' + $input + ' ' + list[i])
        }
        else {
            console.log('Yes' + $input + ' ' + list[i])
        }
    })
}

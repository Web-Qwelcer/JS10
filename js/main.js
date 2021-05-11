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
        const input = $input[i];
        const inputValue = new String(input.value).toLowerCase();
        const answerValue = new String(list[i]).toLowerCase();

        if (inputValue == answerValue) {
            const inputParent = input.parentElement;

            inputParent.getElementsByTagName('input')[0].remove();
            inputParent.getElementsByTagName('button')[0].remove();

            const answered = document.createElement('span');
            answered.innerHTML = 'OK';
            inputParent.appendChild(answered);
        }
        //console.log((inputValue == answerValue ? 'Yes': 'No') + ` '${inputValue}' '${list[i]}'`)
    })
}

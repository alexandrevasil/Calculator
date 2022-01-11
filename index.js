// let screen = document.querySelector('.bottom-bar .container .screen')

// let spanOne = document.querySelector('section .container span:nth-child(1)')
// // spanOne.innerHTML = 7
// spanOne.addEventListener('click', function () {
//     screen.innerHTML = 7
// })

// let span2 = document.querySelector('section .container span:nth-child(2)')
// // spanOne.innerHTML = 7
// span2.addEventListener('click', function () {
//     screen.innerHTML = 8
// })

// $(() => {
//     const btn = $('._active1');
//     const link = $('link');
//     let counter = 0;
//     btn.on('click', () => {
//         // document.querySelector('link');
//         if (counter % 2 == 0) {
//             link.attr('href', './style1.css');
//         }
//         else {
//             link.attr('href', './style.css');
//         };
//         counter++;
//     });
// })

function switchTheme() {
    if (document.getElementById('radio1').checked == true) {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
    }

    if (document.getElementById('radio2').checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
    }

    if (document.getElementById('radio3').checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark2')
        localStorage.setItem('theme', 'dark2')
    }
}



// const toggleSwitch = document.getElementById('themeSwitcher')

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark')
//         localStorage.setItem('theme', 'dark')
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light')
//         localStorage('theme', 'light')
//     }
// }

// toggleSwitch.addEventListener('click', switchTheme, false)

// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }
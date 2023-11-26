//-------------------------------------------------
//		スライドショー
//-------------------------------------------------

jQuery(function($) {
    $('.firstview').bgSwitcher({
    images: ['images/top_img1.jpg', 'images/top_img2.jpg', 'images/top_img3.jpg'], // 切り替える背景画像
    interval: 5000, // 背景画像を切り替える間隔 1000=1秒
    loop: true, // 切り替えを繰り返すか true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 2000, // エフェクトの時間 1000=1秒
    easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });
});


//-------------------------------------------------
//		スライドメニュー　ボタンで開閉
//-------------------------------------------------
const humburger = document.querySelector('.humburger');
const nav = document.querySelector('nav');
const btn_open = document.querySelector('.fa-bars');
const btn_close = document.querySelector('.fa-xmark');

humburger.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    //ボタン画像変更
    btn_open.classList.toggle('open-menu');
    btn_close.classList.toggle('close-menu');
});

//-------------------------------------------------------
//		スライドメニュー　リンククリックでメニューを閉じる
//-------------------------------------------------------
const nav_li = document.querySelector('.nav_li');

nav_li.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    //ボタン画像変更
    btn_open.classList.toggle('open-menu');
    btn_close.classList.toggle('close-menu');
});

//-------------------------------------------------------
//		スライドメニュー　メニュー外クリックでメニューを閉じる
//-------------------------------------------------------
// console.log(nav);
// nav.addEventListener('click', (event) => {
//     if(event.target.closest(nav) === null){
//     console.log('外側をクリックされました。');
//     }
// });
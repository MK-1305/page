const text = document.querySelector('.lyrics');
const loading1 = document.querySelector('#loading');
const loading2 = document.querySelector('#loading-screen');
const loadingLogo = document.querySelector('.spinner');
const gunya = document.querySelector('.gunya');


// ロード画面
window.addEventListener('load', () => {
    loading1.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 3000,
            easing: 'ease',
            fill: 'forwards',
        }
    )
    loadingLogo.animate(
        {
            opacity: [1,0]
        },
        {
            duration: 3000,
            easing: 'ease',
            fill: 'forwards',
        }
    )
  }
)

// 文字
text.animate(
    {
        translate: ['0 50vh', '0 0'],
        opacity: [0,1]
    },
    {
        duration: 4000,
        delay: 400,
        easing: 'ease',
        fill: 'forwards',
    }
);

const keyframes = {
    borderRadius: [
        '79% 21% 54% 46% / 67% 55% 45% 33% ',
        '79% 21% 13% 87% / 11% 33% 67% 89% ',
        '20% 80% 13% 87% / 79% 33% 67% 21% ',
        '59% 41% 76% 24% / 79% 15% 85% 21% ',
    ],
};

const options = {
    duration: 8000,
    direction: 'alternate',
    iterations: Infinity,
};

gunya.animate(keyframes, options);

// intersectionobserverやる

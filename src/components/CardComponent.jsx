import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

export const CardComponent = () => {
  const cardsData = [
    {
      title: 'Фотогалерея',
      text: 'Этот проект представляет собой многостраничный сайт с галереей с плавающими фотографиями (с использованием Draggable и InertiaPlugin). Реализован прелоадер, свайпер с таймером, смена цвета темы.',
      imgSrc: 'https://sun9-41.userapi.com/impg/UedBUpU4-Y9hhbBNlbUfJqnA02Zmqywz7eAcmA/odzV2C-Dgtw.jpg?size=1875x908&quality=96&sign=6e3b1a6dafad86ab2f601382aefdf1de&type=album',
      link: 'https://vamaryk.github.io/gallery/',
    },
    {
      title: 'Форма обратной связи',
      text: 'Этот проект представляет собой форму обратной связи — своеобразный инструмент для совершенствования образовательного процесса и взаимодействия между студентами и преподавателями.',
      imgSrc: 'https://sun155-1.userapi.com/impg/ifqVWRcoYp0v4chJwxm1VfLAM5NvDKC8ohFDfA/gSOoStvLCF8.jpg?size=1314x768&quality=96&sign=521c77df379fc3438786679afcee0e03&type=album',
      link: 'https://codepen.io/wfxuwaxx-the-reactor/full/qBwXGZy',
    },
    {
      title: 'Счётчик',
      text: 'Этот проект — простой счётчик, позволяющий изменять числовое значение (с разным шагом), отображаемое на экране. Есть кнопка для сброса и возможность управлять с помощью горячих клавиш.',
      imgSrc: 'https://sun9-32.userapi.com/impg/Dx-Kqw4BGkvo7f3thMXIbA-JpNHRIczXBcmpTA/E2ZFuo7jbQ0.jpg?size=746x510&quality=96&sign=182681fc8d3af344d7a7c172e177ce25&type=album',
      link: 'https://codepen.io/wfxuwaxx-the-reactor/full/XWvgrGr',
    },
    {
      title: 'Генерация случайной фотографии',
      text: 'Проект предназначен для получения случайных изображений собак из внешнего API с использованием асинхронных методов на JavaScript. Полученные изображения отображаются на веб-странице в качестве развлечения для пользователей, есть возможность добавлять фотографии в "Избранное" и удалять их с помощью горячих клавиш.',
      imgSrc: 'https://sun9-78.userapi.com/impg/GiagHBA5kVjAGPwr_GJsLntPRBnRwSVpwGm8Fw/jydyisNs6aY.jpg?size=738x688&quality=96&sign=d2cc23f27922d786fb39adbce4a78627&type=album',
      link: 'https://codepen.io/wfxuwaxx-the-reactor/full/ZEdgEZw',
    },
    {
      title: 'Игра (новелла) в стиле LEGO',
      text: 'Этот проект представляет собой визуальную новеллу (жанр компьютерных игр, подвид текстового квеста). В данной игре несколько вариантов развития сюжета, всё зависит только от выбора того или иного действия. Во время прохождения этой новеллы на фоне играет захватывающая музыка.',
      imgSrc: 'https://sun9-63.userapi.com/impg/bwqpcz2SqoeLuvof0M2r1NcgZGGNxhGZ71bFsg/hcKyJ8-7xEo.jpg?size=779x502&quality=96&sign=880510ed5b7b5e8e35df450a71ce90f8&type=album',
      link: 'https://codepen.io/wfxuwaxx-the-reactor/full/bGyoOzw',
    },
    {
        title: 'Генерация случайных шуток',
        text: 'Проект использует внешний API для получения случайных шуток с использованием асинхронных методов на JavaScript. После получения данные отображаются на веб-странице в виде шутки для развлечения пользователей. Есть возможность скопировать шутку в буфер обмена.',
        imgSrc: 'https://sun9-30.userapi.com/impg/2jYOr7Ln7fX0h1N9Ww9agkPRAtDDdcGJLvFZ9A/_ETSVCsE7_Q.jpg?size=1208x446&quality=96&sign=39e1e53e5bdad224cb66120a42c63d4f&type=album',
        link: 'https://codepen.io/wfxuwaxx-the-reactor/full/MWMMvxK',
      },
      {
        title: 'Туристическая фирма',
        text: 'Многостраничный сайт для туристической фирмы, который превращает поиск идеального тура в увлекательное приключение! С поиском по страницам, всплывающими окнами, свайперами и каруселями, сайт предлагает пользователям легкую навигацию и захватывающий интерфейс. Страница 404 оформлена с креативом, есть возможность зарегистрироваться и добавлять путёвки в "Избранное". Адаптивный дизайн обеспечивает удобство на любых устройствах, а бургерное меню делает использование сайта комфортным на мобильных.',
        imgSrc: 'https://sun9-1.userapi.com/impg/vK86mmqyF5T3HmIHeqcGYPJalpNBFPhneLgL4A/WYqMzDxoL5c.jpg?size=1885x911&quality=96&sign=6ad63d614118e2407b0f31817c252125&type=album',
        link: 'https://vamaryk.github.io/vamaryk.AdventureTime.io/',
      },
      {
        title: 'Форма регистрации',
        text: 'Проект демонстрирует проверку формы на стороне клиента с использованием JavaScript. В процессе выполнения проверяются данные, введенные пользователем в форму, перед отправкой. При успешной проверке отображается сообщение об успехе, а введенные данные становятся доступными для просмотра в режиме только для чтения. Есть возможность переключения языка интерфейса и защита формы от спама с помощью reCAPTCHA.',
        imgSrc: 'https://sun9-5.userapi.com/impg/ReqLj1pqtsau1BLhBvCumImhdWg2jN6QueNJJw/ErLw3U5s1D8.jpg?size=1035x674&quality=96&sign=b61f9a5abd7010a2565f32abfb9b41c1&type=album',
        link: 'https://vamaryk.github.io/captcha/',
      },
      {
        title: '"Драконы и волшебники"',
        text: 'Игра "Драконы и волшебники", созданная с использованием React JS, представляет собой версию "Крестиков-ноликов". Пользователи могут управлять игрой с помощью горячих клавиш, есть два режима: с другом или против компьютера, использующего алгоритм минимакс. Ведется счет, есть возможность отменить последний ход, начать новую игру, а также сбросить счет. При выигрыше выделяется победная линия и появляется анимация, добавляющая динамику игре.',
        imgSrc: 'https://sun1-89.userapi.com/impg/CuiNcSUzGY8FOOx3pQXG-5CYLpgrNlGvM7u-Jg/FiftWVevotM.jpg?size=1537x740&quality=96&sign=d4487d09fad381dcab6b7065775b661e&type=album',
        link: 'https://codepen.io/wfxuwaxx-the-reactor/full/LYwjxgy',
      },
  ];

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="project" id="projects">
      <h2>Проекты</h2>
      <div className="container">
        <div className="row px-3">
          {cardsData.map((card, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index} onClick={() => handleCardClick(card.link)} style={{ cursor: 'pointer' }}>
              <motion.div 
                className="card h-100"
                initial={{ opacity: 0, y: 65 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={card.imgSrc} className="card-img-top p-0 img-height" alt={card.title} />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const chatWindow = Array.from(document.getElementsByClassName("chat-widget"));
const chatInput = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");
const messageBody = document.querySelector(".chat-widget__messages-container");

let messTime = document.getElementsByClassName("message__time");
let messText = document.getElementsByClassName("message__text");

setTimeout(() => {
  ///таймер ожидания
  botAngry();
}, 10000);

function debounce(f, ms) {
  let start;

  function wrapper(...args) {
    if (start === undefined) {
      f.apply(this, args);
      start = Date.now();
    } else {
      let elapsedTime = Date.now() - start;
      if (elapsedTime >= ms) {
        f.apply(this, args);
        start = Date.now();
      }
    }
  }

  return wrapper;
}

function scroll() {
  ///прокрутка вниз
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}

function getTime() {
  /// определяем время
  let data = new Date();
  let hour = data.getHours();
  let minutes = data.getMinutes();
  return hour + ":" + minutes;
}

function botMessage() {
  /// ответы бота
  let arr = [
    "Что-то еще требуется? Тогда я пошёл.",
    "Понимаю, так Вам и надо",
    "Был рад помочь",
    "Повторите",
    "Мне нечего Вам сказать",
    "Может быть дело в Вас?",
    "Зачем вы пишите сюда?",
    "Давайте закончим этот бессмысленный диалог",
    "Сам такой!",
    "Это Вы мне?",
    "Мне за это не платят",
    "Я на обед",
    "А Вы точно не можете сами разобраться?",
    "У нас есть более важные дела",
  ];
  let rand = Math.floor(Math.random() * arr.length);

  messages.innerHTML +=
    '<div class="message "><div class="message__time">' +
    getTime() +
    '</div><div class="message__text">' +
    arr[rand] +
    "</div></div>";
  scroll();
}

function botAngry() {
  //ответ задержки
  angry = debounce(botAngry);
  setTimeout(() => {
    if (!chatInput.value) {
      messages.innerHTML +=
        '<div class="message "><div class="message__time">' +
        getTime() +
        '</div><div class="message__text"> Ну что, будем молчать? </div></div>';
      scroll();
    }
  }, 10000);
}

chatWindow.forEach((e) => {
  //открытие чата
  e.addEventListener("click", function () {
    e.classList.add("chat-widget_active");
  });
});

document.addEventListener("click", (e) => {
  ///закрытие чата
  const click = e.composedPath().includes(chatWindow[0]);
  if (!click) {
    chatWindow[0].classList.remove("chat-widget_active");
  }
});

document.getElementById("chat-widget__input").addEventListener("keyup", (e) => {
  //отправка сообщений

  if (e.keyCode === 13) {
    let messageUser = chatInput.value;

    messages.innerHTML +=
      '<div class="message message_client"><div class="message__time">' +
      getTime() +
      '</div><div class="message__text">' +
      messageUser +
      "</div></div>";

    chatInput.value = "";

    wrapper = debounce(botMessage);
    setTimeout(() => wrapper(), 1000);
  }
  scroll();
});
// Создаем элемент видео
const videoEl = document.createElement("video");
videoEl.setAttribute("src", "media/convert1mb.mp4");

// Добавляем видео в контейнер
const containerEl = document.querySelector(".containerVideo");
containerEl.appendChild(videoEl);

// Создаем кнопки Play и Pause
const playEl = document.createElement("div");
const pauseEl = document.createElement("div");
playEl.classList.add("play");
pauseEl.classList.add("pause");

// Добавляем события для кнопок Play и Pause
playEl.addEventListener("click", function (e) {
  videoEl.play();
  console.log(videoEl.currentTime);
});
pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
  console.log(videoEl.currentTime);
});

// Создаем ползунок для перемотки
const rangeEl = document.createElement("input");
rangeEl.setAttribute("min", "0");
rangeEl.setAttribute("max", "100");
rangeEl.setAttribute("type", "range");
rangeEl.setAttribute("value", "0");

// Добавляем событие для перемотки
rangeEl.addEventListener("input", function (e) {
  videoEl.currentTime = (e.target.value / 100) * videoEl.duration;
});

// Обновляем ползунок по мере воспроизведения видео
videoEl.addEventListener("timeupdate", (e) => {
  rangeEl.setAttribute(
    "value",
    Math.round((videoEl.currentTime / videoEl.duration) * 100)
  );
});

// Создаем ползунок для регулировки громкости
const volumeEl = document.createElement("input");
volumeEl.setAttribute("type", "range");
volumeEl.setAttribute("min", "0");
volumeEl.setAttribute("max", "100");
volumeEl.setAttribute("value", "0");

// Устанавливаем громкость после загрузки видео
videoEl.addEventListener("loadeddata", (event) => {
  volumeEl.setAttribute("value", videoEl.volume * 100);
});

// Добавляем событие для регулировки громкости
volumeEl.addEventListener("input", function (e) {
  videoEl.volume = e.target.value / 100;
});

// Добавляем элементы управления в контейнер
containerEl.appendChild(rangeEl);
containerEl.appendChild(playEl);
containerEl.appendChild(pauseEl);
containerEl.appendChild(volumeEl);

// Форма для загрузки нового видео
const formEl = document.querySelector('form');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const videoFile = formData.get('video');
  
  if (videoFile) {
    const videoURL = URL.createObjectURL(videoFile);
    videoEl.setAttribute('src', videoURL);
    videoEl.load();
  }
});

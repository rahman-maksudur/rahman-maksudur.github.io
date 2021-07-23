const modeElements = document.querySelectorAll('.mode');
const barElement = document.querySelector('.fa-bars');
const rightUlLis = document.querySelectorAll('.right ul li');

let dark = false;
let isNight = (new Date()).getHours() > 18 || (new Date()).getHours() < 6;

function setDark() {
  document.querySelector('body').classList.add('dark');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#121212');
  modeElements[0].innerHTML = 'Light <i class="fas fa-adjust"></i>';
  modeElements[1].innerHTML = 'Light <i class="fas fa-adjust"></i>';
  dark = true;
}

function setLight() {
  document.querySelector('body').classList.remove('dark');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fff');
  modeElements[0].innerHTML = 'Dark <i class="fas fa-adjust"></i>';
  modeElements[1].innerHTML = 'Dark <i class="fas fa-adjust"></i>';
  dark = false;
}

function onModeClick() {
  if(dark)
    setLight();
  else
    setDark();
}

function openRight() {
  document.querySelector('.right').style['display'] = 'flex';
  setTimeout(() => document.querySelector('.right').style['width'] = '100%', 1);
}

function closeRight() {
  document.querySelector('.right').style['width'] = '0';
  setTimeout(() => document.querySelector('.right').style['display'] = 'none', 200);
}

if(isNight)
  setDark();

modeElements[0].addEventListener('click', onModeClick);
modeElements[1].addEventListener('click', onModeClick);
barElement.addEventListener('click', openRight);

rightUlLis.forEach(rightUlLi => rightUlLi.addEventListener('click', closeRight));
//backElement.addEventListener('click', closeRight);

const list = new List({ elementId: 'projects', items: projects });
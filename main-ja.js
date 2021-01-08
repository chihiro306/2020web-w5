const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '外は華氏40度だった。 :insertx:は出かけた。 :inserty:に行って、:insertz:。 Bobも一緒に遊んだ。 体重150ポンドの:insertx:はもっと太った。　';
let insertX = ['ちびまる子','ドラえもん','ピカチュウ'];
let insertY = ['ポケモンセンター','のび太くんの家','たまちゃんの家'];
let insertZ = ['エネルギーチャージした','お菓子を食べた','どこでもドアで遊んだ'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("ja").checked) {
    const weight = Math.round(9 / 20 * 150) + 'キロ';
    const temperature =  Math.round((40-32) * 10 / 18)+ '度';
    newStory = newStory.replace('華氏40度','摂氏'+temperature);
    newStory = newStory.replace('150ポンド',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

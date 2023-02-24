const but_1 = document.querySelector('#st');
const but_2 = document.querySelector('#nd');
const but_3 = document.querySelector('#rd');
const winningScoreSelect = document.querySelector('#winninng_score');
const w1 = document.querySelector('#f');
const w2 = document.querySelector('#s');
let score_1 = 0;
let score_2 = 0;
let winning = 5;
let win = false;
//Rainbow
function hello(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}
//calling promise Violet–Indigo–Blue–Green–Yellow–Orange–Ref
// while (1) {
  //async functions
  async function colors(){
    while(1){
      await hello('#4cc9f0', 1000);
      await hello('#4895ef', 1000);
      await hello('#4361ee', 1000);
      await hello('#3f37c9', 1000);
      await hello('#3a0ca3', 1000);
      await hello('#480ca8', 1000);
      await hello('#560bad', 1000);
      await hello('#7209b7', 1000);
      await hello('#b5179e', 1000);
      await hello('#f72585', 1000);
    }
  }
  async function rainbow(){
    await colors();
  }
  rainbow();
  // hello('red', 1000)
  // .then(() => {
  //   return hello('Orange', 1000)
  // })
  // .then(() => {
  //   return hello('Yellow', 1000)
  // })
  // .then(() => {
  //   return hello('Green', 1000)
  // })
  // .then(() => {
  //   return hello('Blue', 1000)
  // })
  // .then(() => {
  //   return hello('Indigo', 1000)
  // }).then(() => {
  //   return hello('Voilet', 1000)
  // })
  // .catch(() => {
  //   console.log('Error!!');
  // })
// }
but_1.addEventListener('click', function () {
  if (win != true) {
    if (score_1 != winning) {
      score_1 = score_1 + 1;
      w1.textContent = `${score_1}`;
      let temp = judge(score_1, score_2);
      if (temp == winning) {
        Winner(but_1);
      }
    }
  }
})
but_2.addEventListener('click', function () {
  if (win != true) {
    if (score_2 != winning) {
      score_2 = score_2 + 1;
      w2.textContent = `${score_2}`;
      let temp = judge(score_1, score_2);
      if (temp == winning) {
        Winner(but_2);
      }
    }
  }
}
)
but_3.addEventListener('click', function () {
  score_1 = 0;
  score_2 = 0;
  reset();
  w1.textContent = `${score_1}`;
  w2.textContent = `${score_2}`;
})
winningScoreSelect.addEventListener('change', function () {
  winning = parseInt(this.value);
})
function reset() {
  win = false;
  but_1.style.background = 'none';
  but_2.style.background = 'none';
}
function Winner(but) {
  but.style.background = 'green';
  win = true;
}
function judge(p1, p2) {
  if (p1 == winning && p2 < winning)
    return p1;
  else if (p2 == winning && p1 < winning)
    return p2;
}
document.querySelector('.card').classList.add('container')


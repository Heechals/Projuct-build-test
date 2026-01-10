const body=document.body;
const themeBtn=document.getElementById('themeBtn');

function toggleTheme(){
    body.classList.toggle('dark');
    themeBtn.textContent=body.classList.contains('dark')?'☀️':'🌙';
    localStorage.setItem('theme',body.classList.contains('dark')?'dark':'light');
}
if(localStorage.getItem('theme')==='dark')toggleTheme();

const messages=[
 "오늘은 결과보다 과정이 중요한 날입니다.",
 "욕심을 내려놓을수록 마음이 편해집니다.",
 "흐름에 맡겨도 충분히 괜찮습니다.",
 "작은 선택이 큰 안정을 만듭니다.",
 "지금 이 순간도 충분히 잘하고 있습니다."
];

function updateMessage(){
 document.getElementById('messageBox').textContent=
  messages[Math.floor(Math.random()*messages.length)];
}

function getColor(n){
 if(n<=10)return'yellow';
 if(n<=20)return'blue';
 if(n<=30)return'red';
 if(n<=40)return'gray';
 return'green';
}

function generateSet(){
 const s=new Set();
 while(s.size<6)s.add(Math.floor(Math.random()*45)+1);
 return[...s].sort((a,b)=>a-b);
}

function generate(){
 updateMessage();
 const c=document.getElementById('lottoSets');
 c.innerHTML='';
 for(let i=1;i<=5;i++){
  const box=document.createElement('div');
  box.className='set';
  box.innerHTML=`<div class="set-title">SET ${i}</div>`;
  const nums=document.createElement('div');
  nums.className='numbers';
  generateSet().forEach(n=>{
   const b=document.createElement('div');
   b.className=`ball ${getColor(n)}`;
   b.textContent=n;
   nums.appendChild(b);
  });
  box.appendChild(nums);
  c.appendChild(box);
 }
}

function saveImage(){
 html2canvas(document.getElementById('captureArea')).then(canvas=>{
  const a=document.createElement('a');
  a.download='lotto.png';
  a.href=canvas.toDataURL();
  a.click();
 });
}

const meals = [
    { name: '비빔밥', image: 'https://img.freepik.com/free-photo/fresh-bibimbap-in-a-bowl-generated-by-ai_188544-48227.jpg' },
    { name: '불고기', image: 'https://img.freepik.com/free-photo/delicious-grilled-meat-with-vegetables-and-sauce-generated-by-ai_188544-48205.jpg' },
    { name: '김치찌개', image: 'https://img.freepik.com/free-photo/kimchi-jjigae-in-a-pot-with-ingredients-generated-by-ai_188544-48231.jpg' },
    { name: '된장찌개', image: 'https://img.freepik.com/free-photo/doenjang-jjigae-in-a-bowl-with-vegetables-generated-by-ai_188544-48233.jpg' },
    { name: '짜장면', image: 'https://img.freepik.com/free-photo/jajangmyeon-in-a-bowl-with-pork-and-vegetables-generated-by-ai_188544-48229.jpg' }
];

function recommendMeal() {
    const mealResult = document.getElementById('mealResult');
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];

    mealResult.innerHTML = `
        <p>${randomMeal.name}</p>
        <img src="${randomMeal.image}" alt="${randomMeal.name}" style="width:100%;max-width:300px;border-radius:14px;">
    `;
}
const quiz = [{
  question: 'りょうすけの嫌いな食べ物は',
  answer: [
    'コーラ',
    '焼肉',
    'ケーキ',
    'アイス'],
  correct: 'コーラ'
},
{ question: 'りょうすけの出身はどこ',
  answer: [
    '町田',
    '宇都宮',
    '日高市',
    '古河'],
  correct: '古河'

},
{
question: 'りょうすけの趣味は',
  answer: [
    '水泳',
    'スキー',
    'シコシコ',
    'ダンス'],
  correct: 'シコシコ'

 
},
{
 question: 'りょうすけの初恋は誰か',
  answer: [
    'ももか',
    'みずき',
    'さき',
    'あやか'],
  correct: 'みずき'
 
},
{
  question: 'りょうすけが友達との待ち合わせに遅刻した理由は',
  answer: [
    '寝坊',
    '電車の遅延',
    '忘れてた',
    '自慰行為をしてた'],
  correct: '自慰行為をしてた'
}]

let quizIndex = 0;
const $button = document.getElementsByTagName('button'); 
let score = 0;


const setQuiz = () => {document.getElementById('js-question').textContent = quiz[quizIndex].question;
let buttonIndex = 0
while (
  buttonIndex < $button.length
  ){
  $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex]
  buttonIndex++;
  };
}

setQuiz();



  const clickhandler = (e) => {

  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');}

    quizIndex++;

    if (quizIndex < quiz.length){
      setQuiz();
    } else {
      window.alert('終了！あなたの正解数は' + score +' / ' +quiz.length+ 'です！');
    }
  };



let handlerIndex = 0
while (handlerIndex < $button.length)
{$button[handlerIndex].addEventListener('click',(e) => {
  clickhandler(e);});
  handlerIndex++;

}

// 상수(변할 수 없는 값)
const username = "세모네모";
console.log("🚀 ~ username:", username);

// 변수(변할 수 있는 값)
let usermbti = "ENTJ";
console.log("🚀 ~ usermbti:", usermbti);

usermbti = "ISTJ";
console.log("🚀 ~ usermbti:", usermbti);

// 상수는 변경 불가능
// username = "김진아";
// console.log("변경된 username", usermbti);

const num = 12;
const str ="텍스트";
const bool = true;
let empty; // null
const empty2 = null;

console.log("num", typeof num);
console.log("str", typeof str);
console.log("bool", typeof bool);
console.log("empty", typeof empty);
console.log("empty2", typeof empty2);

/**
 * null과 undefined의 차이점
 * null: 개발자가 의도를 가지고 값을 비움
 * undefined: 개발자가 의도와 상관없이 값이 업는 상태
 */

console.log("==================================")

// 함수

// 함수 정의/선function greeting() {
  // 실행할 로직들
  // console.log("반갑습니다!" + username + "님");

  // 백틱
  //console.log(`반갑습니다! ${username}님. 당신의 MBTI는 ${usermbti}시군요.`);
//}

//function greeting(); {}
//화살표 함수
const greeting = () => {
  console.log(`반갑습니다! ${username}님. 당신의 MBTI는 ${usermbti}시군요.`);
}

// 함수 호출/실행
greeting();

// 함수의 인자와 매개변수
const sum = (num1, num2) => {
  // parameter
  // 실행할 로직
  const result = num1  + num2;
  console.log("return 끝!!!");
  return result;
  
}

const double = (num) => {
  return num * 2
}

const add = sum(11,22); // argument
const doubleResult = double(add)
console.log("🚀 ~ doubleResult:", doubleResult)
console.log("🚀 ~ add:", add)

sum(11, 22); // argument
sum(58, 24);

// 미션: sayHello라는 함수 만들기
// - 사용자 이름을 받아사 "반갑습니다. OOO님"이라는 텍스트를 console탬에 출력하는 기능 만들기

const sayHello = (name1) => {
  console.log(`반갑습니다! ${name1}님`);
}

sayHello("김진아")

console.log("==================================")

//조건문
const score = 79;
if (score >= 60) {
  // 조건삭이 true인 경우에 실행할 코드
  console.log("합격");
} else {
  // 조건삭이 false인 경우에 실행할 코드
  console.log("블합격")
}
console.log("if문 종료")

let grade = ""

if(score >= 90) {
  grade = "A등급"
} else if(score >= 80) {
  grade = "B등급"
} else if(score >= 70) {
  grade = "C등급"
} else {
  grade = "D등급"
}
console.log(grade)


console.log("======퀴즈=====")

const type = 'vegan'
const orderSandwich = (type) => {
  if(type === 'vegan') {
    return '🥖 + 🥬 + 🍅 + 🥑 + 🥒';
  } else {
    return '🥖 + 🥬 + 🍅 + 🧀 + 🥓';
  }
}
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));


// 삼항 연산자
//return type === "vegan" ? '🥖 + 🥬 + 🍅 + 🥑 + 🥒' : '🥖 + 🥬 + 🍅 + 🧀 + 🥓' : 

//console.log("기본 샌드위치 주문: " + orderSandwich());
//console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
//onsole.log("비건 샌드위치 주문: " + orderSandwich('vegan'));


// 미션: age의 값이 18세 이상이면 adultType "성인"
// 미션: age의 값이 18세 미만이면 adultType "미성년자"
const age = 20;
const adultType = age >= 18 ? '성인' : '미성년자'
console.log("🚀 ~ adultType:", adultType)
console.log(adultType)

if (0) {
console.log("true입니다")
} else {
  console.log("false입니다")
}

const userInput = "text";
//if (userInput) {
//  alert("입력해 주셔서 감사합니다")
//} else {
//  alert("입력값을 작성해주세요")
//}


const dayOfWeek = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
console.log("🚀 ~ dayOfWeek:", dayOfWeek)

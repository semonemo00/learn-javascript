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
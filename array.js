// 객체: key-value기 한 쌍으로 구성된 정보들의 묶음
const person = {
  name: "김진아", isMale:false, mbti:"ENTJ", favoriteFoods: ["김밥", "잡채"]
}
console.log("🚀 ~ person:", person)

// "잡채"값 가지고 오기
console.log("두번째로 좋아하는 음식:", person.favoriteFoods[1])
console.log("name:", person["name"])
console.log("남성여부:", person.isMale)

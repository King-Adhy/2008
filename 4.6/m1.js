/**
 * Created by 刁秀智 on 2021/4/6.
 */
let name = "diaohaoyi"
let age = 19
let sex = "M"
//箭头函数
let hello = ()=>{
    console.log("Hello ES6")
}
let person = {
   name,age,sex,hello
}
//导出
export {person}
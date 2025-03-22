// let yearNow = document.getElementById('birthYear');
let btn = document.getElementById('submit');
// console.log(date);

function getBirthYear(event){
    event.preventDefault()
    let age = new Date().getFullYear();
    // document.getElementById('age').innerHTML = age;
    let yearNow = document.getElementById('birthYear');
    let birth = yearNow.value; 
    let year = new Date(birth).getFullYear();
    let calculateAge = age - year;   
    console.log(birth);
    console.log(year);
    console.log(age);
    console.log("age is :- "+calculateAge);
}
// console.log(yearNow.value)

btn.addEventListener('click', getBirthYear);
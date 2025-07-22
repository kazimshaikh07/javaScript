// making nav bar interactive
document.querySelector("#open-nav-menu").addEventListener('click',function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});
document.querySelector("#close-nav-menu").addEventListener('click',function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});
























// //creating my own function 
// function testAleart(){
//     alert("test 1");
//     alert("test 2");
// }
// console.log("hello ji");
// console.log(4+5);

// //  7. changing ID greeting using js(innerHTML)
// document
// document.getElementById("greeting").innerHTML="HELLO WORLD";

// //  8. More select method
// // selecting by class name
// document.getElementsByClassName("product-item")
// // selecting using tagname
// document.getElementsByTagName("weather")
// // query selector method
// document.querySelector("p#weather") //  to select p with only particular Id
// document.querySelector("p#weather").innerHTML="New Value";   //  since there is only one tag with weather name so we have power to change html throw JS


// 10. events
// document.querySelector("#open-nav-menu").addEventListener('click',function(){
//     alert("is working");
// });

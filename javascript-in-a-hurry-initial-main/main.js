// Menu Section
function menuHandler(){
    document.querySelector("#open-nav-menu").addEventListener('click',function(){
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    });
    document.querySelector("#close-nav-menu").addEventListener('click',function(){
        document.querySelector("header nav .wrapper").classList.remove("nav-open");
    });
}


//  convert temperature C° to F°
function celsiusToFahr(temperature){
    let Fahr = (temperature * 9/5) + 32;
    return Fahr;
}

// Greeting Section
function greetingHandler(){
    let greetingText;
    let currentHour = new Date().getHours();
    if(currentHour<12){
        greetingText = "Good Morning"
    }else if(currentHour <=21){
        greetingText = "Good Afternoon"
    }else{
        greetingText = "Good Night"
    }

    const weatherCondition ="Sunny";
    const userLocation ="Rajasthan";
    const temperature = 32.6982;

    let celsiusText = `the weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside `;
    let fahrText = `the weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside `;
    
    document.querySelector("#greeting").innerHTML=greetingText;
    document.querySelector("p#weather").innerHTML=celsiusText;
    // making temperature switch button interactive
    document.querySelector(".weather-group").addEventListener("click",function(e){
        if (e.target.id=="celsius"){
            // console.log(e.target.id)
            document.querySelector("p#weather").innerHTML=celsiusText;
        }
        else if(e.target.id=="fahr"){
            document.querySelector("p#weather").innerHTML=fahrText;
        }
    });
}


// Date and Time
function clockHandler(){
    setInterval(function(){
        let localTime = new Date();
        document.querySelector("span[data-time=hours]").textContent= localTime.getHours().toString().padStart(2,"0");
        document.querySelector("span[data-time=minutes]").textContent= localTime.getMinutes().toString().padStart(2,"0");
        document.querySelector("span[data-time=seconds]").textContent= localTime.getSeconds().toString().padStart(2,"0");
    }
    , 1000);
}


// Gallery section(hero image)
function galleryHandler(){
    
}


// main image(hero image) 
let mainImage = document.querySelector("#gallery > img ");
mainImage.src = galleryImages[0].src;
mainImage.alt = galleryImages[0].alt;

// adding thumbnail
let thumbnails = document.querySelector("#gallery .thumbnails")
{}
galleryImages.forEach(function(image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true :  false;
    index === 0 ? thumb.dataset.selected = true : thumb.dataset.selected = false;

    // creating thumbnail interactive
    thumb.addEventListener("click",function(e){
        let selectIndex = e.target.dataset.arrayIndex;
        let selectImage = galleryImages[selectIndex];
        mainImage.src = selectImage.src;
        mainImage.alt = selectImage.alt;
        thumbnails.querySelectorAll("img").forEach(function(img){
        img.dataset.selected=false;
    });
        e.target.dataset.selected=true;
    })
    
    thumbnails.appendChild(thumb)
});


// Page Load
menuHandler()
greetingHandler()
clockHandler()






// src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"


// for(let i in galleryImages){
//     console.log(galleryImages[i]);
// }


/* <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">
<img src="./assets/gallery/image2.jpg" alt="Thumbnail Image 2" data-array-index="1" data-selected="false">
<img src="./assets/gallery/image3.jpg" alt="Thumbnail Image 3" data-array-index="2" data-selected="false"></img> */














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

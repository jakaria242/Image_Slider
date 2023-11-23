



let img = document.querySelector("img")
let nextbtn = document.querySelector(".rightt")
let prevbtn = document.querySelector(".leftt")
let photos = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", ]

let count = 0


nextbtn.addEventListener("click",()=>{
      count++;
    if(count >= photos.length){
        count = 0 
     img.src = photos[count]
    }else{
         img.src = photos[count]
    }
})
prevbtn.addEventListener("click",()=>{
      count--;
    if(count < 0){
        count = photos.length-1;
     img.src = photos[count]
    }else{
         img.src = photos[count]
    }
})




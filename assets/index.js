function navbar(){
    let cuad = document.querySelector("#navchange");
    let nav = document.querySelector("nav");
    let gallery = document.querySelector("#gallery")

    if(cuad.getBoundingClientRect().top<=0){
        nav.classList.add("dark");
    }
    else{
        nav.classList.remove("dark");
    }
}

let imgchange = document.querySelector("#imgchange");

const items = ["images/OurGallery/1.jpg","images/OurGallery/2.jpg","images/OurGallery/3.jpg","images/OurGallery/4.jpg","images/OurGallery/5.jpg"];

let currentIndex = 0;

function showItem(index) {
    let newImg = new Image();
    newImg.src = items[index + 1]; // Preload the next image
    newImg.onload = function() {
        let tempDiv = document.createElement('div');
        tempDiv.style.backgroundImage = `url(${items[index]})`;
        tempDiv.style.position = 'absolute';
        tempDiv.style.top = '0';
        tempDiv.style.left = '0';
        tempDiv.style.width = '100%';
        tempDiv.style.height = '100%';
        tempDiv.style.opacity = '0';
        tempDiv.style.transition = 'opacity 1s';

        imgchange.appendChild(tempDiv);

        setTimeout(function() {
            tempDiv.style.opacity = '1';
            imgchange.style.backgroundImage = `url(${items[index]})`;
        }, 50); // Delay for smoother transition

        setTimeout(function() {
            imgchange.removeChild(tempDiv);
        }, 50); // Cleanup after transition
    };
}



function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}


document.addEventListener('DOMContentLoaded', () => {
    showItem(0);
});


window.addEventListener('scroll',navbar);

setInterval(nextSlide, 5000);

document.getElementById("mainform").addEventListener("submit",(event)=>{
    event.preventDefault();

    

    const username = document.getElementById("username").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("usermessage").value;

    

    if(!mail || !message){
        alert("Fill all the details.");
    }
    else{
        document.getElementById("mainform").reset();
    }
    
})

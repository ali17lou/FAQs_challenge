document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".q"); 

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            let paragraph = document.querySelectorAll(".r")[index]; 

            if (paragraph.style.display === "none" || paragraph.style.display === "") {
                paragraph.style.display = "block"; 
                this.querySelector("button img").src = "./assets/images/icon-minus.svg"; 
            } else {
                paragraph.style.display = "none";
                this.querySelector("button img").src = "./assets/images/icon-plus.svg"; 
            }
        });
    });
});

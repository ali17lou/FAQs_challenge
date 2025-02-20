document.querySelectorAll(".q").forEach(q => {
    q.addEventListener("click", function() {
        let answer = this.nextElementSibling; 
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

var skillbars = document.querySelectorAll(".skill-bar");

for (let skillbar of skillbars) {
    skillbar.setAttribute("visible", false);
    
}

window.addEventListener("scroll", checkScroll);

function checkScroll() {
    for (var skillbar of skillbars) {
        if (
            skillbar.getAttribute("visible") == "false" &&
            skillbar.getBoundingClientRect().top < window.innerHeight
        ) {
            skillbar.setAttribute("visible", true);
            barFill(skillbar);
        } else if (skillbar.getBoundingClientRect().top > window.innerHeight) {
            skillbar.setAttribute("visible", false);
            skillbar.style.width = 0+"%";
        }
    }
}

function barFill(skillbar) {
    let i = 0;
    
    let fillInterval = setInterval(() => {
        if(skillbar.style.width == skillbar.getAttribute('data-bar-width')){
            clearInterval(fillInterval);
            return;
        }
        i++;
        skillbar.style.width = i + "%";
       
    }, 5);
}

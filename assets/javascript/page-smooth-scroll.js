var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
for(var i = 0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        var interval = setInterval(() => {
            var targetCoordinateTop = targetSection.getBoundingClientRect().top;
            if(targetCoordinateTop <= 0){
                clearInterval(interval);
            }
            window.scrollBy(0,20);            
        }, 10);
    })
}
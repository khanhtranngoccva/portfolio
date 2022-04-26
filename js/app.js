(function() {

    const TEXT_TO_COLOR = {
        HTML: "#ff8f8f",
        CSS: "#51eaff",
        JavaScript: "#ffe86f",
        "REST APIs": "#51FFA2"
    }

    for (let element of document.querySelectorAll(".projectTags li")) {
        let elementColor = TEXT_TO_COLOR[element.textContent];
        elementColor !== undefined && (element.style.backgroundColor = elementColor);
    }
    
    function startClassAnimation(element, animClass) {
        element.classList.remove(animClass);
        setTimeout(()=>element.classList.add(animClass), 1);
    }
    
    
    document.querySelector(".mainIcon").addEventListener("click", function(e) {
        startClassAnimation(this, "nudge");
    });
})();
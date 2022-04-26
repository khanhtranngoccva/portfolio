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

})();
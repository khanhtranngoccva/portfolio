(function () {
    let index = 0;
    let textEntries = ["hey, click me!",
        "do it again!",
        "~clears throat~",
        "Hi! I'm Khanh!",
        "I'm a software engineer from Vietnam.",
        "Been in tech for half a year.",
        "Building awesome websites and software with #100devs.",
        "Nice to meet you, and let's go get together!",
        "You can follow me on Twitter where I post lots of uplifting stuff.",
        "I forgot! Big shoutout to Savio @saviomartin7 for this textbox...",
        "...and Brian @BrianSchneeDev for the portfolio gradient!",
        "Also to all my awesome friends...",
        "Thank you so much for inspiring me to do what I do...",
        "... and helped me keep going through the trough of sorrow!",
        "Have a nice day, and wish you all the best!",
        "Don't forget to take care of yourself too! 😇",
        "~silence~",
        "~more silence~",
        "~even more silence~",
        "it's an awesome day outside, so just start doing something amazing!",
        "don't you have anything better to do?"
    ];

    const bubbleTextElement = document.querySelector(".mainTextBox");

    function nextTextForBubble() {
        textEntries[index] && (bubbleTextElement.innerText = textEntries[index]);
        index++;
    }

    nextTextForBubble();

    Array.from(document.querySelectorAll(".mainIconContainer *")).forEach(i=>i.addEventListener("click", function (e) {
        nextTextForBubble();
    }));
}());
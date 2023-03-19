function onContactClick(e) {
    e.preventDefault();
    prompt("I haven't had my coffee yet, leave a number and I'll call you when I'm prepared for human interaction:");
}

document.querySelector("#contactLink").addEventListener("click", onContactClick);
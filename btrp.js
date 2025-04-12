const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=> {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--vitrix", x + "px");
    btnEl.style.setProperty("--vitriy", y + "px")
    console.log(event.pageX);
    console.log(event.pageY);
} )
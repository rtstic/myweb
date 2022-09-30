function splitText(){
    const headTag = document.getElementById('letitbe');
    const textElement=headTag.textContent;
    const splitElement=textElement.split("");
    console.log(splitElement.length);
    headTag.textContent='';
    for (let i = 0; i < splitElement.length; i++) {
        headTag.innerHTML += "<span class='textspan'>"+splitElement[i]+"</span>";
    }
    let char=0;
    let timer = setInterval(animateSpan,50)
    function animateSpan(){
        const allSpans = headTag.querySelectorAll('span')[char];
        allSpans.classList.add('animate')
        console.log(allSpans);
        char++;
        if (char === splitElement.length){
            spanComplete();
            return;
        }
    }
    function spanComplete(){
        clearInterval(timer)
        timer=null;
    }
    return;
}
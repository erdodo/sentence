export function dragtoscrool(el, vertical) {
    let target;
    if (typeof el === 'string')
        target = document.querySelector(el);
    else
        target = el;
    if (!target)
        return;
    target.style.cursor = 'grab';
    const slider = target;
    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        if (vertical) {
            startY = e.pageY - slider.offsetTop;
            scrollTop = slider.scrollTop;
        }
        else {
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown)
            return;
        e.preventDefault();
        if (vertical) {
            const y = e.pageY - slider.offsetTop;
            const walk = (y - startY) * 2; //scroll-fast
            slider.scrollTop = scrollTop - walk;
        }
        else {
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        }
    });
}

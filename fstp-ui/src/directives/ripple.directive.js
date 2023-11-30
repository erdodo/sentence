import { Directive, directive } from 'lit/directive.js';
class RippleDirective extends Directive {
    render() {
        const target = this._$parent.element;
        target.addEventListener('click', this._onClick);
    }
    _onClick(event) {
        const button = event.currentTarget;
        button.classList.add('flw-ripple-button');
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('flw-ripple');
        const ripple = button.getElementsByClassName('flw-ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        button.appendChild(circle);
        setTimeout(() => {
            button.classList.remove('flw-ripple-button');
        }, 1000);
    }
}
export const ripple = directive(RippleDirective);

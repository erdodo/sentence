import { fPopper } from 'fstp-ui/src/functions';
export function tooltip(params) {
    const { el, message, placement } = params;
    let target;
    if (typeof el === 'string') {
        target = document.querySelector(el);
    }
    else {
        target = el;
    }
    if (!target)
        return;
    let popper;
    let content;
    target.addEventListener('mouseenter', () => {
        content = document.createElement('div');
        content.innerHTML = message.toString();
        content.classList.add('flw-tooltip');
        document.body.append(content);
        popper = fPopper({
            trigger: target,
            menu: content,
            options: {
                placement: placement ?? 'bottom-start',
                showArrow: true,
                showEvent: [],
                hideEvent: [],
                isDark: true,
                boundary: true,
            },
        });
        popper.show();
    });
    target.addEventListener('mouseleave', () => {
        popper && popper.hide();
        content.remove();
        removeAllTooltip(target);
    });
    target.addEventListener('click', () => {
        popper.hide();
        content.remove();
        removeAllTooltip(target);
    });
}
function removeAllTooltip(target) {
    const allTooltip = document.querySelectorAll('.flw-tooltip');
    allTooltip.forEach((tooltip) => {
        tooltip.remove();
        tooltip.removeEventListener('mouseenter', () => void {});
        tooltip.removeEventListener('mouseleave', () => void {});
        target.removeEventListener('mouseenter', () => void {});
        target.removeEventListener('mouseleave', () => void {});
        target.removeEventListener('click', () => void {});
    });
}

export function loading({ el, state, option }) {
    const target = typeof el === 'string'
        ? document.querySelector(el)
        : el;
    if (!target)
        return;
    if (target.getAttribute('data-loading') === state.toString())
        return;
    target.setAttribute('data-loading', state.toString());
    if (!state) {
        if (target.querySelector('.loading')) {
            target?.removeChild(target.querySelector('.loading'));
        }
        target.style.position = '';
        return;
    }
    const loadingEl = document.createElement('div');
    loadingEl.style.position = 'absolute';
    loadingEl.style.top = '0';
    loadingEl.style.left = '0';
    loadingEl.style.right = '0';
    loadingEl.style.bottom = '0';
    loadingEl.style.zIndex = option?.zIndex ? option.zIndex : '700';
    loadingEl.style.height = '100%';
    loadingEl.style.width = '100%';
    loadingEl.style.display = 'flex';
    loadingEl.style.justifyContent = 'center';
    loadingEl.style.alignItems = 'center';
    loadingEl.style.backgroundColor = option?.backgroundColor
        ? option.backgroundColor
        : 'var(--neutral-300)';
    loadingEl.style.opacity = option?.opacity ? option.opacity : '0.8';
    loadingEl.classList.add('loading');
    if (target.className.search('rounded') > -1) {
        loadingEl.classList.add(`flw-rounded-${target.className.split('flw-rounded-')[1].split(' ')[0]}`);
    }
    option?.className && loadingEl.classList.add(option.className);
    loadingEl.innerHTML = '<atom-loader></atom-loader>';
    target.style.position = 'relative';
    target.appendChild(loadingEl);
}

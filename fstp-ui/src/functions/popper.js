import { createPopper } from '@popperjs/core';
export function fPopper(params) {
    const { trigger, menu, options } = params;
    const localOptions = {
        /**
         * arrow according to menu position
         */
        showArrow: options?.showArrow ?? false,
        /**
         * menu position
         */
        placement: options?.placement ?? 'bottom',
        /**
         * menu dark mode
         */
        isDark: options?.isDark ?? false,
        /**
         * show event for menu when click or mouseenter
         */
        showEvent: options?.showEvent ?? [IPopperEventsEnum.CLICK],
        /**
         * hide event for menu when click or mouseleave
         */
        hideEvent: options?.hideEvent ?? [IPopperEventsEnum.OUTSIDE_CLICK],
        /**
         * menu width
         */
        width: options?.width ?? 'auto',
        /**
         * menu offset
         */
        offset: options?.offset ?? [0, 10],
    };
    localOptions.showEvent = options?.showEvent ?? [IPopperEventsEnum.CLICK];
    localOptions.hideEvent = options?.hideEvent ?? [
        IPopperEventsEnum.OUTSIDE_CLICK,
    ];
    /**
     * Variable created to wait for opening in the click event
     */
    let wait = false;
    const { target, content } = setContentConfig(trigger, menu, localOptions);
    const popperInstance = createPopper(target, content, {
        placement: localOptions.placement,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: localOptions.offset,
                },
            },
            {
                name: 'preventOverflow',
                enabled: true,
                options: {
                    boundary: window.document.body,
                    padding: 0,
                    offset: [0, 10],
                },
            },
        ],
        strategy: 'fixed',
    });
    hidePopper(content, popperInstance);
    localOptions.showEvent.forEach((event) => {
        if (event != IPopperEventsEnum.OUTSIDE_CLICK) {
            target.addEventListener(event, () => {
                if (document.body.contains(content))
                    return;
                wait = true;
                showPopper(content, popperInstance);
                target.dispatchEvent(new CustomEvent('popper', {
                    bubbles: true,
                    composed: true,
                    detail: document.body.contains(content),
                }));
                setTimeout(() => {
                    wait = false;
                }, 200);
            });
        }
    });
    localOptions.hideEvent.forEach((event) => {
        if (event == IPopperEventsEnum.OUTSIDE_CLICK) {
            document.addEventListener('click', (e) => {
                const path = e.composedPath();
                if (path.includes(target) || path.includes(content))
                    return;
                if (!document.body.contains(content))
                    return;
                hidePopper(content, popperInstance);
                target.dispatchEvent(new CustomEvent('popper', {
                    bubbles: true,
                    composed: true,
                    detail: document.body.contains(content),
                }));
            });
        }
        else {
            target.addEventListener(event, () => {
                if (!document.body.contains(content))
                    return;
                if (wait)
                    return;
                hidePopper(content, popperInstance);
                target.dispatchEvent(new CustomEvent('popper', {
                    bubbles: true,
                    composed: true,
                    detail: document.body.contains(content),
                }));
            });
        }
    });
    /**
     * remove from dom when window changes.
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window?.navigation &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
        navigation.addEventListener('navigate', () => {
            if (!document.body.contains(content))
                return;
            hidePopper(content, popperInstance);
            target.dispatchEvent(new CustomEvent('popper', {
                bubbles: true,
                composed: true,
                detail: document.body.contains(content),
            }));
        });
    return {
        target: target,
        content: content,
        hide: () => {
            hidePopper(content, popperInstance);
        },
        show: () => {
            showPopper(content, popperInstance);
        },
        popper: popperInstance,
    };
}
function hidePopper(content, popper) {
    content && content.remove();
    popper.update();
}
function showPopper(content, popper) {
    document.body.append(content);
    content.style.display = '';
    popper.update();
}
function setContentConfig(target, menu, localOptions) {
    const content = menu;
    target.classList.add('flw-popper-target');
    content && content.classList.add('flw-popper');
    localOptions.isDark && content.classList.add('flw-popper--dark');
    content &&
        content.setAttribute('data-popper-placement', localOptions.placement ?? 'bottom');
    content &&
        (content.style.width =
            localOptions.width == '0px' ? '300px' : localOptions.width);
    if (localOptions.showArrow) {
        const arrow = document.createElement('div');
        arrow.classList.add('flw-popper-arrow');
        content && content.append(arrow);
    }
    document.body.append(content);
    return {
        target: target,
        content: content,
    };
}
export var IPopperEventsEnum;
(function (IPopperEventsEnum) {
    IPopperEventsEnum["CLICK"] = "click";
    IPopperEventsEnum["OUTSIDE_CLICK"] = "outsideClick";
    IPopperEventsEnum["MOUSE_ENTER"] = "mouseenter";
    IPopperEventsEnum["MOUSE_LEAVE"] = "mouseleave";
    IPopperEventsEnum["FOCUS"] = "focus";
})(IPopperEventsEnum || (IPopperEventsEnum = {}));

import { Instance } from '@popperjs/core';
import { Placement } from '@popperjs/core';
export declare function fPopper(params: IPopperParams): IPopper;
export interface IPopperParams {
    trigger: HTMLElement;
    menu: HTMLElement;
    options?: IPopperOptions;
}
export interface IPopper {
    target: HTMLElement;
    content: HTMLElement;
    hide: () => void;
    show: () => void;
    popper: Instance;
}
export interface IPopperOptions {
    showArrow?: boolean;
    placement?: Placement;
    showEvent?: IPopperEventsEnum[];
    hideEvent?: IPopperEventsEnum[];
    width?: string;
    isDark?: boolean;
    offset?: [number, number];
    boundary?: boolean;
}
export declare enum IPopperEventsEnum {
    CLICK = "click",
    OUTSIDE_CLICK = "outsideClick",
    MOUSE_ENTER = "mouseenter",
    MOUSE_LEAVE = "mouseleave",
    FOCUS = "focus"
}

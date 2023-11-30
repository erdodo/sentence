import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { Modifier } from '@popperjs/core/lib/types';
export interface AtomTooltipProps {
    fShowEvents?: AtomTooltipEventsEnum[];
    fHideEvents?: AtomTooltipEventsEnum[];
    fPlacement?: AtomTooltipPlacement;
    fShow?: boolean;
    closeTrigger?: number;
    openTrigger?: number;
    fOpen?: EventDispatcher<LitElement>;
    fClose?: EventDispatcher<LitElement>;
}
export interface AtomTooltipPopperOptions {
    showEvents: AtomTooltipEventsEnum[];
    hideEvents: AtomTooltipEventsEnum[];
    placement?: AtomTooltipPlacement;
    modifiers?: Partial<Modifier<any, any>>[];
    strategy?: 'fixed';
}
export declare enum AtomTooltipPlacement {
    TOP_START = "top-start",
    TOP = "top",
    TOP_END = "top-end",
    RIGHT_START = "right-start",
    RIGHT = "right",
    RIGHT_END = "right-end",
    BOTTOM_START = "bottom-start",
    BOTTOM = "bottom",
    BOTTOM_END = "bottom-end",
    LEFT_START = "left-start",
    LEFT = "left",
    LEFT_END = "left-end"
}
export declare enum AtomTooltipEventsEnum {
    CLICK = "click",
    FOCUS = "focus",
    BLUR = "blur",
    MOUSE_ENTER = "mouseenter",
    MOUSE_LEAVE = "mouseleave"
}

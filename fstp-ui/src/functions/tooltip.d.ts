import { Placement } from '@popperjs/core';
export declare function tooltip(params: ITooltipParams): void;
export interface ITooltipParams {
    el: HTMLElement | string;
    message: string;
    placement?: Placement;
}

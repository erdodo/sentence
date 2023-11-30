import { Directive } from 'lit/directive.js';
import { Placement } from '@popperjs/core';
declare class TooltipDirective extends Directive {
    private _$parent;
    render(message: string | HTMLElement, placement?: Placement): void;
}
export declare const tooltip: (message: string | HTMLElement, placement?: Placement | undefined) => import("lit-html/directive.js").DirectiveResult<typeof TooltipDirective>;
export {};

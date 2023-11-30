import { Directive } from 'lit/directive.js';
declare class RippleDirective extends Directive {
    private _$parent;
    render(): void;
    _onClick(event: MouseEvent): void;
}
export declare const ripple: () => import("lit-html/directive.js").DirectiveResult<typeof RippleDirective>;
export {};

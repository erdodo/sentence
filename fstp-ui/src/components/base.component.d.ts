import { LitElement, html } from 'lit-element';
import { customElement, property, state, query } from 'lit/decorators.js';
export default class BaseComponent extends LitElement {
    static styles: import("lit-element").CSSResult;
    static event: (customName?: string) => (protoOrDescriptor: any, name: string) => any;
    fClass: string;
    fId: string;
    constructor();
    inputElement: HTMLElement;
    isInput: (name: string) => void;
    inputValueChange: (value: string) => void;
}
export { customElement, property, state, html, query };
export interface EventOptions {
    bubbles?: boolean;
    cancelable?: boolean;
    composed?: boolean;
}
export interface EventDispatcher<T> {
    (value: T, options?: EventOptions): CustomEvent<T>;
}
export declare function event(customName?: string): (protoOrDescriptor: any, name: string) => any;

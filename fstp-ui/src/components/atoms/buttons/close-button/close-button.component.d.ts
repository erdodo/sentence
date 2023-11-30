import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { LitElement } from 'lit-element';
import { AtomCloseButtonColorEnum, AtomCloseButtonSizeEnum } from 'fstp-ui/src/models/atoms';
export declare class AtomCloseButtonComponent extends BaseComponent {
    fSize?: AtomCloseButtonSizeEnum;
    fColor?: AtomCloseButtonColorEnum;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
    private getIconSize;
}
export declare const CloseButton: import("@lit/react").ReactWebComponent<AtomCloseButtonComponent, {
    fClick: string;
}>;

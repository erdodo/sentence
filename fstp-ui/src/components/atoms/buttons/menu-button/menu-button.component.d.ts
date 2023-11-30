import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomIconsEnum, AtomMenuButtonTypeEnum } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import { LitElement } from 'lit-element';
export declare class AtomMenuButtonComponent extends BaseComponent {
    fDisabled: boolean;
    fTooltip: string;
    fCurrent: boolean;
    fHasNotification: boolean;
    fType: AtomMenuButtonTypeEnum;
    fIcon: AtomIconsEnum;
    fClick?: EventDispatcher<LitElement>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    protected createRenderRoot(): this;
}
export declare const MenuButton: import("@lit/react").ReactWebComponent<AtomMenuButtonComponent, {
    fClick: string;
}>;

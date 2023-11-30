import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class AtomWidgetMoreButtonComponent extends BaseComponent {
    fDisabled: boolean;
    fFirst: boolean;
    fLast: boolean;
    fIcon: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}
export declare const WidgetButton: import("@lit/react").ReactWebComponent<AtomWidgetMoreButtonComponent, {
    fClick: string;
}>;

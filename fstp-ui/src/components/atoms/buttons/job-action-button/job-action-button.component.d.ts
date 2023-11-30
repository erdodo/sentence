import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomJobActionButtonSizeEnum, AtomJobActionButtonStatusEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class AtomJobActionButtonComponent extends BaseComponent {
    fStatus: AtomJobActionButtonStatusEnum;
    fSize: AtomJobActionButtonSizeEnum;
    fDisabled: boolean;
    fCurrent: boolean;
    fTooltip: string;
    fIcon: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}
export declare const ActionButton: import("@lit/react").ReactWebComponent<AtomJobActionButtonComponent, {
    fClick: string;
}>;

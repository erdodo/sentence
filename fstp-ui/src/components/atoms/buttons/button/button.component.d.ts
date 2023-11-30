import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomButtonLinkTargetTypeEnum, AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomButtonTypeEnum, AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
import { LitElement } from 'lit-element';
export declare class AtomButtonComponent extends BaseComponent {
    fStatus?: AtomButtonStatusEnum;
    fHasLabel: boolean;
    fIsDisabled: boolean;
    fHasIcon: boolean;
    fLabel: string;
    fShowType: AtomButtonShowTypeEnum;
    fSize: AtomButtonSizeEnum;
    fType: AtomButtonTypeEnum;
    fLink?: string;
    fLinkTarget: AtomButtonLinkTargetTypeEnum;
    fIcon?: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    iconSize: AtomIconSizeEnum;
    fClick?: EventDispatcher<LitElement>;
    protected updated(): void;
    protected render(): TemplateResult;
    protected createRenderRoot(): this;
}
export declare const Button: import("@lit/react").ReactWebComponent<AtomButtonComponent, {
    fClick: string;
}>;

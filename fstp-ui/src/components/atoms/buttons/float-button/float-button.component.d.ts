import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomFloatButtonLocationEnum, AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class AtomFloatButtonComponent extends BaseComponent {
    fStatus?: AtomButtonStatusEnum;
    fHasLabel: boolean;
    fIsDisabled: boolean;
    fHasIcon: boolean;
    fLabel: string;
    fShowType: AtomButtonShowTypeEnum;
    fSize: AtomButtonSizeEnum;
    fIcon?: AtomIconsEnum;
    fLocation: AtomFloatButtonLocationEnum;
    fIconType: AtomIconsTypeEnum;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}

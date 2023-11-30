import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomButtonTypeEnum, AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
export interface IAtomFloatButtonProps {
    fType: AtomButtonTypeEnum;
    fId?: string;
    fClass?: string;
    fIsDisabled?: boolean;
    fStatus: AtomButtonStatusEnum;
    fSize: AtomButtonSizeEnum;
    fShowType: AtomButtonShowTypeEnum;
    fHasIcon: boolean;
    fLabel: string;
    fHasLabel: boolean;
    fIcon: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    fLocation: AtomFloatButtonLocationEnum;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum AtomFloatButtonLocationEnum {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}

import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
export interface IAtomJobActionButtonProps<fData = any> {
    fStatus?: AtomJobActionButtonStatusEnum;
    fSize?: AtomJobActionButtonSizeEnum;
    fDisabled?: boolean;
    fIcon?: AtomIconsEnum;
    fHasIcon?: boolean;
    fIconType?: AtomIconsTypeEnum;
    fKey?: number;
    fValue?: string;
    fData?: fData;
    fTooltip?: string;
    fId?: string;
    fClass?: string;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum AtomJobActionButtonStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INFO = "info",
    SUCCESS = "success",
    DANGER = "danger",
    NEUTRAL = "neutral"
}
export declare enum AtomJobActionButtonSizeEnum {
    DEFAULT = "default",
    LARGE = "large"
}

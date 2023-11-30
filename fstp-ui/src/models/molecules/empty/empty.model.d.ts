import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export interface MoleculeEmptyProps {
    fHasButton?: boolean;
    fTitle?: string;
    fDescription?: string;
    fIcon?: AtomIconsEnum;
    fStatus?: MoleculeStatusEnum;
    fButtonText?: string;
    fButtonIsShow?: boolean;
    fButtonStatus?: AtomButtonStatusEnum;
    fButtonSize?: AtomButtonSizeEnum;
    fButtonShowType?: AtomButtonShowTypeEnum;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum MoleculeStatusEnum {
    SUCCESS = "success",
    NEUTRAL = "neutral",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info",
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
export interface MoleculeModalProps {
    fPosition?: MoleculeModalPositionEnum;
    fIsOpen?: boolean;
    fIsCloseOnOutsideClick?: boolean;
    fType?: MoleculeModalTypeEnum;
    fHasHeader?: boolean;
    fHasTitle?: boolean;
    fHasDescription?: boolean;
    fHasFooter?: boolean;
    fHasIcon?: boolean;
    fHasCloseButton?: boolean;
    fTitle?: string;
    fDescription?: string;
    fIcon?: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
    fSize?: MoleculeModalSizeEnum;
    fStatus?: MoleculeModalStatusEnum;
    fOpened?: EventDispatcher<LitElement>;
    fClosed?: EventDispatcher<LitElement>;
}
export declare enum MoleculeModalPositionEnum {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right"
}
export declare enum MoleculeModalSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare enum MoleculeModalTypeEnum {
    DEFAULT = "default",
    FULL_SCREEN = "full-screen",
    SIDELINE = "sideline"
}
export declare enum MoleculeModalStatusEnum {
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "info",
    PRIMARY = "primary",
    NEUTRAL = "neutral"
}

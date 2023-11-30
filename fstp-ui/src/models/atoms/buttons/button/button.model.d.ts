import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
export interface AtomButtonProps {
    fType: AtomButtonTypeEnum;
    fLink?: string;
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
    fLinkTarget?: AtomButtonLinkTargetTypeEnum;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum AtomButtonStatusEnum {
    PRIMARY = "flw-button--primary",
    SECONDARY = "flw-button--secondary",
    SUCCESS = "flw-button--success",
    DANGER = "flw-button--danger",
    NEUTRAL = "flw-button--neutral"
}
export declare enum AtomButtonSizeEnum {
    SMALL = "flw-button--small",
    MEDIUM = "flw-button--medium",
    LARGE = "flw-button--large"
}
export declare enum AtomButtonShowTypeEnum {
    FILL = "flw-button--fill",
    OUTLINE = "flw-button--outline",
    GHOST = "flw-button--ghost"
}
export declare enum AtomButtonTypeEnum {
    SUBMIT = "submit",
    RESET = "reset",
    BUTTON = "button"
}
export declare enum AtomButtonLinkTargetTypeEnum {
    BLANK = "_blank",
    SELF = "_self",
    PARENT = "_parent",
    top = "_top"
}

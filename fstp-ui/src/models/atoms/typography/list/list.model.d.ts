import { CommonBgColorsEnum, CommonTextColorsEnum } from 'fstp-ui/src/models/common';
export interface AtomListProps {
    fType: AtomListTypeEnum;
    fClass: string;
    fLiClass: string;
    fItems: string[];
    fSize: AtomListSizeEnum;
    fStatus: AtomListStatusEnum;
}
export interface AtomListIconBgStatus {
    icon: CommonTextColorsEnum;
    bg: CommonBgColorsEnum;
}
export declare enum AtomListTypeEnum {
    UL = "ul",
    OL = "ol"
}
export declare enum AtomListSizeEnum {
    SMALL = "flw-text-body-small",
    MEDIUM = "flw-text-body-medium",
    LARGE = "flw-text-body-large"
}
export declare enum AtomListStatusEnum {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    DANGER = "DANGER",
    WARNING = "WARNING"
}

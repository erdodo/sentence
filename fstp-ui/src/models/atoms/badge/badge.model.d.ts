export interface AtomBadgeProps {
    fText?: string;
    fStatus?: AtomBadgeStatusEnum;
    fHasDot?: boolean;
    fId?: string;
    fClass?: string;
}
export declare enum AtomBadgeStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info",
    NEUTRAL = "neutral"
}

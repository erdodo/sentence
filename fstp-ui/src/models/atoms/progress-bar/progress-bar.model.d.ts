export interface AtomProgressBarProps {
    fStatus?: AtomProgressBarStatusEnum;
    fValue?: number;
}
export declare enum AtomProgressBarStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    NEUTRAL = "neutral"
}

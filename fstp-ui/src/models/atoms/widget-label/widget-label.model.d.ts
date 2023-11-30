export interface IAtomWidgetLabelProps {
    fLabel: string;
    fPosition?: AtomWidgetLabelPositionEnum;
    fStatus?: AtomWidgetLabelStatusEnum;
}
export declare enum AtomWidgetLabelPositionEnum {
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left"
}
export declare enum AtomWidgetLabelStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    NEUTRAL = "neutral",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "info"
}

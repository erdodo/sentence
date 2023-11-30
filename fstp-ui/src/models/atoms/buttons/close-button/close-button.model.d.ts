import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomCloseButtonProps {
    fSize?: AtomCloseButtonSizeEnum;
    fColor?: AtomCloseButtonColorEnum;
    fClick?: EventDispatcher<LitElement>;
    fId?: string;
    fClass?: string;
}
export declare enum AtomCloseButtonSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare enum AtomCloseButtonColorEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    NEUTRAL_100 = "neutral-100",
    NEUTRAL_600 = "neutral-600"
}

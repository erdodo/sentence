import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface MoleculeToastProps {
    fTitle?: string;
    fDescription?: string;
    fHasTitle?: boolean;
    fHasCloseButton?: boolean;
    fPosition?: MoleculeToastPositionEnum;
    fType?: MoleculeToastTypeEnum;
    fAutoClose?: number;
    fTrigger?: number;
    fClass?: string;
    fId?: string;
    fOpened?: EventDispatcher<LitElement>;
    fClosed?: EventDispatcher<LitElement>;
}
export declare enum MoleculeToastPositionEnum {
    TOP_LEFT = "flw-toast--top-left",
    TOP_RIGHT = "flw-toast--top-right",
    BOTTOM_LEFT = "flw-toast--bottom-left",
    BOTTOM_RIGHT = "flw-toast--bottom-right"
}
export declare enum MoleculeToastTypeEnum {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    DANGER = "danger"
}
export declare enum MoleculeToastIconEnum {
    SUCCESS = "checkmark-circle-2",
    INFO = "alert-circle",
    WARNING = "alert-circle",
    DANGER = "close-circle"
}

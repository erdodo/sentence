import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { MoleculeDropdownPlacement } from 'fstp-ui/src/models/molecules';
import { IPopperEventsEnum } from 'fstp-ui/src/functions';
export interface MoleculeNotificationDropdownProps {
    fShowEvents: IPopperEventsEnum[];
    fHideEvents: IPopperEventsEnum[];
    fPlacement?: MoleculeDropdownPlacement;
    fHasNotification?: boolean;
    fItems?: MoleculeNotificationDropdownItemProps[];
    fHasHeader?: boolean;
    fCount?: number;
    fClick?: EventDispatcher<MoleculeNotificationDropdownItemProps>;
}
export interface MoleculeNotificationDropdownItemProps {
    fTitle: string;
    fTime: string;
    fStatus: MoleculeNotificationDropdownItemStatus;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum MoleculeNotificationDropdownItemStatus {
    SUCCESS = "success",
    WAITING = "waiting",
    ERROR = "error"
}

import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { AtomButtonShowTypeEnum, AtomButtonStatusEnum } from 'fstp-ui/src/models/atoms';
export interface IMoleculeConfirmationModalProps {
    fTitle: string;
    fDescription: string;
    fCancelButtonStatus?: AtomButtonStatusEnum;
    fCancelButtonShowType?: AtomButtonShowTypeEnum;
    fCancelButtonLabel?: string;
    fCancelButtonIsShow?: boolean;
    fConfirmButtonStatus?: AtomButtonStatusEnum;
    fConfirmButtonShowType?: AtomButtonShowTypeEnum;
    fConfirmButtonLabel?: string;
    fConfirmButtonIsShow?: boolean;
    fStatus?: MoleculeConfirmationStatusEnum;
    fIsOpen?: boolean;
    fClickCancel?: EventDispatcher<LitElement>;
    fClickConfirm?: EventDispatcher<LitElement>;
}
export declare enum MoleculeConfirmationStatusEnum {
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info"
}

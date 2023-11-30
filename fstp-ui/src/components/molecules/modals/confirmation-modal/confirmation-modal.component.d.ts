import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { IMoleculeConfirmationModalProps, MoleculeConfirmationStatusEnum } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/molecules';
import { AtomButtonShowTypeEnum, AtomButtonStatusEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class MoleculeConfirmationModalComponent extends BaseComponent {
    fStatus: MoleculeConfirmationStatusEnum;
    fIsOpen?: boolean;
    fTitle?: string;
    fDescription?: string;
    fCancelButtonStatus: AtomButtonStatusEnum;
    fCancelButtonShowType: AtomButtonShowTypeEnum;
    fCancelButtonLabel: string;
    fCancelButtonIsShow?: boolean;
    fConfirmButtonStatus: AtomButtonStatusEnum;
    fConfirmButtonShowType: AtomButtonShowTypeEnum;
    fConfirmButtonLabel: string;
    fConfirmButtonIsShow?: boolean;
    statusColor: string;
    statusIcon: string;
    fClickCancel?: EventDispatcher<LitElement>;
    fClickConfirm?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
    protected firstUpdated(): void;
    private setStatusColor;
    hide(): void;
}
export declare const ConfirmationModal: import("@lit/react").ReactWebComponent<MoleculeConfirmationModalComponent, {
    fClickCancel: string;
    fClickConfirm: string;
}>;
export declare function confirmation(parameter: IMoleculeConfirmationModalProps): Promise<void>;

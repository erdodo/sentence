import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { MoleculeNotificationDropdownItemStatus } from 'fstp-ui/src/models/molecules';
export declare class MoleculeNotificationItemDropdownComponent extends BaseComponent {
    fTitle: string;
    fTime: string;
    fStatus: MoleculeNotificationDropdownItemStatus;
    statusColor: string;
    statusIcon: string;
    protected render(): TemplateResult;
    protected firstUpdated(): void;
    private getStatus;
}
export declare const NotificationDropdownItem: import("@lit/react").ReactWebComponent<MoleculeNotificationItemDropdownComponent, {}>;

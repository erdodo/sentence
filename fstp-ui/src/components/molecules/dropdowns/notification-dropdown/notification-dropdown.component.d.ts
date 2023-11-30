import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { MoleculeDropdownPlacement, MoleculeNotificationDropdownItemProps } from 'fstp-ui/src/models/molecules';
import { IPopperEventsEnum } from 'fstp-ui/src/functions';
import { PropertyValues, TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
export declare class MoleculeNotificationDropdownComponent extends BaseComponent {
    fShowEvents: IPopperEventsEnum[];
    fHideEvents: IPopperEventsEnum[];
    fPlacement: MoleculeDropdownPlacement;
    fItems?: MoleculeNotificationDropdownItemProps[];
    fHasHeader?: boolean;
    fCount?: number;
    fHasNotification?: boolean;
    fClick?: EventDispatcher<MoleculeNotificationDropdownItemProps>;
    trigger: HTMLElement;
    content: HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    getList: (list: MoleculeNotificationDropdownItemProps[]) => TemplateResult;
    protected render(): TemplateResult;
}
export declare const NotificationDropdown: import("@lit/react").ReactWebComponent<MoleculeNotificationDropdownComponent, {
    fClick: string;
}>;

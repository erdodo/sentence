import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { MoleculeDropdownItemProps, MoleculeDropdownPlacement } from 'fstp-ui/src/models/molecules';
import { PropertyValues, TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { IPopper, IPopperEventsEnum } from 'fstp-ui/src/functions';
export declare class MoleculeDropdownComponent extends BaseComponent {
    fShowEvents: IPopperEventsEnum[];
    fHideEvents: IPopperEventsEnum[];
    fPlacement: MoleculeDropdownPlacement;
    fItems?: MoleculeDropdownItemProps[];
    fMenuClass?: string;
    inWindow: boolean;
    fClick?: EventDispatcher<MoleculeDropdownItemProps>;
    fOpened?: EventDispatcher<void>;
    fClosed?: EventDispatcher<void>;
    popper: IPopper;
    menu: HTMLElement;
    dropdown: HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    getList: (list: MoleculeDropdownItemProps[]) => TemplateResult;
    protected render(): TemplateResult;
}
export declare const Dropdown: import("@lit/react").ReactWebComponent<MoleculeDropdownComponent, {
    fClick: string;
}>;

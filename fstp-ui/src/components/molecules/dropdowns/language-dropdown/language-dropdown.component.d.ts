import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { MoleculeLanguageDropdownItemProps, MoleculeDropdownPlacement } from 'fstp-ui/src/models/molecules';
import { PropertyValues, TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { IPopperEventsEnum } from 'fstp-ui/src/functions';
export declare class MoleculeLanguageDropdownComponent extends BaseComponent {
    fShowEvents: IPopperEventsEnum[];
    fHideEvents: IPopperEventsEnum[];
    fPlacement: MoleculeDropdownPlacement;
    fItems?: MoleculeLanguageDropdownItemProps[];
    fHasHeader?: boolean;
    fCount?: number;
    fHasLanguage?: boolean;
    fClick?: EventDispatcher<MoleculeLanguageDropdownItemProps>;
    dropdownTrigger: HTMLElement;
    dropdownContent: HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    getList: (list: MoleculeLanguageDropdownItemProps[]) => TemplateResult;
    protected render(): TemplateResult;
}
export declare const LanguageDropdown: import("@lit/react").ReactWebComponent<MoleculeLanguageDropdownComponent, {
    fClick: string;
}>;

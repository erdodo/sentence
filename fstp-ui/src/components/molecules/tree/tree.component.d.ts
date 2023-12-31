import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { MoleculeDropdownItemProps, MoleculeTreeDropdownClickProps, MoleculeTreeItemsProps, IMoleculeItems } from 'fstp-ui/src/models/molecules';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
export declare class MoleculeTreeComponent extends BaseComponent {
    fItems: MoleculeTreeItemsProps[];
    fDropdownJobItems: MoleculeDropdownItemProps[];
    fDropdownFolderItems: MoleculeDropdownItemProps[];
    fFolderItems: MoleculeDropdownItemProps[];
    fJobItems: MoleculeDropdownItemProps[];
    fLeftItems: MoleculeDropdownItemProps[];
    fRightItems: MoleculeDropdownItemProps[];
    fHasSearch: boolean;
    fSelectedValue: string;
    fParentClosedIcon: AtomIconsEnum;
    fParentOpenedIcon: AtomIconsEnum;
    fChildIcon: AtomIconsEnum;
    fActiveIsShow: boolean;
    items: MoleculeTreeItemsProps[];
    selectedItems: MoleculeTreeItemsProps[];
    dropdownClick: boolean;
    loading: boolean;
    leftItems: IMoleculeItems[];
    rightItems: IMoleculeItems[];
    fDropdownClick?: EventDispatcher<MoleculeTreeDropdownClickProps>;
    fTopButtonsClick?: EventDispatcher<IMoleculeItems>;
    fSelectedChange?: EventDispatcher<MoleculeTreeItemsProps[]>;
    protected updated(_changedProperties: PropertyValues): void;
    searchSelected(item: MoleculeTreeItemsProps, value: string): void;
    protected render(): TemplateResult;
    private getItem;
    private openDropdown;
    getDropdownItems(items: MoleculeDropdownItemProps[], treeItem: MoleculeTreeItemsProps, menu: HTMLElement): HTMLElement[];
    private itemClick;
    private getIcon;
    private search;
}
export declare const Tree: import("@lit/react").ReactWebComponent<MoleculeTreeComponent, {
    fDropdownClick: string;
    fSelectedChange: string;
}>;

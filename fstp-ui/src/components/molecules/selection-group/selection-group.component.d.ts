import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { MoleculeSelectionGroupItemTypeEnum, MoleculeSelectionGroupItem } from 'fstp-ui/src/models/molecules';
export declare class MoleculeSelectionGroupComponent extends BaseComponent {
    fHasSearch: boolean;
    fHasFooter: boolean;
    fItems: MoleculeSelectionGroupItem[];
    fType: MoleculeSelectionGroupItemTypeEnum;
    items: MoleculeSelectionGroupItem[];
    fChange?: EventDispatcher<MoleculeSelectionGroupItem[]>;
    fSearchChange?: EventDispatcher<string>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private item;
    private selectItem;
    private search;
    private clear;
    private selectAll;
}
export declare const SelectionGroup: import("@lit/react").ReactWebComponent<MoleculeSelectionGroupComponent, {
    fChange: string;
    fSearchChange: string;
}>;

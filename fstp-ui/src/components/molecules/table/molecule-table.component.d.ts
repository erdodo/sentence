import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { IHeadings, ITable, selectionTagName, SortStatusEnum } from 'fstp-ui/src/models/molecules';
import { AtomBadgeStatusEnum, IPages, AtomButtonStatusEnum, AtomButtonSizeEnum, AtomButtonShowTypeEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
import 'fstp-ui/src/components/atoms';
export declare class MoleculeTableComponent extends BaseComponent {
    fClass: string;
    fHeadingClass: string;
    fShowSort: boolean;
    fHasLoader: boolean;
    fCount: string;
    fCountStatus?: AtomBadgeStatusEnum;
    fTitle?: string;
    fSubTitle?: string;
    fTable: ITable;
    fEmptyHasButton?: boolean;
    fEmptyButtonStatus?: AtomButtonStatusEnum;
    fEmptyButtonSize?: AtomButtonSizeEnum;
    fEmptyButtonShowType?: AtomButtonShowTypeEnum;
    fEmptyTitle?: string;
    fEmptyDescription?: string;
    fEmptyButtonText?: string;
    fSort?: EventDispatcher<string>;
    fEditButtonClick?: EventDispatcher<LitElement>;
    fDelButtonClick?: EventDispatcher<LitElement>;
    fFilterButtonClick?: EventDispatcher<void>;
    fAddButtonClick?: EventDispatcher<void>;
    fPaginateChange?: EventDispatcher<IPages>;
    fEmptyButtonClick?: EventDispatcher<void>;
    private isSelected;
    sortStatus: SortStatusEnum;
    sortField: string;
    data: ITable;
    constructor();
    protected updated(_changedProperties: PropertyValues): void;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    tableSortCell(item: IHeadings): TemplateResult;
    tableHeadSelected(item: IHeadings): void;
    setSelectionType(tagName: selectionTagName, tdClass?: string): TemplateResult;
    protected render(): TemplateResult;
}
export declare const Table: import("@lit/react").ReactWebComponent<MoleculeTableComponent, {
    fSort: string;
    fEditButtonClick: string;
    fDelButtonClick: string;
    fFilterButtonClick: string;
    fAddButtonClick: string;
    fPaginateChange: string;
    fEmptyButtonClick: string;
}>;

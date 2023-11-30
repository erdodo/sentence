import { AtomBadgeStatusEnum, AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomButtonTypeEnum, AtomIconsEnum, AtomIconsTypeEnum, AtomPaginationRange, IPages } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface IMoleculeTableProps {
    fId?: string;
    fClass?: string;
    fHeadingClass?: string;
    fTable: ITable;
    fCount?: string;
    fCountStatus?: AtomBadgeStatusEnum;
    fTitle?: string;
    fSubTitle?: string;
    fShowSort?: boolean;
    fSort?: EventDispatcher<string>;
    fEditButtonClick?: EventDispatcher<LitElement>;
    fDelButtonClick?: EventDispatcher<LitElement>;
    fFilterButtonClick?: EventDispatcher<void>;
    fAddButtonClick: EventDispatcher<void>;
    fPaginateChange?: EventDispatcher<IPages>;
    fPaginate: IMoleculeTablePaginate;
    fHasLoader?: boolean;
    fEmptyHasButton?: boolean;
    fEmptyButtonStatus?: AtomButtonStatusEnum;
    fEmptyButtonSize?: AtomButtonSizeEnum;
    fEmptyButtonShowType?: AtomButtonShowTypeEnum;
    fEmptyTitle?: string;
    fEmptyDescription?: string;
    fEmptyButtonText?: string;
    fEmptyButtonClick?: EventDispatcher<void>;
}
export interface ITable {
    fClass: string;
    fThClass: string;
    fTdClass: string;
    fSelectionType: SelectionTypeEnum;
    fHeadings: IHeadings[];
    fHeadingButtons?: {
        filterButton?: IMoleculeTableHeadingButtons;
        addButton?: IMoleculeTableHeadingButtons;
    };
    fRows: IRows<any>[];
    fSort: string;
    fPaginate?: IMoleculeTablePaginate;
    fActionButtonHeading?: string;
    fEditButton?: IMoleculeTableEditButton;
    fDelButton?: IMoleculeTableDelButton;
}
export interface IMoleculeTableEditButton extends IMoleculeTableActionButton {
    showEditButton?: boolean;
}
export interface IMoleculeTableDelButton extends IMoleculeTableActionButton {
    showDelButton?: boolean;
}
export interface IMoleculeTableHeadingButtons {
    fSize?: AtomButtonSizeEnum;
    fStatus?: AtomButtonStatusEnum;
    fType?: AtomButtonTypeEnum;
    fShowType?: AtomButtonShowTypeEnum;
    fHasLabel?: boolean;
    fLabel?: string;
    fHasIcon?: boolean;
    fIcon?: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
    fIsShow?: boolean;
}
interface IMoleculeTableActionButton {
    fIcon?: AtomIconsEnum;
    fType: AtomButtonTypeEnum;
    fShowType: AtomButtonShowTypeEnum;
    fHasIcon?: boolean;
    fStatus?: AtomButtonStatusEnum;
    fIconType?: AtomIconsTypeEnum;
}
export interface IMoleculeTablePaginate {
    totalPage: number;
    number: number;
    range: AtomPaginationRange;
    contentClass?: string;
}
export interface IContentClass {
    fContent?: string | number | null | undefined;
    fClass?: string;
}
export interface IHeadings {
    fField?: string;
    fContent?: string;
    fClass?: string;
}
export interface IRows<TItem> {
    fClass?: string;
    fColumns?: IContentClass[];
    fItem: TItem;
}
export declare enum SelectionTypeEnum {
    DEFAULT = "DEFAULT",
    CHECKBOX = "CHECKBOX",
    RADIO = "RADIO",
    SWITCH = "SWITCH"
}
export declare enum SortStatusEnum {
    ASC = "asc",
    DESC = "desc",
    DEFAULT = ""
}
export type selectionTagName = 'td' | 'th';
export {};

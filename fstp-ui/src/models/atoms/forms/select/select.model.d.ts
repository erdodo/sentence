import { AtomCheckboxSelectionTypeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IAtomSelectProps {
    fName?: string;
    fLabel?: string;
    fStatus?: AtomSelectStatusEnum;
    fDisabled?: boolean;
    fPlaceholder?: string;
    fValue?: string;
    fSize?: AtomSelectSizeEnum;
    fHasHelperText?: boolean;
    fHasLabel?: boolean;
    fHelperText?: string;
    fFloatLabel?: boolean;
    fRequired?: boolean;
    fIsMultiSelect?: boolean;
    fIsSearchable?: boolean;
    fSearchPlaceholder?: string;
    fId?: string;
    fClass?: string;
    fOptionLabel?: string;
    fOptionKey?: string;
    fSelectedKeys?: string | string[];
    fSelecteds?: IAtomSelectItem[];
    fItems?: IAtomSelectItem[];
    fChange: EventDispatcher<IAtomSelectItem>;
    fSearchChange?: EventDispatcher<string>;
    fChangeValue?: EventDispatcher<string>;
    fChangeSelectedKeys?: EventDispatcher<string | string[]>;
}
export interface IAtomSelectItem<fData = any> {
    fValue?: string;
    fLabel?: string;
    fIsDisabled?: boolean;
    fSelected?: boolean;
    fData?: fData;
    _key?: string;
    _label?: string;
    [key: string]: any;
}
export interface IAtomSelectOptions<T> {
    [key: string]: T;
}
export declare enum AtomSelectStatusEnum {
    DEFAULT = "default",
    SUCCESS = "success",
    ERROR = "error"
}
export declare enum AtomSelectSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export interface IAtomSelectOptionEventProps {
    fValue: string;
    fLabel: string;
    fSelected: boolean;
}
export interface IAtomSelectGlobalCheckboxStatus {
    fIsChecked: boolean;
    fSelectionType: AtomCheckboxSelectionTypeEnum;
}

import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IAtomTextboxProps {
    fValue?: string;
    fLabel?: string;
    fClass?: string;
    fIsDisabled?: boolean;
    fIsReadonly?: boolean;
    fStatus?: AtomTextboxStatusEnum;
    fHasLabel?: boolean;
    fHasIcon?: boolean;
    fId?: string;
    fName?: string;
    fPlaceholder?: string;
    fSize?: AtomTextboxSizeEnum;
    fIcon?: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
    fHasHelperText?: boolean;
    fHasNumberButtons?: boolean;
    fHelperText?: string;
    fFloatLabel?: boolean;
    fIsRequired?: boolean;
    fType?: AtomTexboxTypeEnum;
    fChange?: EventDispatcher<string>;
}
export declare enum AtomTexboxTypeEnum {
    TEXT = "text",
    EMAIL = "email",
    TEL = "tel",
    URL = "url",
    SEARCH = "search",
    NUMBER = "number"
}
export declare enum AtomTextboxStatusEnum {
    DEFAULT = "flw-textbox--default",
    SUCCESS = "flw-textbox--success",
    ERROR = "flw-textbox--error"
}
export declare enum AtomTextboxSizeEnum {
    SMALL = "flw-textbox--small",
    MEDIUM = "flw-textbox--medium",
    LARGE = "flw-textbox--large"
}

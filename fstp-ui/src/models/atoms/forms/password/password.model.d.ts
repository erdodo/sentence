import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface IAtomPasswordProps {
    fValue?: string;
    fLabel?: string;
    fHasLabel?: boolean;
    fClass?: string;
    fReadonly?: boolean;
    fDisabled?: boolean;
    fStatus?: AtomPasswordStatusEnum;
    fHasIcon?: boolean;
    fId?: string;
    fName?: string;
    fPlaceholder?: string;
    fSize?: AtomPasswordSizeEnum;
    fIcon?: AtomIconsEnum;
    fHasHelperText?: boolean;
    fHelperText?: string;
    fFloatLabel?: boolean;
    fIsRequired?: boolean;
    fTypeChange?: EventDispatcher<LitElement>;
    fChange?: EventDispatcher<string>;
}
export declare enum AtomPasswordStatusEnum {
    DEFAULT = "flw-password--default",
    SUCCESS = "flw-password--success",
    ERROR = "flw-password--error"
}
export declare enum AtomPasswordSizeEnum {
    SMALL = "flw-password--small",
    MEDIUM = "flw-password--medium",
    LARGE = "flw-password--large"
}
export declare enum AtomPasswordTypesEnum {
    TEXT = "text",
    PASSWORD = "password"
}

import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface AtomTextareaProps {
    fValue?: string;
    fLabel?: string;
    fClass?: string;
    fIsDisabled?: boolean;
    fIsReadonly?: boolean;
    fStatus?: AtomTextareaStatusEnum;
    fHasIcon?: boolean;
    fId?: string;
    fName?: string;
    fPlaceholder?: string;
    fSize?: AtomTextareaSizeEnum;
    fIcon?: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
    fHasHelperText?: boolean;
    fHelperText?: string;
    fFloatLabel?: boolean;
    fIsRequired?: boolean;
    fResize?: AtomTextareaResizeEnum;
    fChange?: EventDispatcher<string>;
}
export declare enum AtomTextareaStatusEnum {
    DEFAULT = "flw-textarea--default",
    SUCCESS = "flw-textarea--success",
    ERROR = "flw-textarea--error"
}
export declare enum AtomTextareaSizeEnum {
    SMALL = "flw-textarea--small",
    MEDIUM = "flw-textarea--medium",
    LARGE = "flw-textarea--large"
}
export declare enum AtomTextareaResizeEnum {
    BOTH = "flw-resize",
    VERTICAL = "flw-resize-y",
    HORIZONTAL = "flw-resize-x",
    NONE = "flw-resize-none"
}

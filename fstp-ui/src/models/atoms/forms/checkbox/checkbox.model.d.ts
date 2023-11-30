import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomCheckboxProps {
    fSelectionType: AtomCheckboxSelectionTypeEnum;
    fIsError?: boolean;
    fHasLabel: boolean;
    fIsChecked?: boolean;
    fDisabled?: boolean;
    fLabel?: string;
    fId?: string;
    fClass?: string;
    fName?: string;
    fSize: AtomCheckboxSizeEnum;
    fChange?: EventDispatcher<boolean>;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum AtomCheckboxSelectionTypeEnum {
    CHECK = "Check",
    FILL = "Fill"
}
export declare enum AtomCheckboxSizeEnum {
    SMALL = "flw-checkbox--small",
    MEDIUM = "flw-checkbox--medium",
    LARGE = "flw-checkbox--large"
}

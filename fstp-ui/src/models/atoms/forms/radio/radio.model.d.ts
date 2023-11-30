import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IAtomRadioProps {
    fSelectionType?: AtomRadioSelectionTypeEnum;
    fIsError?: boolean;
    fHasLabel?: boolean;
    fIsChecked?: boolean;
    fIsDisabled?: boolean;
    fLabel?: string;
    fValue: string;
    fId?: string;
    fName: string;
    fSize?: AtomRadioSizeEnum;
    fChange?: EventDispatcher<boolean>;
}
export declare enum AtomRadioSelectionTypeEnum {
    CHECK = "Check",
    FILL = "Fill"
}
export declare enum AtomRadioSizeEnum {
    SMALL = "flw-radio--small",
    MEDIUM = "flw-radio--medium",
    LARGE = "flw-radio--large"
}

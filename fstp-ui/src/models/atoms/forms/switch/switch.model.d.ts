import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface AtomSwitchProps {
    fSelectionType?: AtomSwitchSelectionTypeEnum;
    fIsError?: boolean;
    fHasLabel?: boolean;
    fIsChecked?: boolean;
    fIsDisabled?: boolean;
    fLabel?: string;
    fId?: string;
    fName?: string;
    fClass?: string;
    fSize?: AtomSwitchSizeEnum;
    fChange?: EventDispatcher<boolean>;
}
export declare enum AtomSwitchSelectionTypeEnum {
    CHECK = "Check",
    FILL = "Fill"
}
export declare enum AtomSwitchSizeEnum {
    SMALL = "flw-switch--small",
    MEDIUM = "flw-switch--medium",
    LARGE = "flw-switch--large"
}

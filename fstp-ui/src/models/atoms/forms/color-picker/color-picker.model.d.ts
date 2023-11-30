import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IAtomColorPickerProps {
    fId?: string;
    fClass?: string;
    fValue?: string;
    fLabel?: string;
    fDisabled?: boolean;
    fSize?: AtomColorSizeEnum;
    fName?: string;
    fHasLabel?: boolean;
    fIsRGB?: boolean;
    fChange?: EventDispatcher<string>;
}
export declare enum AtomColorSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

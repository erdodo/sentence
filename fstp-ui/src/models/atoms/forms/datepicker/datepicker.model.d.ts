import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface AtomDatePickerProps {
    fValue?: string | number | Date | string[] | Date[] | number[];
    fIsRange?: boolean;
    fDateFormat?: string;
    fHasTime?: boolean;
    fHasLabel?: boolean;
    fLabel?: string;
    fLanguage?: AtomDatePickerLanguageEnum;
    fViewFormat?: AtomDatePickerViewFormatEnum;
    fId?: string;
    fClass?: string;
    fHasHelperText?: boolean;
    fHelperText?: string;
    fName?: string;
    fDisabled?: boolean;
    fStatus?: AtomDatePickerStatusEnum;
    fFloatLabel?: boolean;
    fPlaceholder?: string;
    fChange?: EventDispatcher<Date | Date[]>;
}
export declare enum AtomDatePickerLanguageEnum {
    EN = "en",
    TR = "tr"
}
export declare enum AtomDatePickerViewFormatEnum {
    DAYS = "days",
    MONTHS = "months",
    YEARS = "years"
}
export declare enum AtomDatePickerStatusEnum {
    DEFAULT = "default",
    SUCCESS = "success",
    ERROR = "error"
}

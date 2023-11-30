import Base, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomDatePickerLanguageEnum, AtomDatePickerStatusEnum, AtomDatePickerViewFormatEnum } from 'fstp-ui/src/models/atoms';
import AirDatepicker, { AirDatepickerViews } from 'air-datepicker';
import 'fstp-ui/src/components/atoms';
export declare class AtomDatePicker extends Base {
    fValue?: string | number | Date | string[] | Date[] | number[];
    fIsRange?: boolean;
    fDateFormat?: string;
    fHasTime?: boolean;
    fHasLabel?: boolean;
    fLabel?: string;
    fLanguage?: AtomDatePickerLanguageEnum;
    fViewFormat?: AtomDatePickerViewFormatEnum | AirDatepickerViews;
    fHasHelperText?: boolean;
    fHelperText?: string;
    fName?: string;
    fDisabled?: boolean;
    fStatus?: AtomDatePickerStatusEnum;
    fFloatLabel?: boolean;
    fPlaceholder?: string;
    fChange?: EventDispatcher<Date | Date[]>;
    navTitleDays: string;
    navTitleMonths: string;
    navTitleYears: string;
    id: string;
    datetime?: AirDatepicker<HTMLElement>;
    atomTextbox: HTMLInputElement;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private getValue;
    private getLabel;
    private onSelected;
    protected createRenderRoot(): this;
}
export declare const DatePicker: import("@lit/react").ReactWebComponent<AtomDatePicker, {
    fChange: string;
}>;

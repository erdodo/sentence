var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Base, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { AtomDatePickerLanguageEnum, AtomDatePickerViewFormatEnum, } from 'fstp-ui/src/models/atoms';
import AirDatepicker from 'air-datepicker';
import moment from 'moment';
import 'fstp-ui/src/components/atoms';
import { generateUUID } from 'fstp-ui/src/utils';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomDatePicker = class AtomDatePicker extends Base {
    constructor() {
        super(...arguments);
        this.fValue = '';
        this.fIsRange = false;
        this.fDateFormat = 'DD/MM/YYYY';
        this.fHasTime = false;
        this.fLanguage = AtomDatePickerLanguageEnum.EN;
        this.fViewFormat = AtomDatePickerViewFormatEnum.DAYS;
        this.navTitleDays = '<span class="nav-title-mounth">MMMM <atom-icon fSize="6" fType="other"  fOthers="triangle"  ></atom-icon></span>  <span>yyyy <atom-icon fSize="6" fType="other"  fOthers="triangle"  ></atom-icon></span>';
        this.navTitleMonths = '<span>yyyy  <atom-icon fSize="6" fType="other"  fOthers="triangle"  ></atom-icon> </span>';
        this.navTitleYears = '<span>yyyy1 - yyyy2</span>';
        this.id = generateUUID();
    }
    firstUpdated() {
        if (this.fDisabled)
            return;
        const options = {
            selectedDates: this.getValue(),
            view: this.fViewFormat,
            range: this.fIsRange,
            timepicker: this.fHasTime,
            locale: this.fLanguage === AtomDatePickerLanguageEnum.TR ? TR : EN,
            onSelect: (e) => {
                this.onSelected(e);
            },
            navTitles: {
                days: this.navTitleDays,
                months: this.navTitleMonths,
                years: this.navTitleYears,
            },
        };
        setTimeout(() => {
            const input = this.atomTextbox.shadowRoot?.querySelector('input');
            this.datetime = new AirDatepicker(input, options);
        }, 100);
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
    render() {
        return html `
      <div
        class="flw-relative"
        @click="${() => {
            this.datetime?.update({
                locale: this.fLanguage === AtomDatePickerLanguageEnum.TR ? TR : EN,
            });
        }}"
      >
        <atom-textbox
          .fStatus="flw-textbox--${this.fStatus}"
          ?fFloatLabel="${this.fFloatLabel}"
          .fLabel="${this.fLabel}"
          fIcon="calendar"
          fHasIcon
          .fId="${this.id}"
          ?fHasLabel="${this.fHasLabel}"
          ?fHasHelperText="${this.fHasHelperText}"
          .fHelperText="${this.fHelperText}"
          .fValue="${this.getLabel()}"
          .fPlaceholder="${this.fPlaceholder}"
          ?fIsDisabled="${this.fDisabled}"
          .fName="${this.fName}"
          .fClass="${this.fClass} flw-w-full"
        ></atom-textbox>
      </div>
    `;
    }
    getValue() {
        if (this.fValue === '' ||
            this.fValue === undefined ||
            this.fValue === null ||
            this.fValue == 0)
            return [];
        if (typeof this.fValue === 'number') {
            return [new Date(this.fValue)];
        }
        else if (typeof this.fValue === 'string') {
            if (parseInt(this.fValue) > 1000) {
                return [new Date(parseInt(this.fValue))];
            }
            return [new Date(this.fValue)];
        }
        else if (this.fValue instanceof Date) {
            return [this.fValue];
        }
        return this.fValue;
    }
    getLabel() {
        let label = '';
        this.getValue() &&
            this.getValue().map((date) => {
                label = moment(date).format(this.fDateFormat);
            });
        return label;
    }
    onSelected(e) {
        this.fValue = e.formattedDate;
        this.fChange?.(e.date);
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fValue", void 0);
__decorate([
    property({ type: Boolean })
], AtomDatePicker.prototype, "fIsRange", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fDateFormat", void 0);
__decorate([
    property({ type: Boolean })
], AtomDatePicker.prototype, "fHasTime", void 0);
__decorate([
    property({ type: Boolean })
], AtomDatePicker.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fLabel", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fLanguage", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fViewFormat", void 0);
__decorate([
    property({ type: Boolean })
], AtomDatePicker.prototype, "fHasHelperText", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fHelperText", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fName", void 0);
__decorate([
    property({ type: Boolean })
], AtomDatePicker.prototype, "fDisabled", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomDatePicker.prototype, "fFloatLabel", void 0);
__decorate([
    property({ type: String })
], AtomDatePicker.prototype, "fPlaceholder", void 0);
__decorate([
    event('fChange')
], AtomDatePicker.prototype, "fChange", void 0);
__decorate([
    state()
], AtomDatePicker.prototype, "navTitleDays", void 0);
__decorate([
    state()
], AtomDatePicker.prototype, "navTitleMonths", void 0);
__decorate([
    state()
], AtomDatePicker.prototype, "navTitleYears", void 0);
__decorate([
    state()
], AtomDatePicker.prototype, "id", void 0);
__decorate([
    state()
], AtomDatePicker.prototype, "datetime", void 0);
__decorate([
    query('atom-textbox')
], AtomDatePicker.prototype, "atomTextbox", void 0);
AtomDatePicker = __decorate([
    customElement('atom-datepicker')
], AtomDatePicker);
export { AtomDatePicker };
export const DatePicker = createComponent({
    tagName: 'atom-datepicker',
    elementClass: AtomDatePicker,
    react: React,
    events: {
        fChange: 'fChange',
    },
});
const EN = {
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 0,
};
const TR = {
    days: [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi',
    ],
    daysShort: ['Pzr', 'Pts', 'Sl', 'Çar', 'Per', 'Cum', 'Cts'],
    daysMin: ['Pa', 'Pt', 'Sl', 'Ça', 'Pe', 'Cu', 'Ct'],
    months: [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık',
    ],
    monthsShort: [
        'Oca',
        'Şbt',
        'Mrt',
        'Nsn',
        'Mys',
        'Hzr',
        'Tmz',
        'Ağt',
        'Eyl',
        'Ekm',
        'Ksm',
        'Arl',
    ],
    today: 'Bugün',
    clear: 'Temizle',
    dateFormat: 'dd.MM.yyyy',
    timeFormat: 'hh:mm aa',
    firstDay: 1,
};

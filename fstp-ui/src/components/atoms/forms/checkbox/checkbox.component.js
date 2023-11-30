var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomCheckboxSelectionTypeEnum, AtomCheckboxSizeEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
import { FormControlMixin } from '@open-wc/form-control';
let AtomCheckboxComponent = class AtomCheckboxComponent extends FormControlMixin(BaseComponent) {
    constructor() {
        super(...arguments);
        this.fName = '';
        this.fSelectionType = AtomCheckboxSelectionTypeEnum.CHECK;
        this.fIsChecked = false;
        this.fIsError = false;
        this.fHasLabel = false;
        this.fDisabled = false;
        this.fLabel = '';
        this.fSize = AtomCheckboxSizeEnum.MEDIUM;
    }
    updated(_changedProperties) {
        if (_changedProperties.has('fIsChecked')) {
            this.fChange?.(this.fIsChecked);
        }
    }
    render() {
        return html `
      <label
        class="flw-checkbox
        ${this.fClass}
      ${this.fDisabled ? 'flw-checkbox--disabled' : ''}
      ${this.fIsError ? 'flw-checkbox--error' : ''}
      ${this.fSelectionType === AtomCheckboxSelectionTypeEnum.FILL
            ? 'flw-checkbox--fill'
            : ''}
      ${this.fSelectionType === AtomCheckboxSelectionTypeEnum.CHECK
            ? 'flw-checkbox--check'
            : ''}
        ${this.fSize}
        "
        for="${this.fId}"
      >
        <input
          type="checkbox"
          id="${this.fId}"
          name="${this.fName}"
          ?checked=${this.fIsChecked}
          ?disabled=${this.fDisabled}
          class="flw-hidden ${this.fClass}"
          @input="${(e) => {
            this.fIsChecked = e.target.checked;
        }}"
        />
        <span
          class="flw-checkbox__view ${this.fIsChecked
            ? 'flw-checkbox__view-checked'
            : ''}"
        ></span>
        ${this.fHasLabel
            ? html `<span class="flw-checkbox__text">${this.fLabel}</span>`
            : ''}
      </label>
    `;
    }
};
__decorate([
    property({ type: String })
], AtomCheckboxComponent.prototype, "fName", void 0);
__decorate([
    property({ type: AtomCheckboxSelectionTypeEnum })
], AtomCheckboxComponent.prototype, "fSelectionType", void 0);
__decorate([
    property({ type: Boolean })
], AtomCheckboxComponent.prototype, "fIsChecked", void 0);
__decorate([
    property({ type: Boolean })
], AtomCheckboxComponent.prototype, "fIsError", void 0);
__decorate([
    property({ type: Boolean })
], AtomCheckboxComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomCheckboxComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: String })
], AtomCheckboxComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomCheckboxSizeEnum })
], AtomCheckboxComponent.prototype, "fSize", void 0);
__decorate([
    event('fChange')
], AtomCheckboxComponent.prototype, "fChange", void 0);
AtomCheckboxComponent = __decorate([
    customElement('atom-checkbox')
], AtomCheckboxComponent);
export { AtomCheckboxComponent };
export const Checkbox = createComponent({
    tagName: 'atom-checkbox',
    elementClass: AtomCheckboxComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

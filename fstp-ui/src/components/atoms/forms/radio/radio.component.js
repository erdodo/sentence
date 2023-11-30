var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomRadioSelectionTypeEnum, AtomRadioSizeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomRadioComponent = class AtomRadioComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fSelectionType = AtomRadioSelectionTypeEnum.FILL;
        this.fIsError = false;
        this.fHasLabel = false;
        this.fIsChecked = false;
        this.fIsDisabled = false;
        this.fLabel = '';
        this.fValue = '';
        this.fSize = AtomRadioSizeEnum.MEDIUM;
        this.fName = '';
    }
    render() {
        return html `
      <label
        class="flw-radio 
        ${this.fClass}
        ${this.fIsDisabled ? 'flw-radio--disabled' : ''}
      ${this.fIsError ? 'flw-radio--error' : ''}
      ${this.fSelectionType === AtomRadioSelectionTypeEnum.FILL
            ? 'flw-radio--fill'
            : ''}
      ${this.fSelectionType === AtomRadioSelectionTypeEnum.CHECK
            ? 'flw-radio--check'
            : ''}
            ${this.fSize}
         "
        for="${this.fId}"
      >
        <input
          type="radio"
          id="${this.fId}"
          name="${this.fName}"
          ?checked=${this.fIsChecked}
          ?disabled=${this.fIsDisabled}
          class="flw-hidden"
          value="${this.fValue}"
          @change="${() => {
            this.fChange?.(this.fValue);
        }}"
        />
        <span class="flw-radio__view"></span>
        ${this.fHasLabel
            ? html `<span class="flw-radio__text">${this.fLabel}</span>`
            : ''}
      </label>
    `;
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: AtomRadioSelectionTypeEnum })
], AtomRadioComponent.prototype, "fSelectionType", void 0);
__decorate([
    property({ type: Boolean })
], AtomRadioComponent.prototype, "fIsError", void 0);
__decorate([
    property({ type: Boolean })
], AtomRadioComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomRadioComponent.prototype, "fIsChecked", void 0);
__decorate([
    property({ type: Boolean })
], AtomRadioComponent.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: String })
], AtomRadioComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: String })
], AtomRadioComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: String })
], AtomRadioComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: String })
], AtomRadioComponent.prototype, "fName", void 0);
__decorate([
    event('fChange')
], AtomRadioComponent.prototype, "fChange", void 0);
AtomRadioComponent = __decorate([
    customElement('atom-radio')
], AtomRadioComponent);
export { AtomRadioComponent };
export const Radio = createComponent({
    tagName: 'atom-radio',
    elementClass: AtomRadioComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

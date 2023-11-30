var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomPasswordSizeEnum, AtomPasswordStatusEnum, AtomPasswordTypesEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomPasswordComponent = class AtomPasswordComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fName = '';
        this.fValue = '';
        this.fLabel = '';
        this.fHasLabel = false;
        this.fStatus = AtomPasswordStatusEnum.DEFAULT;
        this.fDisabled = false;
        this.fReadonly = false;
        this.fHasIcon = false;
        this.fPlaceholder = '';
        this.fSize = AtomPasswordSizeEnum.MEDIUM;
        this.fHasHelperText = false;
        this.fHelperText = '';
        this.fFloatLabel = false;
        this.fIsRequired = false;
        this.inputType = AtomPasswordTypesEnum.PASSWORD;
    }
    render() {
        return html `
      <div
        class="flw-password 
          ${this.fFloatLabel ? 'flw-password-float-label' : ''}  
          ${this.fSize} 
          ${this.fDisabled ? 'flw-password--disabled' : `${this.fStatus}`} 
          ${this.fClass}
          ${this.fHasLabel ? 'flw-password--has-label' : ''}
        "
      >
        ${this.fLabel && this.fHasLabel
            ? html `<label
              for="${this.fId}"
              class="flw-password__label ${this.fStatus}"
              >${this.fLabel}
              ${this.fIsRequired
                ? html `<span class="flw-textbox__required">*</span>`
                : ''}</label
            > `
            : ''}
        <input
          type="${this.inputType}"
          id="${this.fId}"
          ?disabled=${this.fDisabled}
          ?readonly=${this.fReadonly}
          value="${this.fValue}"
          name="${this.fName}"
          placeholder="${this.fPlaceholder}"
          class="flw-password__input"
          @input="${(e) => {
            this.fChange?.(e.target.value);
        }}"
        />
        ${this.fHasIcon
            ? html `
              <button
                type="button"
                @click=${this.inputTypeChange}
                class="flw-password__icon"
              >
                ${this.inputType === AtomPasswordTypesEnum.PASSWORD
                ? html `
                      <atom-icon
                        .fName="${AtomIconsEnum.EYE_ON}"
                        fSize="${AtomIconSizeEnum.MEDIUM}"
                      ></atom-icon>
                    `
                : html `
                      <atom-icon
                        .fName="${AtomIconsEnum.EYE_OFF_1}"
                        fSize="${AtomIconSizeEnum.MEDIUM}"
                      ></atom-icon>
                    `}
              </button>
            `
            : ''}
        ${this.fHasHelperText
            ? html `<span class="flw-password__helper-text"
              >${this.fHelperText}</span
            >`
            : ''}
      </div>
    `;
    }
    inputTypeChange() {
        this.inputType =
            this.inputType === AtomPasswordTypesEnum.PASSWORD
                ? AtomPasswordTypesEnum.TEXT
                : AtomPasswordTypesEnum.PASSWORD;
        this.fTypeChange?.(this);
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: String })
], AtomPasswordComponent.prototype, "fName", void 0);
__decorate([
    property({ type: String })
], AtomPasswordComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: String })
], AtomPasswordComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: AtomPasswordStatusEnum })
], AtomPasswordComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fReadonly", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: String })
], AtomPasswordComponent.prototype, "fPlaceholder", void 0);
__decorate([
    property({ type: AtomPasswordSizeEnum })
], AtomPasswordComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fHasHelperText", void 0);
__decorate([
    property({ type: String })
], AtomPasswordComponent.prototype, "fHelperText", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fFloatLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomPasswordComponent.prototype, "fIsRequired", void 0);
__decorate([
    state()
], AtomPasswordComponent.prototype, "inputType", void 0);
__decorate([
    event('fChange')
], AtomPasswordComponent.prototype, "fChange", void 0);
__decorate([
    event('fTypeChange')
], AtomPasswordComponent.prototype, "fTypeChange", void 0);
AtomPasswordComponent = __decorate([
    customElement('atom-password')
], AtomPasswordComponent);
export { AtomPasswordComponent };
export const Password = createComponent({
    tagName: 'atom-password',
    elementClass: AtomPasswordComponent,
    react: React,
    events: {
        fChange: 'fChange',
        fTypeChange: 'fTypeChange',
    },
});

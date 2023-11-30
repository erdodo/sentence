var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomTexboxTypeEnum, AtomTextboxSizeEnum, AtomTextboxStatusEnum, } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import { generateUUID } from 'fstp-ui/src/utils';
import { createComponent } from '@lit/react';
import * as React from 'react';
function getIcon(status, icon, iconType) {
    switch (status) {
        case AtomTextboxStatusEnum.SUCCESS:
            return html `
        <atom-icon
          fName="${AtomIconsEnum.CHECKMARK}"
          fSize="${AtomTextboxSizeEnum.MEDIUM}"
          class="flw-textbox__icon"
          fClass="flw-w-full flw-h-full"
          fType="${iconType}"
        />
      `;
        case AtomTextboxStatusEnum.ERROR:
            return html `
        <atom-icon
          fName="${AtomIconsEnum.ALERT_CIRCLE}"
          fSize="${AtomTextboxSizeEnum.MEDIUM}"
          class="flw-textbox__icon"
          fClass="flw-w-full flw-h-full"
          fType="${iconType}"
        />
      `;
        default:
            return html `
        <atom-icon
          fName="${icon}"
          fSize="${AtomTextboxSizeEnum.MEDIUM}"
          class="flw-textbox__icon"
          fClass="flw-w-full flw-h-full"
          fType="${iconType}"
        />
      `;
    }
}
let AtomTextboxComponent = class AtomTextboxComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fName = '';
        this.fValue = '';
        this.fLabel = '';
        this.fStatus = AtomTextboxStatusEnum.DEFAULT;
        this.fIsDisabled = false;
        this.fIsReadonly = false;
        this.fHasIcon = false;
        this.fHasLabel = false;
        this.fIcon = AtomIconsEnum.CHECKMARK;
        this.fIconType = AtomIconsTypeEnum.OUTLINE;
        this.fPlaceholder = '';
        this.fSize = AtomTextboxSizeEnum.MEDIUM;
        this.fHasHelperText = false;
        this.fHelperText = '';
        this.fFloatLabel = false;
        this.fHasNumberButtons = false;
        this.fIsRequired = false;
        this.fType = AtomTexboxTypeEnum.TEXT;
        this.id = generateUUID();
    }
    render() {
        return html `
      <div
        class="flw-textbox 
          ${this.fFloatLabel ? 'flw-textbox-float-label' : ''}  
          ${this.fIsDisabled ? 'flw-textbox--disabled' : `${this.fStatus}`} 
          ${this.fSize}
          ${this.fHasLabel ? 'flw-textbox--has-label' : ''}
          ${this.fHasNumberButtons ? '' : 'flw-textbox--no-number-buttons'}
          ${this.fClass}
        "
      >
        ${this.fLabel && this.fHasLabel
            ? html `<label
              for="${this.id}"
              class="flw-textbox__label ${this.fStatus}"
              >${this.fLabel}
              ${this.fIsRequired
                ? html `<span class="flw-textbox__required">*</span>`
                : ''}
            </label> `
            : ''}
        <input
          type="${this.fType}"
          id="${this.id}"
          ?disabled=${this.fIsDisabled}
          ?readonly=${this.fIsReadonly}
          .value="${this.fValue}"
          .name="${this.fName}"
          placeholder="${this.fPlaceholder}"
          class="flw-textbox__input ${this.fHasIcon
            ? 'flw-pr-40'
            : ' flw-pr-12'}"
          @input="${(e) => {
            this.fValue = e.target.value;
            this.fChange?.(e.target.value);
        }}"
        />
        ${this.fHasIcon
            ? getIcon(this.fStatus, this.fIcon, this.fIconType)
            : ''}
        ${this.fHasHelperText
            ? html `<span class="flw-textbox__helper-text"
              >${this.fHelperText}</span
            >`
            : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], AtomTextboxComponent.prototype, "fName", void 0);
__decorate([
    property({ type: String })
], AtomTextboxComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: String })
], AtomTextboxComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomTextboxStatusEnum })
], AtomTextboxComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fIsReadonly", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomTextboxComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomTextboxComponent.prototype, "fIconType", void 0);
__decorate([
    property({ type: String })
], AtomTextboxComponent.prototype, "fPlaceholder", void 0);
__decorate([
    property({ type: AtomTextboxSizeEnum })
], AtomTextboxComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fHasHelperText", void 0);
__decorate([
    property({ type: String })
], AtomTextboxComponent.prototype, "fHelperText", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fFloatLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fHasNumberButtons", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextboxComponent.prototype, "fIsRequired", void 0);
__decorate([
    property({ type: AtomTexboxTypeEnum })
], AtomTextboxComponent.prototype, "fType", void 0);
__decorate([
    property({ type: String })
], AtomTextboxComponent.prototype, "id", void 0);
__decorate([
    event('fChange')
], AtomTextboxComponent.prototype, "fChange", void 0);
AtomTextboxComponent = __decorate([
    customElement('atom-textbox')
], AtomTextboxComponent);
export { AtomTextboxComponent };
export const Textbox = createComponent({
    tagName: 'atom-textbox',
    elementClass: AtomTextboxComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

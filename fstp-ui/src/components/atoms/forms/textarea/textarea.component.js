var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomTextareaResizeEnum, AtomTextareaSizeEnum, AtomTextareaStatusEnum, AtomTextboxSizeEnum, } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
function getIcon(status, icon, fIconType) {
    switch (status) {
        case AtomTextareaStatusEnum.SUCCESS:
            return html `
        <atom-icon
          fName="${AtomIconsEnum.CHECKMARK}"
          fSize="${AtomTextboxSizeEnum.MEDIUM}"
          fType="${fIconType}"
          fClass="flw-textarea__icon"
        />
      `;
        case AtomTextareaStatusEnum.ERROR:
            return html `
        <atom-icon
          fName="${AtomIconsEnum.ALERT_CIRCLE}"
          fSize="${AtomTextboxSizeEnum.MEDIUM}"
          fType="${fIconType}"
          fClass="flw-textarea__icon"
        />
      `;
        default:
            return html `
        <atom-icon
          fName="${icon}"
          fSize="${AtomTextboxSizeEnum.MEDIUM}"
          fType="${fIconType}"
          fClass="flw-textarea__icon"
        />
      `;
    }
}
let AtomTextareaComponent = class AtomTextareaComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fName = '';
        this.fValue = '';
        this.fLabel = '';
        this.fStatus = AtomTextareaStatusEnum.DEFAULT;
        this.fIsDisabled = false;
        this.fIsReadonly = false;
        this.fHasIcon = false;
        this.fIcon = AtomIconsEnum.BELL_ON;
        this.fIconType = AtomIconsTypeEnum.OUTLINE;
        this.fPlaceholder = '';
        this.fSize = AtomTextareaSizeEnum.MEDIUM;
        this.fResize = AtomTextareaResizeEnum.BOTH;
        this.fHasHelperText = false;
        this.fHelperText = '';
        this.fFloatLabel = false;
        this.fIsRequired = false;
    }
    render() {
        return html `
      <div
        class="flw-textarea 
          ${this.fFloatLabel ? 'flw-textarea-float-label' : ''}  
          ${this.fSize} 
          ${this.fIsDisabled ? 'flw-textarea--disabled' : `${this.fStatus}`} 
          ${this.fClass}"
      >
        ${this.fLabel
            ? html `<label
              for="${this.fId}"
              class="flw-textarea__label ${this.fStatus}"
              >${this.fLabel}
              ${this.fIsRequired
                ? html `<span class="flw-textbox__required">*</span>`
                : ''}
            </label> `
            : ''}
        <textarea
          id="${this.fId}"
          ?disabled=${this.fIsDisabled}
          ?readonly=${this.fIsReadonly}
          name="${this.fName}"
          placeholder="${this.fPlaceholder}"
          class="flw-textarea__input ${this.fResize}"
          @input="${(e) => {
            this.fChange?.(e.target.value);
        }}"
        >
${this.fValue}</textarea
        >
        ${this.fHasIcon
            ? getIcon(this.fStatus, this.fIcon, this.fIconType)
            : ''}
        ${this.fHasHelperText
            ? html `<span class="flw-textarea__helper-text"
              >${this.fHelperText}</span
            >`
            : ''}
      </div>
    `;
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: String })
], AtomTextareaComponent.prototype, "fName", void 0);
__decorate([
    property({ type: String })
], AtomTextareaComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: String })
], AtomTextareaComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomTextareaStatusEnum })
], AtomTextareaComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextareaComponent.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextareaComponent.prototype, "fIsReadonly", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextareaComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomTextareaComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomTextareaComponent.prototype, "fIconType", void 0);
__decorate([
    property({ type: String })
], AtomTextareaComponent.prototype, "fPlaceholder", void 0);
__decorate([
    property({ type: AtomTextareaSizeEnum })
], AtomTextareaComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: AtomTextareaResizeEnum })
], AtomTextareaComponent.prototype, "fResize", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextareaComponent.prototype, "fHasHelperText", void 0);
__decorate([
    property({ type: String })
], AtomTextareaComponent.prototype, "fHelperText", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextareaComponent.prototype, "fFloatLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomTextareaComponent.prototype, "fIsRequired", void 0);
__decorate([
    event('fChange')
], AtomTextareaComponent.prototype, "fChange", void 0);
AtomTextareaComponent = __decorate([
    customElement('atom-textarea')
], AtomTextareaComponent);
export { AtomTextareaComponent };
export const Textarea = createComponent({
    tagName: 'atom-textarea',
    elementClass: AtomTextareaComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

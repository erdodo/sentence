var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomSwitchSelectionTypeEnum, AtomSwitchSizeEnum } from 'fstp-ui/src/models/atoms';
import { generateUUID } from 'fstp-ui/src/utils';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomSwitchComponents = class AtomSwitchComponents extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fSelectionType = AtomSwitchSelectionTypeEnum.FILL;
        this.fIsError = false;
        this.fHasLabel = false;
        this.fIsChecked = false;
        this.fIsDisabled = false;
        this.fLabel = '';
        this.fSize = AtomSwitchSizeEnum.MEDIUM;
        this.fName = `${generateUUID()}`;
    }
    render() {
        return html `
      <label
        class="flw-switch
      ${this.fIsDisabled ? 'flw-switch--disabled' : ''}
      ${this.fIsError ? 'flw-switch--error' : ''}
      ${this.fSelectionType === AtomSwitchSelectionTypeEnum.FILL
            ? 'flw-switch--fill'
            : ''}
      ${this.fSelectionType === AtomSwitchSelectionTypeEnum.CHECK
            ? 'flw-switch--check'
            : ''}
            ${this.fSize}"
        for="${this.fId}"
      >
        <input
          type="checkbox"
          id="${this.fId}"
          name="${this.fName}"
          ?checked=${this.fIsChecked}
          ?disabled=${this.fIsDisabled}
          class="flw-hidden"
          @change="${(e) => this.change(e)}"
        />
        <span class="flw-switch__view">
          <span class="flw-switch__knob"></span>
        </span>
        ${this.fHasLabel
            ? html `<span class="flw-switch__text">${this.fLabel}</span>`
            : ''}
      </label>
    `;
    }
    change(e) {
        this.fIsChecked = e.target.checked;
        this.fChange?.(this.fIsChecked);
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: AtomSwitchSelectionTypeEnum })
], AtomSwitchComponents.prototype, "fSelectionType", void 0);
__decorate([
    property({ type: Boolean })
], AtomSwitchComponents.prototype, "fIsError", void 0);
__decorate([
    property({ type: Boolean })
], AtomSwitchComponents.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomSwitchComponents.prototype, "fIsChecked", void 0);
__decorate([
    property({ type: Boolean })
], AtomSwitchComponents.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: String })
], AtomSwitchComponents.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomSwitchSizeEnum })
], AtomSwitchComponents.prototype, "fSize", void 0);
__decorate([
    property({ type: String })
], AtomSwitchComponents.prototype, "fName", void 0);
__decorate([
    event('fChange')
], AtomSwitchComponents.prototype, "fChange", void 0);
AtomSwitchComponents = __decorate([
    customElement('atom-switch')
], AtomSwitchComponents);
export { AtomSwitchComponents };
export const Switch = createComponent({
    tagName: 'atom-switch',
    elementClass: AtomSwitchComponents,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

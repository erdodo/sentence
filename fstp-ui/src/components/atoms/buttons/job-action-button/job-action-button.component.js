var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, AtomJobActionButtonSizeEnum, AtomJobActionButtonStatusEnum, } from 'fstp-ui/src/models/atoms';
import { tooltip } from 'fstp-ui/src/directives';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomJobActionButtonComponent = class AtomJobActionButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = AtomJobActionButtonStatusEnum.NEUTRAL;
        this.fSize = AtomJobActionButtonSizeEnum.DEFAULT;
        this.fDisabled = false;
        this.fCurrent = false;
        this.fTooltip = '';
        this.fIcon = AtomIconsEnum.PLAY_CIRCLE;
        this.fIconType = AtomIconsTypeEnum.FILL;
    }
    render() {
        return html `
      <div
        class="flw-max-w-fit ${this.fClass}"
        id="${this.fId}"
      >
        <button
          ${this.fTooltip ? tooltip(this.fTooltip, 'right') : null}
          class="
          ${this.fClass}
          flw-job-action-button 
          ${this.fDisabled
            ? 'flw-job-action-button--disabled'
            : `flw-job-action-button--${this.fStatus}`} 
        "
          type="button"
          ?disabled=${this.fDisabled}
          @click="${this.fClick}"
          id="${this.fId}"
        >
          <atom-icon
            .fName="${this.fIcon}"
            .fType="${this.fIconType}"
            .fSize="${this.fSize === AtomJobActionButtonSizeEnum.LARGE
            ? AtomIconSizeEnum.SIZE_32
            : AtomIconSizeEnum.XLARGE}"
          ></atom-icon>
        </button>
      </div>
    `;
    }
};
__decorate([
    property({ type: AtomJobActionButtonStatusEnum })
], AtomJobActionButtonComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: AtomJobActionButtonSizeEnum })
], AtomJobActionButtonComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: Boolean })
], AtomJobActionButtonComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomJobActionButtonComponent.prototype, "fCurrent", void 0);
__decorate([
    property({ type: String })
], AtomJobActionButtonComponent.prototype, "fTooltip", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomJobActionButtonComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomJobActionButtonComponent.prototype, "fIconType", void 0);
__decorate([
    event('fClick')
], AtomJobActionButtonComponent.prototype, "fClick", void 0);
AtomJobActionButtonComponent = __decorate([
    customElement('atom-job-action-button')
], AtomJobActionButtonComponent);
export { AtomJobActionButtonComponent };
export const ActionButton = createComponent({
    tagName: 'atom-job-action-button',
    elementClass: AtomJobActionButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

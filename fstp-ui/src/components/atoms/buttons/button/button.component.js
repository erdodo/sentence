var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomButtonLinkTargetTypeEnum, AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomButtonTypeEnum, AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomButtonComponent = class AtomButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = AtomButtonStatusEnum.PRIMARY;
        this.fHasLabel = false;
        this.fIsDisabled = false;
        this.fHasIcon = false;
        this.fLabel = 'Action';
        this.fShowType = AtomButtonShowTypeEnum.FILL;
        this.fSize = AtomButtonSizeEnum.MEDIUM;
        this.fType = AtomButtonTypeEnum.BUTTON;
        this.fIconType = AtomIconsTypeEnum.OUTLINE;
        this.iconSize = AtomIconSizeEnum.MEDIUM;
    }
    updated() {
        switch (this.fSize) {
            case AtomButtonSizeEnum.SMALL:
                this.iconSize = AtomIconSizeEnum.SMALL;
                break;
            case AtomButtonSizeEnum.LARGE:
                this.iconSize = AtomIconSizeEnum.LARGE;
                break;
            default:
                this.iconSize = AtomIconSizeEnum.MEDIUM;
                break;
        }
    }
    render() {
        if (this.fLink !== '') {
            return html ` <button
        id="${this.fId}"
        ?disabled="${this.fIsDisabled}"
        type="${this.fType}"
        class="flw-button 
            ${this.fClass}
            ${this.fShowType}
            ${this.fSize}
            ${!this.fHasLabel ? 'flw-button--without-label' : ''}
            ${this.fIsDisabled ? 'flw-button--disabled' : this.fStatus}
            "
        @click="${() => {
                this.fClick?.(this);
            }}"
      >
        ${this.fHasIcon
                ? html `
              <atom-icon
                fName="${this.fIcon}"
                fSize="${this.iconSize}"
                fType="${this.fIconType}"
              ></atom-icon>
            `
                : ''}
        ${this.fHasLabel ? html `<span>${this.fLabel}</span>` : ''}
      </button>`;
        }
        else {
            return html `
        <a
          id="${this.fId}"
          type="${this.fType}"
          class="flw-button 
            ${this.fClass}
            ${this.fShowType}
            ${this.fSize}
            ${this.fIsDisabled ? 'flw-button--disabled' : this.fStatus}     
            "
          href="${this.fLink}"
          target="${this.fLinkTarget}"
          @click="${() => {
                this.fClick?.(this);
            }}"
        >
          ${this.fHasIcon
                ? html `
                <atom-icon
                  fName="${AtomIconsEnum.ARROW_RIGHT}"
                  fSize="${this.iconSize}"
                ></atom-icon>
              `
                : ''}
          ${this.fHasLabel ? html `<span>${this.fLabel}</span>` : ''}
        </a>
      `;
        }
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: AtomButtonStatusEnum })
], AtomButtonComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomButtonComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomButtonComponent.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomButtonComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: String })
], AtomButtonComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomButtonShowTypeEnum })
], AtomButtonComponent.prototype, "fShowType", void 0);
__decorate([
    property({ type: AtomButtonSizeEnum })
], AtomButtonComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: AtomButtonTypeEnum })
], AtomButtonComponent.prototype, "fType", void 0);
__decorate([
    property({ type: String })
], AtomButtonComponent.prototype, "fLink", void 0);
__decorate([
    property({ type: AtomButtonLinkTargetTypeEnum })
], AtomButtonComponent.prototype, "fLinkTarget", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomButtonComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomButtonComponent.prototype, "fIconType", void 0);
__decorate([
    state()
], AtomButtonComponent.prototype, "iconSize", void 0);
__decorate([
    event('fClick')
], AtomButtonComponent.prototype, "fClick", void 0);
AtomButtonComponent = __decorate([
    customElement('atom-button')
], AtomButtonComponent);
export { AtomButtonComponent };
export const Button = createComponent({
    tagName: 'atom-button',
    elementClass: AtomButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

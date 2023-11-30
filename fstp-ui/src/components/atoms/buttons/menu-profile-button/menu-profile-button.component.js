var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, AtomMenuProfileButtonStatusEnum, AtomMenuProfileButtonTypeEnum, } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomMenuProfileButtonComponent = class AtomMenuProfileButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fImage = '';
        this.fStatus = AtomMenuProfileButtonStatusEnum.ACTIVE;
        this.fName = '';
        this.fEmail = '';
        this.fInitials = '';
        this.fType = AtomMenuProfileButtonTypeEnum.MENU;
        this._name = '';
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        //generateRipple(this.querySelector('button') as HTMLButtonElement);
    }
    render() {
        return html `
      <button
        id="${this.fId}"
        class="
            flw-menu-profile-button ${this.fClass}
            ${this.fType === AtomMenuProfileButtonTypeEnum.PROFILE
            ? 'flw-menu-profile-button--profile'
            : ''}
        "
        type="button"
        @click="${() => {
            this.fClick?.(this);
        }}"
      >
        <div class="flw-menu-profile-button__avatar">
          ${this.fInitials}
          ${this.fImage
            ? html `
                <atom-image
                  fSrc="${this.fImage}"
                  fAlt="${this.fName}"
                ></atom-image>
              `
            : ''}
          <div class="flw-menu-profile-button__status">
            ${this.fHasStatus
            ? html `<atom-icon
                  fSize="${this.fType === AtomMenuProfileButtonTypeEnum.PROFILE
                ? AtomIconSizeEnum.XLARGE
                : AtomIconSizeEnum.SMALL}"
                  fName="${this.fStatus ===
                AtomMenuProfileButtonStatusEnum.ACTIVE
                ? AtomIconsEnum.CHECKMARK_CIRCLE_2
                : AtomIconsEnum.CLOSE_CIRCLE}"
                  fType="${AtomIconsTypeEnum.FILL}"
                  fColor="${this.fStatus ===
                AtomMenuProfileButtonStatusEnum.ACTIVE
                ? CommonTextColorsEnum.SuccessCore
                : CommonTextColorsEnum.DangerCore}"
                ></atom-icon>`
            : ''}
          </div>
        </div>
        ${this.fHasName
            ? html `<div class="flw-menu-profile-button__name-area">
              <span class="flw-menu-profile-button__name"> ${this.fName} </span>
              <span class="flw-menu-profile-button__email"
                >${this.fEmail}
              </span>
            </div>`
            : ''}
      </button>
    `;
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: String })
], AtomMenuProfileButtonComponent.prototype, "fImage", void 0);
__decorate([
    property({ type: AtomMenuProfileButtonStatusEnum })
], AtomMenuProfileButtonComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: String })
], AtomMenuProfileButtonComponent.prototype, "fName", void 0);
__decorate([
    property({ type: String })
], AtomMenuProfileButtonComponent.prototype, "fEmail", void 0);
__decorate([
    property({ type: String })
], AtomMenuProfileButtonComponent.prototype, "fInitials", void 0);
__decorate([
    property({ type: Boolean })
], AtomMenuProfileButtonComponent.prototype, "fHasName", void 0);
__decorate([
    property({ type: Boolean })
], AtomMenuProfileButtonComponent.prototype, "fHasStatus", void 0);
__decorate([
    property({ type: AtomMenuProfileButtonTypeEnum })
], AtomMenuProfileButtonComponent.prototype, "fType", void 0);
__decorate([
    state()
], AtomMenuProfileButtonComponent.prototype, "_name", void 0);
__decorate([
    event('fClick')
], AtomMenuProfileButtonComponent.prototype, "fClick", void 0);
AtomMenuProfileButtonComponent = __decorate([
    customElement('atom-menu-profile-button')
], AtomMenuProfileButtonComponent);
export { AtomMenuProfileButtonComponent };
export const ProfileButton = createComponent({
    tagName: 'atom-menu-profile-button',
    elementClass: AtomMenuProfileButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomCloseButtonColorEnum, AtomCloseButtonSizeEnum, AtomIconsEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomCloseButtonComponent = class AtomCloseButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fSize = AtomCloseButtonSizeEnum.MEDIUM;
        this.fColor = AtomCloseButtonColorEnum.PRIMARY;
    }
    render() {
        return html `
      <button
        id="${this.fId}"
        class="flw-close-button flw-close-button--${this.fColor} 
            ${this.fClass}"
        @click="${() => {
            this.fClick?.(this);
        }}"
        type="button"
      >
        <atom-icon
          fName="${AtomIconsEnum.CLOSE_DEFAULT}"
          fSize="${this.getIconSize()}"
        ></atom-icon>
      </button>
    `;
    }
    getIconSize() {
        switch (this.fSize) {
            case AtomCloseButtonSizeEnum.SMALL:
                return 16;
            case AtomCloseButtonSizeEnum.MEDIUM:
                return 24;
            case AtomCloseButtonSizeEnum.LARGE:
                return 32;
            default:
                return 24;
        }
    }
};
__decorate([
    property({ type: AtomCloseButtonSizeEnum })
], AtomCloseButtonComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: AtomCloseButtonColorEnum })
], AtomCloseButtonComponent.prototype, "fColor", void 0);
__decorate([
    event('fClick')
], AtomCloseButtonComponent.prototype, "fClick", void 0);
AtomCloseButtonComponent = __decorate([
    customElement('atom-close-button')
], AtomCloseButtonComponent);
export { AtomCloseButtonComponent };
export const CloseButton = createComponent({
    tagName: 'atom-close-button',
    elementClass: AtomCloseButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

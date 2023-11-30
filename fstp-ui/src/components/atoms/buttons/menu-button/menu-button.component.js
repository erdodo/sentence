var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, AtomMenuButtonTypeEnum, } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
import { tooltip } from 'fstp-ui/src/directives';
let AtomMenuButtonComponent = class AtomMenuButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fDisabled = false;
        this.fTooltip = '';
        this.fCurrent = false;
        this.fHasNotification = false;
        this.fType = AtomMenuButtonTypeEnum.SIDEBAR;
        this.fIcon = AtomIconsEnum.GRID;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
    }
    render() {
        return html `
      <button
        ${this.fTooltip && tooltip(this.fTooltip, 'right')}
        id="${this.fId}"
        class="
            flw-menu-button 
            ${this.fDisabled ? 'flw-menu-button--disabled' : ''}
            ${this.fType === AtomMenuButtonTypeEnum.HEADER && this.fCurrent
            ? 'flw-menu-button--current'
            : ''}
            flw-menu-button--${AtomMenuButtonTypeEnum.HEADER}
            ${this.fClass}
        "
        type="button"
        @click="${() => {
            this.fClick?.(this);
        }}"
      >
        <atom-icon
          fName="${this.fIcon}"
          fSize="${AtomIconSizeEnum.XLARGE}"
          fType="${this.fType === AtomMenuButtonTypeEnum.SIDEBAR &&
            !this.fCurrent
            ? AtomIconsTypeEnum.OUTLINE
            : AtomIconsTypeEnum.FILL}"
        ></atom-icon>
        ${this.fHasNotification
            ? html `<div class="flw-menu-button__notification"></div>`
            : ''}
        <slot></slot>
      </button>
    `;
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: Boolean })
], AtomMenuButtonComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: String })
], AtomMenuButtonComponent.prototype, "fTooltip", void 0);
__decorate([
    property({ type: Boolean })
], AtomMenuButtonComponent.prototype, "fCurrent", void 0);
__decorate([
    property({ type: Boolean })
], AtomMenuButtonComponent.prototype, "fHasNotification", void 0);
__decorate([
    property({ type: AtomMenuButtonTypeEnum })
], AtomMenuButtonComponent.prototype, "fType", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomMenuButtonComponent.prototype, "fIcon", void 0);
__decorate([
    event('fClick')
], AtomMenuButtonComponent.prototype, "fClick", void 0);
AtomMenuButtonComponent = __decorate([
    customElement('atom-menu-button')
], AtomMenuButtonComponent);
export { AtomMenuButtonComponent };
export const MenuButton = createComponent({
    tagName: 'atom-menu-button',
    elementClass: AtomMenuButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, AtomMenuThemeButtonTypeEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomMenuThemeButtonComponent = class AtomMenuThemeButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fDisabled = false;
        this.fCurrent = false;
        this.fType = AtomMenuThemeButtonTypeEnum.OS_DEFAULT;
    }
    render() {
        return html `
      <button
        id="${this.fId}"
        class="
            flw-menu-theme-button 
            ${this.fDisabled ? 'flw-menu-theme-button--disabled' : ''}
            ${this.fCurrent ? 'flw-menu-theme-button--current' : ''}
            ${this.fClass}
        "
        type="button"
        @click="${() => {
            this.fClick?.(this);
        }}"
      >
        <atom-icon
          fName="${this.getIconName()}"
          fSize="${AtomIconSizeEnum.XLARGE}"
          fType="${AtomIconsTypeEnum.FILL}"
        ></atom-icon>
      </button>
    `;
    }
    getIconName() {
        switch (this.fType) {
            case AtomMenuThemeButtonTypeEnum.OS_DEFAULT:
                return AtomIconsEnum.LIGHT_DARK;
            case AtomMenuThemeButtonTypeEnum.LIGHT:
                return AtomIconsEnum.SUN;
            case AtomMenuThemeButtonTypeEnum.DARK:
                return AtomIconsEnum.MOON;
            default:
                return AtomIconsEnum.LIGHT_DARK;
        }
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: Boolean })
], AtomMenuThemeButtonComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomMenuThemeButtonComponent.prototype, "fCurrent", void 0);
__decorate([
    property({ type: AtomMenuThemeButtonTypeEnum })
], AtomMenuThemeButtonComponent.prototype, "fType", void 0);
__decorate([
    event('fClick')
], AtomMenuThemeButtonComponent.prototype, "fClick", void 0);
AtomMenuThemeButtonComponent = __decorate([
    customElement('atom-menu-theme-button')
], AtomMenuThemeButtonComponent);
export { AtomMenuThemeButtonComponent };
export const ThemeButton = createComponent({
    tagName: 'atom-menu-theme-button',
    elementClass: AtomMenuThemeButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

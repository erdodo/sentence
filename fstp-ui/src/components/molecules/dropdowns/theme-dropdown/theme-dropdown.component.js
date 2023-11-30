var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { MoleculeThemeDropdownDefaultEnum, } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeThemeDropdownComponent = class MoleculeThemeDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fOsDefaultText = 'OS Default';
        this.fDarkText = 'Dark';
        this.fLightText = 'Light';
        this.items = [
            {
                fIcon: AtomIconsEnum.LIGHT_DARK,
                fLabel: this.fOsDefaultText,
                fHasIcon: true,
                fId: MoleculeThemeDropdownDefaultEnum.OS_DEFAULT,
            },
            {
                fIcon: AtomIconsEnum.MOON,
                fLabel: this.fDarkText,
                fHasIcon: true,
                fId: MoleculeThemeDropdownDefaultEnum.DARK,
            },
            {
                fIcon: AtomIconsEnum.SUN,
                fLabel: this.fLightText,
                fHasIcon: true,
                fId: MoleculeThemeDropdownDefaultEnum.LIGHT,
            },
        ];
    }
    render() {
        return html `
      <molecule-dropdown
        fPlacement="bottom"
        .fItems="${this.items}"
        @fClick="${(e) => {
            this.changeTheme(e);
        }}"
      >
        <div
          class="flw-theme-dropdown__trigger"
          slot="trigger"
        >
          ${this.getMenuThemeButtonType()}
        </div>
      </molecule-dropdown>
    `;
    }
    getMenuThemeButtonType() {
        switch (this.fDefault) {
            case MoleculeThemeDropdownDefaultEnum.DARK:
                return html `<atom-menu-theme-button
          fType="dark"
        ></atom-menu-theme-button>`;
            case MoleculeThemeDropdownDefaultEnum.LIGHT:
                return html `<atom-menu-theme-button
          fType="light"
        ></atom-menu-theme-button>`;
            case MoleculeThemeDropdownDefaultEnum.OS_DEFAULT:
                return html `<atom-menu-theme-button
          fType="os-default"
        ></atom-menu-theme-button>`;
            default:
                return html `<atom-menu-theme-button
          fType="light"
        ></atom-menu-theme-button>`;
        }
    }
    changeTheme(e) {
        const { fId } = e.detail;
        this.fDefault = fId;
        this.fChange?.(fId);
        this.items = this.items.map((item) => ({
            ...item,
            fCurrent: item.fId === fId,
        }));
    }
};
__decorate([
    property({ type: String })
], MoleculeThemeDropdownComponent.prototype, "fDefault", void 0);
__decorate([
    property({ type: String })
], MoleculeThemeDropdownComponent.prototype, "fOsDefaultText", void 0);
__decorate([
    property({ type: String })
], MoleculeThemeDropdownComponent.prototype, "fDarkText", void 0);
__decorate([
    property({ type: String })
], MoleculeThemeDropdownComponent.prototype, "fLightText", void 0);
__decorate([
    event('fChange')
], MoleculeThemeDropdownComponent.prototype, "fChange", void 0);
__decorate([
    state()
], MoleculeThemeDropdownComponent.prototype, "items", void 0);
MoleculeThemeDropdownComponent = __decorate([
    customElement('molecule-theme-dropdown')
], MoleculeThemeDropdownComponent);
export { MoleculeThemeDropdownComponent };
export const ThemeDropdown = createComponent({
    tagName: 'molecule-theme-dropdown',
    elementClass: MoleculeThemeDropdownComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

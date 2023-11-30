var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property } from 'fstp-ui/src/components/base.component';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { AtomIconsFlagEnum, AtomIconSizeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeLanguageItemDropdownComponent = class MoleculeLanguageItemDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fText = '';
        this.fIcon = AtomIconsFlagEnum.TURKISH;
    }
    render() {
        return html `<molecule-dropdown-item class="flw-w-full">
      <div class="flw-language-dropdown-item">
        <div class="flw-language-dropdown-item__status">
          <atom-icon
            fSize="${AtomIconSizeEnum.XLARGE}"
            fType="flag"
            fFlags="${this.fIcon}"
          ></atom-icon>
        </div>
        <div class="flw-language-dropdown-item__content">
          <span class="flw-language-dropdown-item__title"> ${this.fText} </span>
        </div>
      </div>
    </molecule-dropdown-item>`;
    }
};
__decorate([
    property({ type: String })
], MoleculeLanguageItemDropdownComponent.prototype, "fText", void 0);
__decorate([
    property({ type: AtomIconsFlagEnum })
], MoleculeLanguageItemDropdownComponent.prototype, "fIcon", void 0);
MoleculeLanguageItemDropdownComponent = __decorate([
    customElement('molecule-language-dropdown-item')
], MoleculeLanguageItemDropdownComponent);
export { MoleculeLanguageItemDropdownComponent };
export const LanguageDropdownItem = createComponent({
    tagName: 'molecule-language-dropdown-item',
    elementClass: MoleculeLanguageItemDropdownComponent,
    react: React,
});

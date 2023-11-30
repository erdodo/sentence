var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { MoleculeDropdownPlacement, } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { IPopperEventsEnum, fPopper } from 'fstp-ui/src/functions';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeLanguageDropdownComponent = class MoleculeLanguageDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fShowEvents = [IPopperEventsEnum.CLICK];
        this.fHideEvents = [IPopperEventsEnum.OUTSIDE_CLICK];
        this.fPlacement = MoleculeDropdownPlacement.BOTTOM_END;
        this.fHasHeader = false;
        this.fCount = 0;
        this.fHasLanguage = false;
        this.getList = (list) => {
            return html `
      ${list && list.length >= 0
                ? list.map((item) => {
                    return html `
              <molecule-language-dropdown-item
                fText="${item.fText}"
                fIcon="${item.fIcon}"
                class="flw-w-full"
                @click="${() => {
                        this.fClick?.(item);
                    }}"
              >
              </molecule-language-dropdown-item>
            `;
                })
                : html `<slot></slot>`}
    `;
        };
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        fPopper({
            trigger: this.dropdownTrigger,
            menu: this.dropdownContent,
            options: {
                placement: this.fPlacement,
                showEvent: this.fShowEvents,
                hideEvent: this.fHideEvents,
            },
        });
    }
    render() {
        return html `
      <div class="flw-language-dropdown">
        <div class="flw-language-dropdown__trigger">
          <atom-menu-button
            fIcon="${AtomIconsEnum.GLOBE_3}"
            fType="header"
            .fHasLanguage="${this.fHasLanguage}"
          />
        </div>
        <div class="flw-language-dropdown__content flw-dropdown__menu">
          ${this.getList(this.fItems)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeLanguageDropdownComponent.prototype, "fShowEvents", void 0);
__decorate([
    property({ type: Array })
], MoleculeLanguageDropdownComponent.prototype, "fHideEvents", void 0);
__decorate([
    property({ type: String })
], MoleculeLanguageDropdownComponent.prototype, "fPlacement", void 0);
__decorate([
    property({ type: Array })
], MoleculeLanguageDropdownComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeLanguageDropdownComponent.prototype, "fHasHeader", void 0);
__decorate([
    property({ type: Number })
], MoleculeLanguageDropdownComponent.prototype, "fCount", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeLanguageDropdownComponent.prototype, "fHasLanguage", void 0);
__decorate([
    event('fClick')
], MoleculeLanguageDropdownComponent.prototype, "fClick", void 0);
__decorate([
    query('.flw-language-dropdown__trigger')
], MoleculeLanguageDropdownComponent.prototype, "dropdownTrigger", void 0);
__decorate([
    query('.flw-language-dropdown__content')
], MoleculeLanguageDropdownComponent.prototype, "dropdownContent", void 0);
__decorate([
    state()
], MoleculeLanguageDropdownComponent.prototype, "getList", void 0);
MoleculeLanguageDropdownComponent = __decorate([
    customElement('molecule-language-dropdown')
], MoleculeLanguageDropdownComponent);
export { MoleculeLanguageDropdownComponent };
export const LanguageDropdown = createComponent({
    tagName: 'molecule-language-dropdown',
    elementClass: MoleculeLanguageDropdownComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

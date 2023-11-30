var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, state, } from 'fstp-ui/src/components/base.component';
import { CommonBgColorsEnum, CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, AtomListSizeEnum, AtomListStatusEnum, AtomListTypeEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
function setStatus(fStatus) {
    switch (fStatus) {
        case AtomListStatusEnum.PRIMARY:
            return {
                icon: CommonTextColorsEnum.PrimaryCore,
                bg: CommonBgColorsEnum.PrimaryCore,
            };
        case AtomListStatusEnum.SECONDARY:
            return {
                icon: CommonTextColorsEnum.SecondaryCore,
                bg: CommonBgColorsEnum.SecondaryCore,
            };
        case AtomListStatusEnum.INFO:
            return {
                icon: CommonTextColorsEnum.InfoCore,
                bg: CommonBgColorsEnum.InfoCore,
            };
        case AtomListStatusEnum.SUCCESS:
            return {
                icon: CommonTextColorsEnum.SuccessCore,
                bg: CommonBgColorsEnum.SuccessCore,
            };
        case AtomListStatusEnum.DANGER:
            return {
                icon: CommonTextColorsEnum.DangerCore,
                bg: CommonBgColorsEnum.DangerCore,
            };
        case AtomListStatusEnum.WARNING:
            return {
                icon: CommonTextColorsEnum.WarningCore,
                bg: CommonBgColorsEnum.WarningCore,
            };
    }
}
let AtomListComponent = class AtomListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fType = AtomListTypeEnum.UL;
        this.fLiClass = '';
        this.fItems = [];
        this.fSize = AtomListSizeEnum.MEDIUM;
        this.fStatus = AtomListStatusEnum.SECONDARY;
        this.status = setStatus(this.fStatus);
    }
    render() {
        this.status = setStatus(this.fStatus);
        if (this.fType === AtomListTypeEnum.UL) {
            return html `
        <ul class="flw-ul ${this.fClass}">
          ${this.fItems.map((item, key) => html `<li
                key="li_${key}"
                class="${this.fLiClass}"
              >
                <atom-icon
                  fName="${AtomIconsEnum.BULLET}"
                  fColor="${this.status.icon}"
                  fSize="${AtomIconSizeEnum.XLARGE}"
                  fType="${AtomIconsTypeEnum.OUTLINE}"
                ></atom-icon>
                <p class="${this.fSize}">${item}</p>
              </li>`)}
        </ul>
      `;
        }
        else {
            return html `
        <ol class="flw-ol ${this.fClass}">
          ${this.fItems.map((item, key) => html `<li
                key="li_${key}"
                class="${this.fLiClass}"
              >
                <span class="flw-p-4">
                  <span class="flw-ol__number ${this.status.bg}">
                    ${key + 1}
                  </span>
                </span>
                <p class="${this.fSize}">${item}</p>
              </li>`)}
        </ol>
      `;
        }
    }
};
__decorate([
    property({ type: AtomListTypeEnum })
], AtomListComponent.prototype, "fType", void 0);
__decorate([
    property({ type: String })
], AtomListComponent.prototype, "fLiClass", void 0);
__decorate([
    property({ type: Array })
], AtomListComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: AtomListSizeEnum })
], AtomListComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: AtomListStatusEnum })
], AtomListComponent.prototype, "fStatus", void 0);
__decorate([
    state()
], AtomListComponent.prototype, "status", void 0);
AtomListComponent = __decorate([
    customElement('atom-list')
], AtomListComponent);
export { AtomListComponent };
export const List = createComponent({
    tagName: 'atom-list',
    elementClass: AtomListComponent,
    react: React,
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent from 'fstp-ui/src/components/base.component';
import { AtomHeadingLevelEnum, AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MoleculeAlertIconEnum, MoleculeAlertTypeEnum, } from 'fstp-ui/src/models/molecules';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomAlertComponent = class AtomAlertComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fIcon = AtomIconsEnum.CHECKMARK_CIRCLE_2;
        this.fTitle = '';
        this.fHasTitle = false;
        this.fHasCloseButton = false;
        this.fParagraph = '';
        this.fType = MoleculeAlertTypeEnum.SUCCESS;
        this.getIcon = () => {
            const type = this.fType.toUpperCase();
            const validIconEnum = MoleculeAlertIconEnum;
            return validIconEnum[type];
        };
    }
    render() {
        return html `
      <div
        id="${this.fId}"
        class="
          flw-alert
          ${this.fHasTitle ? '' : 'flw-alert-without-heading'}
          flw-bg-${this.fType}-clear
          ${this.fClass}
          "
      >
        <atom-icon
          fSize="${AtomIconSizeEnum.LARGE}"
          fName="${this.getIcon()}"
          fColor="flw-text-${this.fType}-core"
        ></atom-icon>
        <div>
          ${this.fHasTitle
            ? html ` <atom-heading
                fLevel="${AtomHeadingLevelEnum.Level6}"
                fText="${this.fTitle}"
                fColor="flw-text-${this.fType}-core"
              ></atom-heading>`
            : ''}
          <atom-paragraph
            fText="${this.fParagraph}"
            fColor="flw-text-${this.fType}-core"
          ></atom-paragraph>
        </div>
        ${this.fHasCloseButton
            ? html ` <button
              class="flw-alert__close-button"
              @click="${(event) => {
                event.currentTarget.parentElement?.remove();
            }}"
              type="button"
            >
              <atom-icon
                fColor="flw-text-${this.fType}-core"
                fName="close-default"
                fSize="${AtomIconSizeEnum.MEDIUM}"
                fType="${AtomIconsTypeEnum.OUTLINE}"
              />
            </button>`
            : ''}
      </div>
    `;
    }
};
__decorate([
    property({ type: AtomIconsEnum })
], AtomAlertComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: String })
], AtomAlertComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: Boolean })
], AtomAlertComponent.prototype, "fHasTitle", void 0);
__decorate([
    property({ type: Boolean })
], AtomAlertComponent.prototype, "fHasCloseButton", void 0);
__decorate([
    property({ type: String })
], AtomAlertComponent.prototype, "fParagraph", void 0);
__decorate([
    property({ type: MoleculeAlertTypeEnum })
], AtomAlertComponent.prototype, "fType", void 0);
AtomAlertComponent = __decorate([
    customElement('molecule-alert')
], AtomAlertComponent);
export { AtomAlertComponent };
export const Alert = createComponent({
    tagName: 'molecule-alert',
    elementClass: AtomAlertComponent,
    react: React,
});

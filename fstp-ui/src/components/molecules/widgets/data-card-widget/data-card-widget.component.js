var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum } from 'fstp-ui/src/models/atoms';
import { MoleculeDataCardWidgetPropsIconStatusEnum } from 'fstp-ui/src/models/molecules';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeDataCardWidgetComponent = class MoleculeDataCardWidgetComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fTitle = '';
        this.fSubTitle = '';
        this.fIcon = AtomIconsEnum.ACTIVITY;
        this.fIconStatus = MoleculeDataCardWidgetPropsIconStatusEnum.PRIMARY;
        this.fTitleSize = '';
        this.fTitleIsBold = false;
        this.fTitleColor = '';
        this.fTitleIsItalic = false;
        this.fSubTitleSize = '';
        this.fSubTitleIsBold = false;
        this.fSubTitleColor = '';
        this.fSubTitleIsItalic = false;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.parentElement?.setAttribute('fClass', 'flw-data-card-widget--card');
    }
    render() {
        return html `
      <div class="flw-data-card-widget">
        <div class="flw-data-card-widget__data">
          <div
            class="flw-data-card-widget__icon flw-bg-${this
            .fIconStatus}-clear flw-text-${this.fIconStatus}-emphasis"
          >
            <atom-icon
              fName="${this.fIcon}"
              fSize="${AtomIconSizeEnum.SIZE_40}"
            ></atom-icon>
          </div>
          <span
            class="flw-data-card-widget__value"
            style="
                font-size: ${this.fTitleSize}; 
                color: ${this.fTitleColor}; 
                font-weight: ${this.fTitleIsBold ? 'bold' : 'normal'}; 
                font-style: ${this.fTitleIsItalic ? 'italic' : 'normal'};
              "
            >${this.fTitle}</span
          >
        </div>
        <span
          class="flw-data-card-widget__text"
          style="
              font-size: ${this.fSubTitleSize}; 
              color: ${this.fSubTitleColor}; 
              font-weight: ${this.fSubTitleIsBold ? 'bold' : 'normal'}; 
              font-style: ${this.fSubTitleIsItalic ? 'italic' : 'normal'};
            "
          >${this.fSubTitle}</span
        >
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fSubTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: MoleculeDataCardWidgetPropsIconStatusEnum })
], MoleculeDataCardWidgetComponent.prototype, "fIconStatus", void 0);
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fTitleSize", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDataCardWidgetComponent.prototype, "fTitleIsBold", void 0);
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fTitleColor", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDataCardWidgetComponent.prototype, "fTitleIsItalic", void 0);
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fSubTitleSize", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDataCardWidgetComponent.prototype, "fSubTitleIsBold", void 0);
__decorate([
    property({ type: String })
], MoleculeDataCardWidgetComponent.prototype, "fSubTitleColor", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDataCardWidgetComponent.prototype, "fSubTitleIsItalic", void 0);
MoleculeDataCardWidgetComponent = __decorate([
    customElement('molecule-data-card-widget')
], MoleculeDataCardWidgetComponent);
export { MoleculeDataCardWidgetComponent };
export const DataCard = createComponent({
    tagName: 'molecule-data-card-widget',
    elementClass: MoleculeDataCardWidgetComponent,
    react: React,
});

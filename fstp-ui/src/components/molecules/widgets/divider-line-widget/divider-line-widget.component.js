var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, customElement, property } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeDividerLineWidgetComponent = class MoleculeDividerLineWidgetComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fTitle = '';
        this.fTitleSize = '';
        this.fTitleIsBold = false;
        this.fTitleColor = '';
        this.fTitleIsItalic = false;
        this.fIcon = AtomIconsEnum.CLOCK;
    }
    render() {
        return html `
      <div
        class=" flw-card flw-divider-line-widget"
        style="
          font-size: ${this.fTitleSize}; 
          color: ${this.fTitleColor}; 
          font-weight: ${this.fTitleIsBold ? 'bold' : 'normal'}; 
          font-style: ${this.fTitleIsItalic ? 'italic' : 'normal'};
        "
      >
        <atom-icon .fName="${this.fIcon}"></atom-icon>

        ${this.fTitle}
        <div class="flw-divider-line-widget--line"></div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], MoleculeDividerLineWidgetComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeDividerLineWidgetComponent.prototype, "fTitleSize", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDividerLineWidgetComponent.prototype, "fTitleIsBold", void 0);
__decorate([
    property({ type: String })
], MoleculeDividerLineWidgetComponent.prototype, "fTitleColor", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDividerLineWidgetComponent.prototype, "fTitleIsItalic", void 0);
__decorate([
    property({ type: String })
], MoleculeDividerLineWidgetComponent.prototype, "fIcon", void 0);
MoleculeDividerLineWidgetComponent = __decorate([
    customElement('molecule-divider-line-widget')
], MoleculeDividerLineWidgetComponent);
export { MoleculeDividerLineWidgetComponent };
export const DividerLine = createComponent({
    tagName: 'molecule-divider-line-widget',
    elementClass: MoleculeDividerLineWidgetComponent,
    react: React,
});

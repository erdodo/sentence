var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeGroupedDataCardWidgetComponent = class MoleculeGroupedDataCardWidgetComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = [];
    }
    render() {
        return html `
      <div class="flw-grouped-data-card-widget">
        ${this.fItems.map((item, index) => this.getItemTemplate(item, index))}
      </div>
    `;
    }
    getItemTemplate(item, index) {
        return html `<div class="flw-grouped-data-card-widget__item">
      <div class="flw-grouped-data-card-widget__item-data">
        <span class="flw-grouped-data-card-widget__item-data-label"
          >${item.fLabel}</span
        >
        <span class="flw-grouped-data-card-widget__item-data-value"
          >${item.fValue}</span
        >
      </div>
      <atom-progress-bar
        class="flw-w-full"
        .fValue="${item.fProgressValue}"
        .fStatus="${item.fProgressType}"
      ></atom-progress-bar>
      ${item.fHasDescription
            ? html `<span class="flw-grouped-data-card-widget__item-description"
            >${item.fDescription}</span
          >`
            : html ``}
      ${index !== this.fItems.length - 1
            ? html `<div class="flw-grouped-data-card-widget__item-divider"></div>`
            : html ``}
    </div>`;
    }
};
__decorate([
    property({ type: Array })
], MoleculeGroupedDataCardWidgetComponent.prototype, "fItems", void 0);
MoleculeGroupedDataCardWidgetComponent = __decorate([
    customElement('molecule-grouped-data-card-widget')
], MoleculeGroupedDataCardWidgetComponent);
export { MoleculeGroupedDataCardWidgetComponent };
export const GroupedDataCard = createComponent({
    tagName: 'molecule-grouped-data-card-widget',
    elementClass: MoleculeGroupedDataCardWidgetComponent,
    react: React,
});

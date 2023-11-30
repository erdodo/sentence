var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, event, customElement, property, } from 'fstp-ui/src/components/base.component';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeToolsComponent = class MoleculeToolsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = [];
    }
    render() {
        return html `
      <div class="flw-tools">
        ${this.fItems?.map((item, index) => html `
            <atom-dashboard-tool-button
              fTooltip="${item.fTooltip}"
              fIcon="${item.fIcon}"
              @click="${() => {
            this.fClick?.(item);
        }}"
            ></atom-dashboard-tool-button>
            ${this.fItems && index < this.fItems.length - 1
            ? html `<div class="flw-tools--line"></div>`
            : html ``}
          `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], MoleculeToolsComponent.prototype, "fItems", void 0);
__decorate([
    event('fClick')
], MoleculeToolsComponent.prototype, "fClick", void 0);
MoleculeToolsComponent = __decorate([
    customElement('molecule-tools')
], MoleculeToolsComponent);
export { MoleculeToolsComponent };
export const Tools = createComponent({
    tagName: 'molecule-tools',
    elementClass: MoleculeToolsComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

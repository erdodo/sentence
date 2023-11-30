var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeDefaultCardComponent = class MoleculeDefaultCardComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fMoreItems = [];
        this.fTitle = '';
        this.fDescription = '';
        this.fHasHeader = false;
        this.fHasLoader = false;
    }
    render() {
        return html `
      <div class="flw-card ${this.fClass}">
        ${this.fHasHeader
            ? html `
              <div class="flw-card__header">
                <h2 class="flw-card__header__title">${this.fTitle}</h2>
                <p class="flw-card__header__description">
                  ${this.fDescription}
                </p>
              </div>
            `
            : html ``}

        <div class="flw-card__body"><slot></slot></div>
        ${this.fHasLoader
            ? html `<div class="flw-card__loader">
              <atom-loader fType="small"></atom-loader>
            </div>`
            : html ``}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeDefaultCardComponent.prototype, "fMoreItems", void 0);
__decorate([
    property({ type: String })
], MoleculeDefaultCardComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeDefaultCardComponent.prototype, "fDescription", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDefaultCardComponent.prototype, "fHasHeader", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDefaultCardComponent.prototype, "fHasLoader", void 0);
MoleculeDefaultCardComponent = __decorate([
    customElement('molecule-card-default')
], MoleculeDefaultCardComponent);
export { MoleculeDefaultCardComponent };
export const Card = createComponent({
    tagName: 'molecule-card-default',
    elementClass: MoleculeDefaultCardComponent,
    react: React,
});

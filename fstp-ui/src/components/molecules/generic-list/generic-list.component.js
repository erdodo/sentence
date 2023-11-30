var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, state, customElement, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeGenericListDefaultItems } from '../../../models/molecules/generic-list/generic-list.constant';
import { AtomIconSizeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeGenericListComponent = class MoleculeGenericListComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = MoleculeGenericListDefaultItems;
        this.items = [];
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fItems')) {
            this.items = this.fItems;
        }
    }
    render() {
        return html `
      <div class="flw-generic-list ${this.fClass}">
        ${this.items.map((item) => this.getItem(item))}
      </div>
    `;
    }
    getItem(item) {
        return html `
      <button
        class="flw-generic-list__item 
            ${item.fDisabled ? 'flw-generic-list__item--disabled' : ''}
            ${item.fCurrent ? 'flw-generic-list__item--current' : ''}
        "
        type="button"
        @click="${() => {
            this.fClick?.(item);
        }}"
        ?disabled="${item.fDisabled}"
      >
        <div
          class="flw-generic-list__item-icon flw-generic-list__item-icon--${item.fStatus}"
        >
          <atom-icon
            .fName="${item.fIcon}"
            .fType="${item.fIconType}"
            fSize="${AtomIconSizeEnum.XLARGE}"
          ></atom-icon>
        </div>
        <div class="flw-generic-list__item-content">
          <atom-heading fLevel="6">${item.fTitle}</atom-heading>
          <atom-paragraph fSize="small">${item.fSubtitle}</atom-paragraph>
        </div>
      </button>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeGenericListComponent.prototype, "fItems", void 0);
__decorate([
    state()
], MoleculeGenericListComponent.prototype, "items", void 0);
__decorate([
    event('fClick')
], MoleculeGenericListComponent.prototype, "fClick", void 0);
MoleculeGenericListComponent = __decorate([
    customElement('molecule-generic-list')
], MoleculeGenericListComponent);
export { MoleculeGenericListComponent };
export const GenericList = createComponent({
    tagName: 'molecule-generic-list',
    elementClass: MoleculeGenericListComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

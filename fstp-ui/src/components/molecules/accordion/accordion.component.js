var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, event, state, customElement, } from 'fstp-ui/src/components/base.component';
import { MoleculeAccordionDefaultItems, } from 'fstp-ui/src/models/molecules';
import { AtomIconsEnum, AtomIconSizeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeAccordionComponent = class MoleculeAccordionComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = MoleculeAccordionDefaultItems;
        this.items = [];
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        this.items = this.fItems;
    }
    render() {
        return html `
      <div class="flw-accordion">
        ${this.items.map((item) => this.getItem(item))}
      </div>
    `;
    }
    getItem(item) {
        return html `<button
        type="button"
        class="flw-accordion__item 
        ${item.fDisabled ? 'flw-accordion_item--disabled' : ''}
        ${item.fIsOpen ? 'flw-accordion_item--opened' : ''}
      "
        ?disabled="${item.fDisabled}"
        @click="${() => this.toggleItem(item)}"
      >
        <atom-heading
          fLevel="6"
          fColor=" "
          >${item.fTitle}</atom-heading
        >
        ${this.getIcon(item)}
      </button>
      <div
        class="${item.fIsOpen
            ? 'flw-accordion_content--opened'
            : 'flw-accordion_content--closed'}"
      >
        <slot name="${item.fValue}"></slot>
      </div> `;
    }
    toggleItem(item) {
        if (item.fDisabled) {
            return;
        }
        if (this.fIsMultiple) {
            this.items = this.fItems.map((item2) => {
                if (item2.fValue === item.fValue) {
                    item2.fIsOpen = !item2.fIsOpen;
                }
                return item;
            });
        }
        else {
            this.items = this.fItems.map((item2) => {
                if (item2.fValue === item.fValue) {
                    item2.fIsOpen = !item2.fIsOpen;
                }
                else {
                    item2.fIsOpen = false;
                }
                return item;
            });
        }
        this.fClick?.(item);
        this.fChange?.(this.items);
    }
    getIcon(item) {
        if (item.fIsOpen) {
            return html ` <atom-icon
        .fName="${AtomIconsEnum.CLOSE_CIRCLE}"
        fSize="${AtomIconSizeEnum.XLARGE}"
      ></atom-icon>`;
        }
        else {
            return html ` <atom-icon
        .fName="${AtomIconsEnum.PLUS_CIRCLE}"
        fSize="${AtomIconSizeEnum.XLARGE}"
      ></atom-icon>`;
        }
    }
};
__decorate([
    property({ type: Array })
], MoleculeAccordionComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeAccordionComponent.prototype, "fIsMultiple", void 0);
__decorate([
    state()
], MoleculeAccordionComponent.prototype, "items", void 0);
__decorate([
    event('fChange')
], MoleculeAccordionComponent.prototype, "fChange", void 0);
__decorate([
    event('fClick')
], MoleculeAccordionComponent.prototype, "fClick", void 0);
MoleculeAccordionComponent = __decorate([
    customElement('molecule-accordion')
], MoleculeAccordionComponent);
export { MoleculeAccordionComponent };
export const Accordion = createComponent({
    tagName: 'molecule-accordion',
    elementClass: MoleculeAccordionComponent,
    react: React,
    events: {
        fChange: 'fChange',
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, query, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
import { fPopper } from 'fstp-ui/src/functions';
let MoleculeNodeDropdownComponent = class MoleculeNodeDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = [];
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        fPopper({
            trigger: this.trigger,
            menu: this.items,
            options: {
                placement: 'right-start',
            },
        });
    }
    render() {
        return html `
      <div
        class="${this.fClass} flw-node-dropdown-trigger flw-w-min"
        id="${this.fId}"
      >
        <atom-job-action-button
          fStatus="primary"
          fSize="large"
          fIcon="${AtomIconsEnum.PLUS_DEFAULT}"
        ></atom-job-action-button>
      </div>
      <div class="flw-node-dropdown-items flw-dropdown__menu">
        ${this.fItems.map((item) => html `
            <atom-heading
              fLevel="6"
              fColor="flw-text-neutral-500"
              >${item.fTitle}</atom-heading
            >
            ${item.fChildren &&
            item.fChildren.map((child) => html `
                <molecule-dropdown-item .fCurrent="${child.fActive}">
                  <div class="flw-node-dropdown__child">
                    <div
                      class="flw-node-dropdown__status flw-node-dropdown__status-${child.fStatus}"
                    >
                      <atom-icon
                        .fNodes="${child.fIcon}"
                        .fType="${AtomIconsTypeEnum.NODE}"
                        fSize="32"
                        fColor="flw-text-neutral-100"
                      ></atom-icon>
                    </div>
                    ${child.fTitle}
                  </div>
                </molecule-dropdown-item>
              `)}
          `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeNodeDropdownComponent.prototype, "fItems", void 0);
__decorate([
    query('.flw-node-dropdown-trigger')
], MoleculeNodeDropdownComponent.prototype, "trigger", void 0);
__decorate([
    query('.flw-node-dropdown-items')
], MoleculeNodeDropdownComponent.prototype, "items", void 0);
MoleculeNodeDropdownComponent = __decorate([
    customElement('molecule-node-dropdown')
], MoleculeNodeDropdownComponent);
export { MoleculeNodeDropdownComponent };
export const NodeDropdown = createComponent({
    tagName: 'molecule-node-dropdown',
    elementClass: MoleculeNodeDropdownComponent,
    react: React,
});

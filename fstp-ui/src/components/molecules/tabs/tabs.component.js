var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeTabsStatusEnum, } from 'fstp-ui/src/models/molecules';
import { dragtoscrool } from 'fstp-ui/src/directives';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeTabsComponent = class MoleculeTabsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = MoleculeTabsStatusEnum.PRIMARY;
        this.fItems = [];
    }
    render() {
        return html `
      <div
        class="flw-tabs flw-tabs--${this.fStatus} ${this.fClass}"
        ${dragtoscrool()}
      >
        <div class="flw-w-full"></div>
        ${this.fItems.map((tab) => html `<button
              type="button"
              class="flw-tabs__tab ${tab.fCurrent
            ? 'flw-tabs__tab--active'
            : ''}"
              @click="${() => {
            this.selectTab(tab);
        }}"
            >
              <div class="flw-tabs__tab--label">
                <atom-heading
                  fLevel="6"
                  fClass=""
                  fColor=" "
                  >${tab.fLabel}</atom-heading
                >
              </div>
            </button>`)}
        <div class="flw-w-full"></div>
      </div>
      ${this.fItems.map((tab) => {
            if (tab.fCurrent) {
                return html ` <slot name="${tab.fValue}"></slot>`;
            }
        })}
    `;
    }
    selectTab(tab) {
        this.fItems = this.fItems.map((item) => {
            return {
                ...item,
                fCurrent: item.fLabel === tab.fLabel,
            };
        });
        tab.fCurrent = true;
        this.fChange?.(tab);
    }
};
__decorate([
    property({ type: MoleculeTabsStatusEnum })
], MoleculeTabsComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Array })
], MoleculeTabsComponent.prototype, "fItems", void 0);
__decorate([
    event('fChange')
], MoleculeTabsComponent.prototype, "fChange", void 0);
MoleculeTabsComponent = __decorate([
    customElement('molecule-tabs')
], MoleculeTabsComponent);
export { MoleculeTabsComponent };
export const Tabs = createComponent({
    tagName: 'molecule-tabs',
    elementClass: MoleculeTabsComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

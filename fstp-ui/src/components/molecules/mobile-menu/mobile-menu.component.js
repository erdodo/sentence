var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeMobileMenuItemsDefault, } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/molecules';
import 'fstp-ui/src/components/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeMobileMenuComponent = class MoleculeMobileMenuComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = MoleculeMobileMenuItemsDefault;
    }
    render() {
        return html `
      ${this.fItems.map((menu) => html ` <div>
            <atom-heading
              fLevel="6"
              fText="${menu.fLabel}"
            ></atom-heading>
            ${menu.fChildren &&
            menu.fChildren.map((item) => html `
                <molecule-dropdown-item
                  .fLabel="${item.fLabel}"
                  .fIcon="${item.fIcon}"
                  .fClass="${item.fClass}"
                  ?fHasIcon="${item.fHasIcon}"
                  ?fOpened="${item.fOpened}"
                  ?fCurrent="${item.fCurrent}"
                  ?fDisabled="${item.fDisabled}"
                  ?fIconFill="${item.fIconFill}"
                  ?fId="${item.fId}"
                  ?fValue="${item.fValue}"
                  @fClick="${() => {
                !item.fChildren &&
                    this.fClick?.(item);
            }}"
                >
                  ${item.fChildren &&
                item.fChildren.map((child) => html `
                      <molecule-dropdown-item
                        .fLabel="${child.fLabel}"
                        .fIcon="${child.fIcon}"
                        .fClass="${child.fClass}"
                        ?fHasIcon="${child.fHasIcon}"
                        ?fOpened="${child.fOpened}"
                        ?fCurrent="${child.fCurrent}"
                        ?fDisabled="${child.fDisabled}"
                        ?fIconFill="${child.fIconFill}"
                        ?fId="${child.fId}"
                        ?fValue="${child.fValue}"
                        @fClick="${() => {
                    this.fClick?.(child);
                }}"
                      ></molecule-dropdown-item>
                    `)}
                </molecule-dropdown-item>
              `)}
          </div>`)}
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeMobileMenuComponent.prototype, "fItems", void 0);
__decorate([
    event('fClick')
], MoleculeMobileMenuComponent.prototype, "fClick", void 0);
MoleculeMobileMenuComponent = __decorate([
    customElement('molecule-mobile-menu')
], MoleculeMobileMenuComponent);
export { MoleculeMobileMenuComponent };
export const MobileMenu = createComponent({
    tagName: 'molecule-mobile-menu',
    elementClass: MoleculeMobileMenuComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

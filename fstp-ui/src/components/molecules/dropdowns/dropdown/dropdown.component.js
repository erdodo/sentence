var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { MoleculeDropdownPlacement, } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { IPopperEventsEnum, fPopper, } from 'fstp-ui/src/functions';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeDropdownComponent = class MoleculeDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fShowEvents = [
            IPopperEventsEnum.CLICK,
        ];
        this.fHideEvents = [
            IPopperEventsEnum.OUTSIDE_CLICK,
        ];
        this.fPlacement = MoleculeDropdownPlacement.BOTTOM;
        this.inWindow = false;
        this.getList = (list) => {
            return html `
      ${list && list.length >= 0
                ? list.map((item) => {
                    return html `
              <molecule-dropdown-item
                .fIcon="${item.fIcon}"
                .fLabel="${item.fLabel}"
                .fCurrent="${item.fCurrent}"
                .fIconFill="${item.fIconFill}"
                .fDisabled="${item.fDisabled}"
                .fHasIcon="${item.fHasIcon}"
                .fId="${item.fId}"
                .fValue="${item.fValue}"
                @fClick="${(e) => {
                        !e.detail.isParent && this.fClick?.(item);
                        !e.detail.isParent && this.popper.hide();
                    }}"
              >
                ${item.fChildren ? this.getList(item.fChildren) : ''}
              </molecule-dropdown-item>
            `;
                })
                : html `<slot></slot>`}
    `;
        };
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const options = {
            placement: this.fPlacement,
            showEvent: this.fShowEvents,
            hideEvent: this.fHideEvents,
            boundary: this.inWindow,
        };
        this.popper = fPopper({
            trigger: this.dropdown,
            menu: this.menu,
            options: options,
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.dropdown.addEventListener('popper', (e) => {
            e.detail ? this.fOpened?.() : this.fClosed?.();
        });
    }
    render() {
        return html `
      <div class="flw-dropdown ${this.fClass}">
        <slot name="trigger"></slot>
      </div>
      <div class="flw-dropdown__menu ${this.fMenuClass}">
        ${this.getList(this.fItems)}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeDropdownComponent.prototype, "fShowEvents", void 0);
__decorate([
    property({ type: Array })
], MoleculeDropdownComponent.prototype, "fHideEvents", void 0);
__decorate([
    property({ type: String })
], MoleculeDropdownComponent.prototype, "fPlacement", void 0);
__decorate([
    property({ type: Array })
], MoleculeDropdownComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: String })
], MoleculeDropdownComponent.prototype, "fMenuClass", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDropdownComponent.prototype, "inWindow", void 0);
__decorate([
    event('fClick')
], MoleculeDropdownComponent.prototype, "fClick", void 0);
__decorate([
    event('fOpened')
], MoleculeDropdownComponent.prototype, "fOpened", void 0);
__decorate([
    event('fClosed')
], MoleculeDropdownComponent.prototype, "fClosed", void 0);
__decorate([
    state()
], MoleculeDropdownComponent.prototype, "popper", void 0);
__decorate([
    query('.flw-dropdown__menu')
], MoleculeDropdownComponent.prototype, "menu", void 0);
__decorate([
    query('.flw-dropdown')
], MoleculeDropdownComponent.prototype, "dropdown", void 0);
MoleculeDropdownComponent = __decorate([
    customElement('molecule-dropdown')
], MoleculeDropdownComponent);
export { MoleculeDropdownComponent };
export const Dropdown = createComponent({
    tagName: 'molecule-dropdown',
    elementClass: MoleculeDropdownComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

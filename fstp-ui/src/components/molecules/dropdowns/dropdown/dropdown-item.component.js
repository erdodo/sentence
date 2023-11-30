var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { MoleculeDropdownItemTagNameEnum } from 'fstp-ui/src/models/molecules';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { when } from 'lit/directives/when.js';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeDropdownItemComponent = class MoleculeDropdownItemComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fOpened = false;
        this.isChild = false;
        this.isParent = false;
        this.showChildren = this.fOpened;
        this.iconColor = 'flw-text-neutral-600';
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (this.parentElement &&
            this.parentElement.tagName ===
                MoleculeDropdownItemTagNameEnum.MOLECULE_DROPDOWN_ITEM)
            this.isChild = true;
        if (this.lastElementChild &&
            this.lastElementChild.tagName ===
                MoleculeDropdownItemTagNameEnum.MOLECULE_DROPDOWN_ITEM) {
            this.isParent = true;
            this.firstElementChild.classList.add('flw-text-sub-title-small-medium');
            Object.values(this.firstElementChild.children).map((child) => {
                child.classList.add('flw-text-sub-title-small-medium');
            });
        }
        this.iconColor = this.fCurrent
            ? CommonTextColorsEnum.PrimaryCore
            : CommonTextColorsEnum.Neutral600;
        if (_changedProperties.has('fOpened'))
            this.showChildren = this.fOpened;
    }
    render() {
        return html `
      <button
        class="
        flw-dropdown-item
            ${this.fCurrent ? 'flw-dropdown--active' : ''}
            ${this.isChild ? 'flw-dropdown--is-child' : ''} 
            ${this.isParent
            ? 'flw-dropdown-item--is-parent'
            : 'flw-dropdown-item-hover'} 
            ${this.fDisabled ? 'flw-dropdown-item--disabled' : ''}
            ${this.fClass}
        "
        ?disabled="${this.fDisabled}"
        type="button"
        @click="${() => {
            this.fClick?.(this);
        }}"
        id="${this.fId}"
        value="${this.fValue}"
      >
        ${this.isParent
            ? html `
              <div
                class="flw-dropdown-item__label"
                @click="${() => this.toggleChildren()}"
              >
                <div class="flw-dropdown-item__label-slot">
                  ${this.fHasIcon
                ? html `
                        <atom-icon
                          fName="${this.fIcon}"
                          fSize="${AtomIconSizeEnum.MEDIUM}"
                          fColor="${this.iconColor}"
                          fType="${this.fIconFill
                    ? AtomIconsTypeEnum.FILL
                    : AtomIconsTypeEnum.OUTLINE}"
                        ></atom-icon>
                      `
                : ''}

                  <slot
                    name="label"
                    class=""
                  >
                  </slot>
                  ${this.fLabel
                ? html `<span class="flw-dropdown-item__text"
                        >${this.fLabel}</span
                      >`
                : ''}
                </div>
                <div
                  class="${this.showChildren
                ? 'flw-dropdown-item__parent-open'
                : 'flw-dropdown-item__parent-close'}"
                >
                  <atom-icon
                    fName="${AtomIconsEnum.ARROW_IOSUPWARD}"
                    fSize="${AtomIconSizeEnum.MEDIUM}"
                    fColor="${CommonTextColorsEnum.Neutral500}"
                    fType="${AtomIconsTypeEnum.OUTLINE}"
                  ></atom-icon>
                </div>
              </div>
              <div
                class="${this.showChildren
                ? 'flw-dropdown-item__children'
                : 'flw-hidden'}"
              >
                <slot></slot>
              </div>
            `
            : html `
              ${when(this.fHasIcon, () => html `<atom-icon
                    fName="${this.fIcon}"
                    fSize="${AtomIconSizeEnum.MEDIUM}"
                    fColor="${this.iconColor}"
                    fType="${this.fIconFill
                ? AtomIconsTypeEnum.FILL
                : AtomIconsTypeEnum.OUTLINE}"
                  ></atom-icon> `)}

              <slot></slot>
              ${this.fLabel
                ? html `<span class="flw-dropdown-item__text"
                    >${this.fLabel}</span
                  >`
                : ''}
            `}
      </button>
    `;
    }
    toggleChildren() {
        this.showChildren = !this.showChildren;
    }
};
__decorate([
    property({ type: AtomIconsEnum })
], MoleculeDropdownItemComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDropdownItemComponent.prototype, "fIconFill", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDropdownItemComponent.prototype, "fCurrent", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDropdownItemComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDropdownItemComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: String })
], MoleculeDropdownItemComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: String })
], MoleculeDropdownItemComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDropdownItemComponent.prototype, "fOpened", void 0);
__decorate([
    state()
], MoleculeDropdownItemComponent.prototype, "isChild", void 0);
__decorate([
    state()
], MoleculeDropdownItemComponent.prototype, "isParent", void 0);
__decorate([
    state()
], MoleculeDropdownItemComponent.prototype, "showChildren", void 0);
__decorate([
    state()
], MoleculeDropdownItemComponent.prototype, "iconColor", void 0);
__decorate([
    event('fClick')
], MoleculeDropdownItemComponent.prototype, "fClick", void 0);
MoleculeDropdownItemComponent = __decorate([
    customElement('molecule-dropdown-item')
], MoleculeDropdownItemComponent);
export { MoleculeDropdownItemComponent };
export const DropdownItem = createComponent({
    tagName: 'molecule-dropdown-item',
    elementClass: MoleculeDropdownItemComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

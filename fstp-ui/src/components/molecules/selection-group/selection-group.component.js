var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, state, customElement, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeSelectionGroupItemTypeEnum, } from 'fstp-ui/src/models/molecules';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeSelectionGroupComponent = class MoleculeSelectionGroupComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fHasSearch = false;
        this.fHasFooter = false;
        this.fItems = [];
        this.fType = MoleculeSelectionGroupItemTypeEnum.CHECKBOX;
        this.items = [];
        this.item = (props) => {
            return html `
      <button
        class="flw-selection-group__item ${props.fSelected
                ? 'flw-selection-group__item-selected'
                : ''}
        ${props.visible === false ? 'hidden' : ''}
        ${props.fDisable
                ? 'flw-selection-group__item-disabled'
                : props.fSelected
                    ? 'flw-selection-group__item-selected'
                    : ''}
"
        type="button"
        ?disabled="${props.fDisable}"
        @click="${() => {
                this.selectItem(props);
            }}"
      >
        <div class="flw-selection-group__item__content">
          ${props.fIconIsShow
                ? html `
                <div
                  class="flw-selection-group__item__content__icon ${props.fDisable
                    ? 'flw-bg-neutral-300'
                    : `flw-bg-${props.fIconColor}-clear`}"
                >
                  <atom-icon
                    fName="${props.fIcon}"
                    fSize="16"
                    fColor=${props.fDisable
                    ? 'flw-text-neutral-400'
                    : `flw-text-${props.fIconColor}-emphasis`}
                    fType="${props.fIconType}"
                  ></atom-icon>
                </div>
              `
                : html ``}
          <div class="flw-selection-group__item__content__text">
            <span class="flw-selection-group__item__content__text-title">
              ${props.fTitle}
            </span>
            ${props.fDescriptionIsShow
                ? html `
                  <span
                    class="flw-selection-group__item__content__text-description"
                  >
                    ${props.fDescription}
                  </span>
                `
                : html ``}
          </div>
        </div>
        <div class="flw-selection-group__item__inputs">
          ${this.fType === MoleculeSelectionGroupItemTypeEnum.CHECKBOX
                ? html `
                <atom-checkbox
                  .fIsChecked="${props.fSelected}"
                  .fDisabled="${props.fDisable}"
                ></atom-checkbox>
              `
                : html `
                <atom-radio
                  .fIsChecked="${props.fSelected}"
                  .fDisabled="${props.fDisable}"
                ></atom-radio>
              `}
        </div>
      </button>
    `;
        };
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fItems')) {
            this.items = this.fItems;
        }
    }
    render() {
        return html `
      <div class="flw-selection-group">
        ${this.fHasSearch
            ? html ` <atom-textbox
              fStatus="flw-textbox--default"
              fIcon="search"
              fHasIcon
              fPlaceholder="Search"
              fClass="flw-w-full"
              @fChange="${(e) => {
                this.search(e);
            }}"
            ></atom-textbox>`
            : html ``}
        ${this.items.map((item) => this.item(item))}
        ${this.fHasFooter
            ? html `
              <div class="flw-selection-group__footer">
                <atom-button
                  fStatus="flw-button--neutral"
                  fSize="flw-button--medium"
                  fShowType="flw-button--ghost"
                  fHasLabel
                  fLabel="Clear"
                  @click="${() => {
                this.clear();
            }}"
                ></atom-button>
                <atom-button
                  }
                  fStatus="flw-button--primary"
                  fSize="flw-button--medium"
                  fShowType="flw-button--ghost"
                  fHasLabel
                  fLabel="Select All"
                  @click="${() => {
                this.selectAll();
            }}"
                ></atom-button>
              </div>
            `
            : html ``}
      </div>
    `;
    }
    selectItem(item) {
        const index = this.items.indexOf(item);
        if (this.fType === MoleculeSelectionGroupItemTypeEnum.RADIO) {
            this.items.forEach((item) => {
                item.fSelected = false;
            });
        }
        this.items[index].fSelected = !this.items[index].fSelected;
        this.items = [...this.items];
        this.fChange?.(this.items.filter((item) => item.fSelected === true));
    }
    search(e) {
        const value = e.detail;
        if (value === '') {
            this.items = this.items.map((item) => {
                item.visible = true;
                return item;
            });
            this.items = [...this.items];
            return;
        }
        this.items = this.items.map((item) => {
            item.visible = item.fTitle?.includes(value);
            return item;
        });
        this.items = [...this.items];
        this.fSearchChange?.(value);
    }
    clear() {
        this.items = this.items.map((item) => {
            item.fSelected = false;
            return item;
        });
    }
    selectAll() {
        const items = this.fItems;
        for (const value of Object.values(items)) {
            if (!value.fDisable) {
                value.fSelected = true;
            }
        }
        this.items = [...items];
    }
};
__decorate([
    property({ type: Boolean })
], MoleculeSelectionGroupComponent.prototype, "fHasSearch", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeSelectionGroupComponent.prototype, "fHasFooter", void 0);
__decorate([
    property({ type: Array })
], MoleculeSelectionGroupComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: MoleculeSelectionGroupItemTypeEnum })
], MoleculeSelectionGroupComponent.prototype, "fType", void 0);
__decorate([
    state()
], MoleculeSelectionGroupComponent.prototype, "items", void 0);
__decorate([
    event('fChange')
], MoleculeSelectionGroupComponent.prototype, "fChange", void 0);
__decorate([
    event('fSearchChange')
], MoleculeSelectionGroupComponent.prototype, "fSearchChange", void 0);
MoleculeSelectionGroupComponent = __decorate([
    customElement('molecule-selection-group')
], MoleculeSelectionGroupComponent);
export { MoleculeSelectionGroupComponent };
export const SelectionGroup = createComponent({
    tagName: 'molecule-selection-group',
    elementClass: MoleculeSelectionGroupComponent,
    react: React,
    events: {
        fChange: 'fChange',
        fSearchChange: 'fSearchChange',
    },
});

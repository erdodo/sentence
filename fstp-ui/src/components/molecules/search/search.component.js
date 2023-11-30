var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, state, customElement, query, event, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum } from 'fstp-ui/src/models/atoms';
import { IPopperEventsEnum, fPopper } from 'fstp-ui/src/functions';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeSearchComponent = class MoleculeSearchComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fPlaceholder = 'Search';
        this.fValue = '';
        this.fLoading = false;
        this.fItems = [];
        this.items = this.fItems;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.menuPopper = fPopper({
            trigger: this.search,
            menu: this.flwSearchMenu,
            options: {
                width: `${this.search.offsetWidth}px`,
                offset: [0, 0],
                showEvent: [IPopperEventsEnum.FOCUS],
            },
        });
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fItems')) {
            this.items = this.fItems;
        }
    }
    render() {
        return html `
      <div class="flw-search">
        <div class="flw-search__input-icon">
          ${this.fLoading
            ? html `<atom-loader fType="small"></atom-loader>`
            : html `
                <atom-icon
                  fName="${AtomIconsEnum.SEARCH}"
                  fSize="${AtomIconSizeEnum.XLARGE}"
                  fColor=" "
                ></atom-icon>
              `}
        </div>
        <input
          type="text"
          class="flw-search__input"
          placeholder="${this.fPlaceholder}"
          .value="${this.fValue}"
          @input="${(e) => {
            this.searchChange(e.target.value);
        }}"
        />
      </div>
      <div class="flw-search-menu">${this.getOptions()}</div>
    `;
    }
    getOptions() {
        return html `
      ${this.items.length > 0
            ? this.items.map((item) => {
                return html `
              <button
                @click="${() => {
                    this.optionSelect(item);
                    this.fClick?.(item);
                    this.menuPopper.hide();
                    this.fValue = item.fLabel;
                }}"
                class="flw-search-option"
                type="button"
                ?disabled="${item.fIsDisabled}"
              >
                <div
                  class="
                  flw-search-option-content
                  ${item.fIsDisabled
                    ? 'flw-search-option-content--disabled'
                    : item.fIsCurrent
                        ? 'flw-search-option-content--selected'
                        : ''}
                  "
                >
                  <span class="flw-search-option-content-label"
                    >${item.fLabel}</span
                  >
                  <div class="flw-search-option-content-check">
                    ${item.fIsCurrent
                    ? html `<atom-icon
                          fName="${AtomIconsEnum.CHECKMARK}"
                          fSize="16"
                          fColor="flw-text-primary-core"
                        ></atom-icon>`
                    : ''}
                  </div>
                </div>
              </button>
            `;
            })
            : ''}
    `;
    }
    optionSelect(item) {
        this.items = this.items.map((i) => {
            if (i.fIsDisabled)
                return i;
            if (i.fValue === item.fValue) {
                i.fIsCurrent = !i.fIsCurrent;
            }
            else {
                i.fIsCurrent = false;
            }
            return i;
        });
    }
    searchChange(val) {
        this.fChange?.(val);
        if (val.length > 0) {
            this.menuPopper.show();
        }
        else {
            this.menuPopper.hide();
        }
    }
};
__decorate([
    property({ type: String })
], MoleculeSearchComponent.prototype, "fPlaceholder", void 0);
__decorate([
    property({ type: String })
], MoleculeSearchComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeSearchComponent.prototype, "fLoading", void 0);
__decorate([
    property({ type: Array })
], MoleculeSearchComponent.prototype, "fItems", void 0);
__decorate([
    state()
], MoleculeSearchComponent.prototype, "menuPopper", void 0);
__decorate([
    state()
], MoleculeSearchComponent.prototype, "items", void 0);
__decorate([
    query('.flw-search-menu')
], MoleculeSearchComponent.prototype, "flwSearchMenu", void 0);
__decorate([
    query('.flw-search')
], MoleculeSearchComponent.prototype, "search", void 0);
__decorate([
    event('fChange')
], MoleculeSearchComponent.prototype, "fChange", void 0);
__decorate([
    event('fClick')
], MoleculeSearchComponent.prototype, "fClick", void 0);
MoleculeSearchComponent = __decorate([
    customElement('molecule-search')
], MoleculeSearchComponent);
export { MoleculeSearchComponent };
export const Search = createComponent({
    tagName: 'molecule-search',
    elementClass: MoleculeSearchComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

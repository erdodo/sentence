var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, state, event, query, } from 'fstp-ui/src/components/base.component';
import { AtomCheckboxSelectionTypeEnum, AtomIconsEnum, AtomIconSizeEnum, AtomSelectSizeEnum, AtomSelectStatusEnum, } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { fPopper, fCloneDeep } from 'fstp-ui/src/functions';
import { generateUUID } from 'fstp-ui/src/utils';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomSelectComponent = class AtomSelectComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fName = '';
        this.fLabel = '';
        this.fStatus = AtomSelectStatusEnum.DEFAULT;
        this.fDisabled = false;
        this.fReadonly = false;
        this.fPlaceholder = ' ';
        this.fValue = ''; //1,2,3 //string
        this.fSize = AtomSelectSizeEnum.MEDIUM;
        this.fHasHelperText = false;
        this.fHasLabel = false;
        this.fHelperText = '';
        this.fFloatLabel = false;
        this.fRequired = false;
        this.fIsMultiSelect = false;
        this.fIsSearchable = false;
        this.fSearchPlaceholder = 'Search';
        this.items = [];
        this.inline_items = [];
        this.selected_items = [];
        this.old_selected_items = [];
        this.value = '';
        this.selectedLabel = '';
        this.inputValue = '';
        this.id = generateUUID();
        this.globalCheckboxStatus = {
            fIsChecked: false,
            fSelectionType: AtomCheckboxSelectionTypeEnum.FILL,
        };
    }
    firstUpdated() {
        this.popperInstance = fPopper({
            trigger: this.target,
            menu: this.menu,
            options: {
                width: `${this.target.clientWidth}px`,
                placement: 'bottom',
            },
        });
        if (this.target.clientWidth === 0) {
            this.select.addEventListener('click', () => {
                this.menu && (this.menu.style.width = `${this.target.clientWidth}px`);
                this.popperInstance.show();
            });
        }
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fItems') ||
            _changedProperties.has('fValue') ||
            _changedProperties.has('fSelectedKeys') ||
            _changedProperties.has('fSelecteds')) {
            this.popperInstance.popper.update();
            if (!this.fItems || this.fItems?.length <= 0)
                return;
            let items = [];
            const _fItems = fCloneDeep(this.fItems);
            const _items = _fItems?.map((item) => ({
                ...item,
                _key: item[this.fOptionKey ?? 'fValue'],
                _label: item[this.fOptionLabel ?? 'fLabel'],
            })) ?? [];
            items = _items;
            this.inline_items = _items;
            if (this.fIsMultiSelect) {
                items = _items?.map((item) => {
                    if (item.fSelected == null || item.fSelected == undefined) {
                        item.fSelected = false;
                    }
                    return item;
                });
            }
            if (this.fValue && typeof this.fValue == 'string') {
                this.inputValue = this.fValue;
                items = _items?.map((item) => {
                    if (this.fValue.split(',').length &&
                        this.fValue.split(',').includes(item?._key ?? '')) {
                        item.fSelected = true;
                    }
                    return item;
                });
            }
            if (this.fSelectedKeys && this.fSelectedKeys.length > 0) {
                items = _items?.map((item) => {
                    if (this.fSelectedKeys?.includes(item?._key ?? '')) {
                        item.fSelected = true;
                    }
                    return item;
                });
            }
            if (this.fSelecteds && this.fSelecteds.length > 0) {
                items = _items?.map((item) => {
                    const selectedKeys = this.fSelecteds?.map((item2) => item2[this.fOptionKey ?? 'fValue']);
                    if (selectedKeys?.includes(item?._key ?? '')) {
                        item.fSelected = true;
                    }
                    return item;
                });
            }
            this.items = items ?? [];
            this.setSelectedLabel();
        }
    }
    render() {
        return html `
      <div class="flw-select ${this.fClass}">
        <input
          type="hidden"
          name="${this.fName}"
          value="${this.inputValue}"
        />
        <div class="flw-select-target">
          <atom-textbox
            .fStatus="flw-textbox--${this.fStatus}"
            fSize="flw-textbox--${this.fSize}"
            ?fFloatLabel="${this.fFloatLabel}"
            .fLabel="${this.fLabel}"
            fIcon="${AtomIconsEnum.CHEVRON_DOWN}"
            fHasIcon
            ?fHasLabel="${this.fHasLabel}"
            ?fHasHelperText="${this.fHasHelperText}"
            .fHelperText="${this.fHelperText}"
            .fPlaceholder="${this.fPlaceholder}"
            .fName="${this.fName}"
            .fClass="${this.fClass} flw-w-full"
            .fValue="${this.selectedLabel}"
            ?fIsDisabled="${this.fDisabled}"
            fIsReadonly
            ?fIsRequired="${this.fRequired}"
          ></atom-textbox>
        </div>
        <div class="flw-select__menu">
          ${this.fIsSearchable || this.fIsMultiSelect
            ? html ` <div class="flw-select__menu__search">
                <div class="flw-select__menu__search-content">
                  ${this.fIsSearchable
                ? html `
                        <atom-icon
                          fSize="${AtomIconSizeEnum.MEDIUM}"
                          fName="${AtomIconsEnum.SEARCH}"
                          fClass="flw-select__menu__search-content-icon"
                        ></atom-icon>
                        <input
                          class="flw-select__menu__search-content-input"
                          placeholder="${this.fSearchPlaceholder}"
                          @keyup="${(e) => {
                    this._optionSearch(e);
                    this.fSearchChange?.(e.target.value);
                }}"
                        />
                      `
                : html `<div></div>`}
                </div>
                ${this.fIsMultiSelect
                ? html `
                      <atom-checkbox
                        fSelectionType="${this.selected_items.length ==
                    this.items.length
                    ? 'check'
                    : 'fill'}"
                        ?fIsChecked="${this.selected_items.length > 0}"
                        @fChange="${(e) => {
                    this.selectAll(e.detail);
                }}"
                        fClass="flw-mx-12"
                      ></atom-checkbox>
                    `
                : ''}
              </div>`
            : ''}
          <div class="flw-select__menu__options">${this.getOptions()}</div>
        </div>
      </div>
    `;
    }
    getOptions() {
        return html `
      ${this.items.length > 0
            ? this.items.map((item) => {
                return html `
              <button
                @click="${() => this._optionSelect(item)}"
                class="flw-select__menu__options-option"
                type="button"
                ?disabled="${item.fIsDisabled}"
              >
                <div
                  class="
                  flw-select__menu__options-option-content
                  ${item.fIsDisabled
                    ? 'flw-select__menu__options-option-content--disabled'
                    : item.fSelected
                        ? 'flw-select__menu__options-option-content--selected'
                        : ''}
                  "
                >
                  <span class="flw-select__menu__options-option-content-label"
                    >${item._label}</span
                  >
                  <div class="flw-select__menu__options-option-content-check">
                    ${this.fIsMultiSelect
                    ? html ` <atom-checkbox
                          ?fIsChecked="${item.fSelected}"
                        ></atom-checkbox>`
                    : ''}
                    ${!this.fIsMultiSelect && item.fSelected
                    ? html `
                          <atom-icon
                            fName="${AtomIconsEnum.CHECKMARK}"
                            fSize="16"
                            fColor="flw-text-primary-core"
                          ></atom-icon>
                        `
                    : ''}
                  </div>
                </div>
              </button>
            `;
            })
            : ''}
    `;
    }
    setSelectedLabel() {
        let selectedLabel = '';
        let inputValue = '';
        this.items.forEach((item) => {
            if (this.fIsMultiSelect) {
                if (item.fSelected) {
                    selectedLabel += `${item._label}, `;
                    inputValue += `${item._key}, `;
                }
            }
            else {
                if (item.fSelected) {
                    selectedLabel = item?._label ?? '';
                    inputValue = `${item?._key}` ?? '';
                }
            }
        });
        selectedLabel = selectedLabel.endsWith(', ')
            ? selectedLabel.slice(0, -2)
            : selectedLabel;
        inputValue = inputValue.endsWith(', ')
            ? inputValue.slice(0, -2)
            : inputValue;
        this.selectedLabel = selectedLabel;
        this.selected_items = this.items.filter((item) => item.fSelected == true);
        this.inputValue = inputValue;
    }
    _optionSelect(item) {
        this.items = this.items.map((i) => {
            if (i.fIsDisabled)
                return i;
            if (i._key === item._key) {
                i.fSelected = !i.fSelected;
            }
            else if (!this.fIsMultiSelect) {
                i.fSelected = false;
            }
            return i;
        });
        this.setSelectedLabel();
        this.change(this.items.filter((item) => item.fSelected == true));
        !this.fIsMultiSelect && this.popperInstance.hide();
    }
    _optionSearch(e) {
        if (e.target.value === '') {
            this.items = this.inline_items;
            return;
        }
        this.items = (this.inline_items ?? []).filter((i) => {
            if (i?._label &&
                i?._label
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())) {
                return i;
            }
        });
    }
    selectAll(val) {
        if (val) {
            this.items.map((item) => {
                return {
                    ...item,
                    fSelected: true,
                };
            });
            this.selected_items = [...this.items];
        }
        else {
            this.items.map((item) => {
                return {
                    ...item,
                    fSelected: false,
                };
            });
            this.selected_items = [];
        }
        this.setSelectedLabel();
        this.change(this.items);
    }
    change(detail) {
        this.fChange?.(detail);
        this.fChangeSelectedKeys?.(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        detail.map((item) => item._key));
        this.fChangeValue?.(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        detail.map((item) => item._key).toString());
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fName", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomSelectStatusEnum })
], AtomSelectComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fReadonly", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fPlaceholder", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: AtomSelectSizeEnum })
], AtomSelectComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fHasHelperText", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fHelperText", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fFloatLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fRequired", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fIsMultiSelect", void 0);
__decorate([
    property({ type: Boolean })
], AtomSelectComponent.prototype, "fIsSearchable", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fSearchPlaceholder", void 0);
__decorate([
    property({ type: Array })
], AtomSelectComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: Array })
], AtomSelectComponent.prototype, "fSelectedKeys", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fOptionLabel", void 0);
__decorate([
    property({ type: String })
], AtomSelectComponent.prototype, "fOptionKey", void 0);
__decorate([
    property({ type: Array })
], AtomSelectComponent.prototype, "fSelecteds", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "items", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "inline_items", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "selected_items", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "old_selected_items", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "value", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "selectedLabel", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "inputValue", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "id", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "globalCheckboxStatus", void 0);
__decorate([
    state()
], AtomSelectComponent.prototype, "popperInstance", void 0);
__decorate([
    event('fChange')
], AtomSelectComponent.prototype, "fChange", void 0);
__decorate([
    event('fChangeSelectedKeys')
], AtomSelectComponent.prototype, "fChangeSelectedKeys", void 0);
__decorate([
    event('fChangeValue')
], AtomSelectComponent.prototype, "fChangeValue", void 0);
__decorate([
    event('fSearchChange')
], AtomSelectComponent.prototype, "fSearchChange", void 0);
__decorate([
    query('.flw-select__menu')
], AtomSelectComponent.prototype, "menu", void 0);
__decorate([
    query('.flw-select-target')
], AtomSelectComponent.prototype, "target", void 0);
__decorate([
    query('.flw-select')
], AtomSelectComponent.prototype, "select", void 0);
AtomSelectComponent = __decorate([
    customElement('atom-select')
], AtomSelectComponent);
export { AtomSelectComponent };
export const Select = createComponent({
    tagName: 'atom-select',
    elementClass: AtomSelectComponent,
    react: React,
    events: {
        fChange: 'fChange',
        fSearchChange: 'fSearchChange',
    },
});

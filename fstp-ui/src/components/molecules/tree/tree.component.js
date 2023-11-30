var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, state, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { fPopper } from 'fstp-ui/src/functions';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeTreeComponent = class MoleculeTreeComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItems = [];
        this.fDropdownJobItems = [];
        this.fDropdownFolderItems = [];
        this.fFolderItems = [];
        this.fJobItems = [];
        this.fLeftItems = [];
        this.fRightItems = [];
        this.fHasSearch = false;
        this.fSelectedValue = '';
        this.fParentClosedIcon = AtomIconsEnum.FOLDER_DEFAULT;
        this.fParentOpenedIcon = AtomIconsEnum.FOLDER_OPEN;
        this.fChildIcon = AtomIconsEnum.CODE_BRANCH;
        this.fActiveIsShow = false;
        this.items = [];
        this.selectedItems = [];
        this.dropdownClick = false;
        this.loading = true;
        this.leftItems = [];
        this.rightItems = [];
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fItems')) {
            this.items = this.fItems;
            this.updateComplete.then(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            });
            this.selectedItems = [];
        }
        if (_changedProperties.has('items')) {
            this.updateComplete.then(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            });
        }
        if (_changedProperties.has('fLeftItems')) {
            this.leftItems = this.fLeftItems.map((item) => {
                return {
                    fTooltip: item.fLabel,
                    fData: item.fData,
                    fIcon: item.fIcon,
                    fValue: item.fValue,
                };
            });
        }
        if (_changedProperties.has('fRightItems')) {
            this.rightItems = this.fRightItems.map((item) => {
                return {
                    fTooltip: item.fLabel,
                    fData: item.fData,
                    fIcon: item.fIcon,
                    fValue: item.fValue,
                };
            });
        }
        if (_changedProperties.has('fSelectedValue')) {
            this.selectedItems = [];
            this.items.forEach((item) => {
                this.searchSelected(item, this.fSelectedValue);
            });
            this.items = [...this.items];
        }
    }
    searchSelected(item, value) {
        if (value == '')
            return;
        if (value && value.length > 0 && value.split(',').length > 1) {
            value.split(',').forEach((val) => {
                if (val == item.key) {
                    this.itemClick(item, true);
                }
                if (item.children && item.children.length > 0) {
                    item.children.forEach((child) => {
                        this.searchSelected(child, val);
                    });
                }
            });
        }
        else if (value && value.length > 0) {
            if (value == item.key) {
                this.itemClick(item, true);
            }
            if (item.children && item.children.length > 0) {
                item.children.forEach((child) => {
                    this.searchSelected(child, value);
                });
            }
        }
    }
    render() {
        return html `
      <div class="flw-tree">
        <div class="flw-tree__header">
          ${this.leftItems.length > 0
            ? html `
                <molecule-tools
                  .fItems="${this.leftItems}"
                  @fClick="${(e) => {
                this.fTopButtonsClick?.(e.detail);
            }}"
                ></molecule-tools>
              `
            : ''}
          ${this.fHasSearch
            ? html `
                <div
                  class="flw-tree__search-area
${this.leftItems.length <= 0 || this.rightItems.length <= 0 ? 'flw-w-full' : ''}
"
                >
                  <div
                    class="flw-tree__search-content 
                      
                    "
                  >
                    <atom-icon
                      .fName="${AtomIconsEnum.SEARCH}"
                      fSize="${AtomIconSizeEnum.XLARGE}"
                      fClass="flw-text-neutral-500"
                    ></atom-icon>
                  </div>
                  <input
                    class="flw-tree__search"
                    type="text"
                    @input="${(e) => {
                this.items = [];
                const item = this.search(e.target.value, this.fItems);
                this.items = item;
            }}"
                  />
                </div>
              `
            : ''}
          ${this.rightItems.length > 0
            ? html `
                <molecule-tools
                  .fItems="${this.rightItems}"
                  @fClick="${(e) => {
                this.fTopButtonsClick?.(e.detail);
            }}"
                ></molecule-tools>
              `
            : ''}
        </div>
        <div class="flw-tree__content">
          ${this.items.map((item) => {
            return html `${this.getItem(item)} `;
        })}
        </div>
      </div>
    `;
    }
    getItem(item) {
        return html `
      <button
        class="
          flw-tree__job 
          ${item.data.isSelected ? 'flw-tree__job--selected' : ''}
          ${item.data?.isFolderOpen ? 'flw-tree__folder--open' : ''}
          ${item.data?.isFolder
            ? 'flw-tree__type-folder'
            : 'flw-tree__type-item'}"
      >
        <div class="flw-tree__job__content">
          <atom-icon
            fName="${AtomIconsEnum.CHEVRON_RIGHT}"
            fType="${AtomIconsTypeEnum.FILL}"
            fSize="${AtomIconSizeEnum.SIZE_32}"
            fClass="flw-tree__job__down-arrow ${item.children &&
            item.children.length <= 0
            ? 'flw-hidden'
            : ''}"
            @click="${() => {
            item.data.isFolderOpen = !item.data?.isFolderOpen;
            this.items = [...this.items];
        }}"
          ></atom-icon>
          <div
            class="flw-tree__job__check"
            @click="${() => {
            this.itemClick(item);
            this.fSelectedChange?.(this.selectedItems);
        }}"
          >
            <atom-checkbox
              ?fIsChecked="${item.data.isSelected}"
            ></atom-checkbox>
          </div>
          <div class="flw-tree__job__title">
            <div class="flw-w-32">${this.getIcon(item)}</div>
            <span class="flw-tree__job__title-label"> ${item.label} </span>
            <div
              class="${this.fActiveIsShow ? '' : 'flw-hidden'} ${item.data
            .is_Actv
            ? 'tree__job--active-icon'
            : 'tree__job--passive-icon'}"
            ></div>
          </div>
        </div>
        <div class="flw-flex flw-gap-4 ">
          ${item.data.isFolder
            ? this.fFolderItems.map((folderItem) => {
                return html `
                  <atom-dashboard-tool-button
                    @click="${() => {
                    this.fDropdownClick?.({
                        dropdown: folderItem,
                        item: item,
                    });
                }}"
                    .fIcon="${folderItem.fIcon}"
                    .fTooltip="${folderItem.fLabel}"
                    fClass="flw-text-neutral-500"
                  ></atom-dashboard-tool-button>
                `;
            })
            : this.fJobItems.map((jobItem) => {
                return html `
                  <atom-dashboard-tool-button
                    @click="${() => {
                    this.fDropdownClick?.({
                        dropdown: jobItem,
                        item: item,
                    });
                }}"
                    .fIcon="${jobItem.fIcon}"
                    .fTooltip="${jobItem.fLabel}"
                    fClass="flw-text-neutral-500"
                  ></atom-dashboard-tool-button>
                `;
            })}
          ${item.data.isFolder && this.fDropdownFolderItems.length > 0
            ? html ` <div
                class=" flw-button--neutral flw-button--medium flw-button--ghost"
                @click="${(e) => {
                this.openDropdown(e.target, item);
            }}"
              >
                <atom-dashboard-tool-button
                  fIcon="more-vertical"
                  fClass="flw-text-neutral-500"
                ></atom-dashboard-tool-button>
              </div>`
            : ''}
          ${!item.data.isFolder && this.fDropdownJobItems.length > 0
            ? html ` <div
                class=" flw-button--neutral flw-button--medium flw-button--ghost"
                @click="${(e) => {
                this.openDropdown(e.target, item);
            }}"
              >
                <atom-dashboard-tool-button
                  fIcon="more-vertical"
                  fClass="flw-text-neutral-500"
                ></atom-dashboard-tool-button>
              </div>`
            : ''}
        </div>
      </button>
      ${item.data.isFolder &&
            item.children &&
            item.data.isFolderOpen &&
            item.children.length > 0
            ? html `
            <div class="flw-tree__job__children">
              ${item.children.map((child) => {
                return html `
                    ${this.getItem(child)}
                    <div class="flw-tree__children-line"></div>
                  `;
            })}
            </div>
          `
            : ''}
    `;
    }
    openDropdown(target, item) {
        const menu = document.createElement('div');
        const DropdownItems = item.data.isFolder
            ? this.getDropdownItems(this.fDropdownFolderItems, item, menu)
            : this.getDropdownItems(this.fDropdownJobItems, item, menu);
        menu.className = 'flw-dropdown__menu';
        menu.append(...DropdownItems);
        const popper = fPopper({
            trigger: target,
            menu: menu,
            options: {
                placement: 'bottom-end',
                showEvent: [],
                hideEvent: [],
                boundary: true,
            },
        });
        popper.show();
        target.addEventListener('click', () => {
            popper.hide();
        });
        document.addEventListener('click', (e) => {
            const path = e.composedPath();
            if (path.includes(target) || path.includes(menu))
                return;
            menu.remove();
        });
    }
    getDropdownItems(items, treeItem, menu) {
        const itemList = [];
        if (items && items.length > 0) {
            items.map((item) => {
                const molecule_dropdown_item = document.createElement('molecule-dropdown-item');
                molecule_dropdown_item.fIcon = item.fIcon;
                molecule_dropdown_item.fLabel = item.fLabel;
                molecule_dropdown_item.fCurrent = item.fCurrent;
                molecule_dropdown_item.fIconFill = item.fIconFill;
                molecule_dropdown_item.fDisabled = item.fDisabled;
                molecule_dropdown_item.fHasIcon = item.fHasIcon;
                molecule_dropdown_item.fId = item.fId;
                molecule_dropdown_item.fValue = item.fValue;
                if (item.fChildren && item.fChildren.length > 0) {
                    item.fChildren.map((child) => {
                        const molecule_dropdown_item_child = document.createElement('molecule-dropdown-item');
                        molecule_dropdown_item_child.fIcon = child.fIcon;
                        molecule_dropdown_item_child.fLabel = child.fLabel;
                        molecule_dropdown_item_child.fCurrent = child.fCurrent;
                        molecule_dropdown_item_child.fIconFill = child.fIconFill;
                        molecule_dropdown_item_child.fDisabled = child.fDisabled;
                        molecule_dropdown_item_child.fHasIcon = child.fHasIcon;
                        molecule_dropdown_item_child.fId = child.fId;
                        molecule_dropdown_item_child.fValue = child.fValue;
                        molecule_dropdown_item_child.addEventListener('fClick', () => {
                            this.fDropdownClick?.({
                                dropdown: child,
                                item: treeItem,
                            });
                            menu.remove();
                        });
                        molecule_dropdown_item.append(molecule_dropdown_item_child);
                    });
                }
                molecule_dropdown_item.addEventListener('fClick', () => {
                    if (!item.fChildren) {
                        this.fDropdownClick?.({
                            dropdown: item,
                            item: treeItem,
                        });
                        menu.remove();
                    }
                });
                itemList.push(molecule_dropdown_item);
            });
        }
        return itemList;
    }
    itemClick(item, value) {
        this.loading = true;
        item.data.isSelected = value ?? !item.data.isSelected;
        if (item.data.isSelected) {
            this.selectedItems.push(item);
            if (item.data.isFolder) {
                item.children?.forEach((child) => {
                    this.itemClick(child, true);
                });
            }
        }
        else {
            if (item.data.isFolder) {
                item.children?.forEach((child) => {
                    this.itemClick(child, false);
                });
            }
            this.selectedItems = this.selectedItems.filter((x) => x.key !== item.key);
        }
        this.items = [...this.items];
    }
    getIcon(item) {
        if (item.data.isFolder) {
            return html `
        <div class="flw-relative">
          <div
            class="${item.data.isFolderOpen
                ? 'flw-opacity-100'
                : 'flw-opacity-0'} flw-transition-all"
          >
            <atom-icon
              fName="${this.fParentOpenedIcon}"
              fSize="${AtomIconSizeEnum.SIZE_32}"
              fType="${AtomIconsTypeEnum.FILL}"
              fClass="flw-tree__folder__icon"
            ></atom-icon>
          </div>
          <div
            class="${item.data.isFolderOpen
                ? 'flw-opacity-0'
                : 'flw-opacity-100'} flw-transition-all flw-absolute flw-top-0 flw-left-0"
          >
            <atom-icon
              fName="${this.fParentClosedIcon}"
              fSize="${AtomIconSizeEnum.SIZE_32}"
              fType="${AtomIconsTypeEnum.FILL}"
              fClass="flw-tree__folder__icon"
            ></atom-icon>
          </div>
        </div>
      `;
        }
        else {
            return html `
        <atom-icon
          fName="${this.fChildIcon}"
          fSize="${AtomIconSizeEnum.SIZE_32}"
          fType="${AtomIconsTypeEnum.OUTLINE}"
          fClass="flw-tree__job__icon"
        ></atom-icon>
      `;
        }
    }
    search(searchValue, data) {
        const result = [];
        if (searchValue.length > 0) {
            data.forEach((item) => {
                if (item.label.toLowerCase().includes(searchValue.toLowerCase())) {
                    if (result.find((x) => x.key === item.key))
                        return;
                    item.data.isFolderOpen = true;
                    result.push(item);
                }
                if (item.children && item.children.length > 0) {
                    const children = this.search(searchValue, item.children);
                    if (children.length > 0) {
                        if (result.find((x) => x.key === item.key))
                            return;
                        result.push({
                            ...item,
                            data: {
                                ...item.data,
                                isFolderOpen: true,
                            },
                            children: children,
                        });
                    }
                }
            });
        }
        else {
            return this.fItems;
        }
        return result;
    }
};
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fDropdownJobItems", void 0);
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fDropdownFolderItems", void 0);
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fFolderItems", void 0);
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fJobItems", void 0);
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fLeftItems", void 0);
__decorate([
    property({ type: Array })
], MoleculeTreeComponent.prototype, "fRightItems", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTreeComponent.prototype, "fHasSearch", void 0);
__decorate([
    property({ type: String })
], MoleculeTreeComponent.prototype, "fSelectedValue", void 0);
__decorate([
    property({ type: String })
], MoleculeTreeComponent.prototype, "fParentClosedIcon", void 0);
__decorate([
    property({ type: String })
], MoleculeTreeComponent.prototype, "fParentOpenedIcon", void 0);
__decorate([
    property({ type: String })
], MoleculeTreeComponent.prototype, "fChildIcon", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTreeComponent.prototype, "fActiveIsShow", void 0);
__decorate([
    state()
], MoleculeTreeComponent.prototype, "items", void 0);
__decorate([
    state()
], MoleculeTreeComponent.prototype, "selectedItems", void 0);
__decorate([
    state()
], MoleculeTreeComponent.prototype, "dropdownClick", void 0);
__decorate([
    state()
], MoleculeTreeComponent.prototype, "loading", void 0);
__decorate([
    state()
], MoleculeTreeComponent.prototype, "leftItems", void 0);
__decorate([
    state()
], MoleculeTreeComponent.prototype, "rightItems", void 0);
__decorate([
    event('fDropdownClick')
], MoleculeTreeComponent.prototype, "fDropdownClick", void 0);
__decorate([
    event('fTopButtonsClick')
], MoleculeTreeComponent.prototype, "fTopButtonsClick", void 0);
__decorate([
    event('fSelectedChange')
], MoleculeTreeComponent.prototype, "fSelectedChange", void 0);
MoleculeTreeComponent = __decorate([
    customElement('molecule-tree')
], MoleculeTreeComponent);
export { MoleculeTreeComponent };
export const Tree = createComponent({
    tagName: 'molecule-tree',
    elementClass: MoleculeTreeComponent,
    react: React,
    events: {
        fDropdownClick: 'fDropdownClick',
        fSelectedChange: 'fSelectedChange',
    },
});

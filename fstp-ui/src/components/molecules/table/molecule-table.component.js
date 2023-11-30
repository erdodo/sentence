var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, state, event, } from 'fstp-ui/src/components/base.component';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { SelectionTypeEnum, SortStatusEnum, TableDefault, tableHeadIconSize, } from 'fstp-ui/src/models/molecules';
import { AtomParagraphSizesEnum, AtomBadgeStatusEnum, AtomIconsEnum, AtomButtonStatusEnum, AtomButtonSizeEnum, AtomButtonShowTypeEnum, } from 'fstp-ui/src/models/atoms';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { generateUUID } from 'fstp-ui/src/utils';
import 'fstp-ui/src/components/atoms';
import { tooltip } from 'fstp-ui/src/directives';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeTableComponent = class MoleculeTableComponent extends BaseComponent {
    constructor() {
        super();
        this.fClass = '';
        this.fHeadingClass = '';
        this.fShowSort = false;
        this.fHasLoader = false;
        this.fCount = '';
        this.fCountStatus = AtomBadgeStatusEnum.SUCCESS;
        this.fTable = {
            ...TableDefault,
            fHeadings: [],
            fRows: [],
        };
        this.fEmptyButtonStatus = AtomButtonStatusEnum.NEUTRAL;
        this.fEmptyButtonSize = AtomButtonSizeEnum.SMALL;
        this.fEmptyButtonShowType = AtomButtonShowTypeEnum.OUTLINE;
        this.fEmptyTitle = 'No data found';
        this.fEmptyDescription = 'Your search did not match any results.\n' + 'Please try again.';
        this.fEmptyButtonText = 'Clear filter';
        this.isSelected = false;
        this.sortStatus = SortStatusEnum.DEFAULT;
        this.sortField = '';
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fTable')) {
            this.data = { ...this.fTable };
        }
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        if (this.fEmptyHasButton == undefined)
            this.fEmptyHasButton = true;
    }
    tableSortCell(item) {
        if (this.sortField &&
            this.sortStatus != SortStatusEnum.DEFAULT &&
            this.sortField != item.fField) {
            return html ``;
        }
        switch (this.sortStatus) {
            case SortStatusEnum.ASC:
                return html `
          <atom-icon
            fName=${AtomIconsEnum.ARROW_UPWARD}
            fSize=${tableHeadIconSize}
          ></atom-icon>
        `;
            case SortStatusEnum.DESC:
                return html `
          <atom-icon
            fName=${AtomIconsEnum.ARROW_DOWNWARD}
            fSize=${tableHeadIconSize}
          ></atom-icon>
        `;
            default:
                return html `
          <atom-icon
            fName=${AtomIconsEnum.REPEAT_VERTICAL}
            fSize=${tableHeadIconSize}
          ></atom-icon>
        `;
        }
    }
    tableHeadSelected(item) {
        const tableHeaders = this.renderRoot.querySelectorAll('.flw-molecule-table__head-cell');
        tableHeaders.forEach((header) => {
            header.addEventListener('click', () => {
                tableHeaders.forEach((h) => h.classList.remove('flw-molecule-table__head-cell--selected'));
                header.classList.add('flw-molecule-table__head-cell--selected');
            });
        });
        switch (this.sortStatus) {
            case SortStatusEnum.ASC:
                this.sortStatus = SortStatusEnum.DESC;
                break;
            case SortStatusEnum.DESC:
                this.sortStatus = SortStatusEnum.DEFAULT;
                break;
            case SortStatusEnum.DEFAULT:
                this.sortStatus = SortStatusEnum.ASC;
                break;
            default:
                this.sortStatus = SortStatusEnum.DEFAULT;
        }
        this.sortField = item.fField;
        const sortMessage = this.sortStatus === SortStatusEnum.DEFAULT
            ? ''
            : `${item.fField},${this.sortStatus}`;
        this.fSort?.(sortMessage);
    }
    setSelectionType(tagName, tdClass = '') {
        let template;
        switch (this.fTable.fSelectionType) {
            case SelectionTypeEnum.CHECKBOX:
                template = html `<atom-checkbox></atom-checkbox>`;
                break;
            case SelectionTypeEnum.RADIO:
                template = html `<atom-radio></atom-radio>`;
                break;
            case SelectionTypeEnum.SWITCH:
                template = html `<atom-switch></atom-switch>`;
                break;
            default:
                return html ``;
        }
        switch (tagName) {
            case 'th':
                return html `<th class="${this.fTable.fThClass}">
          <span>${template}</span>
        </th>`;
            case 'td':
                return html `<td
          class="${classMap({
                    [this.fTable.fTdClass]: true,
                    [tdClass]: true,
                })}"
        >
          ${template}
        </td>`;
            default:
                return template;
        }
    }
    render() {
        return html `
      <div class="flw-molecule-table">
        ${this.fHasLoader
            ? html `<div class="flw-molecule-table-loader">
              <atom-loader></atom-loader>
            </div>`
            : html ``}
        <div class="flw-molecule-table__header">
          <div class="flw-molecule-table__header-content">
            <div class="flw-molecule-table__header-title-description">
              <div class="flw-molecule-table__header-title">
                <atom-heading
                  fLevel="6"
                  .fText="${this.fTitle}"
                ></atom-heading>
                ${this.fCount.length > 0
            ? html `<atom-badge
                      fText=${this.fCount}
                      fStatus="${this.fCountStatus}"
                    ></atom-badge>`
            : html ``}
              </div>
              <atom-paragraph
                fSize="${AtomParagraphSizesEnum.Medium}"
                fText=${this.fSubTitle}
              ></atom-paragraph>
            </div>
            ${when(this.fTable.fHeadingButtons, () => html `
                <div class="flw-molecule-table__buttons">
                  ${when(this.fTable.fHeadingButtons?.filterButton &&
            this.fTable.fHeadingButtons.filterButton.fIsShow, () => html `
                      <atom-button
                        fSize=${this.fTable.fHeadingButtons?.filterButton
            ?.fSize}
                        fStatus=${this.fTable.fHeadingButtons?.filterButton
            ?.fStatus}
                        fType=${this.fTable.fHeadingButtons?.filterButton
            ?.fType}
                        fShowType=${this.fTable.fHeadingButtons?.filterButton
            ?.fShowType}
                        fHasLabel=${this.fTable.fHeadingButtons?.filterButton
            ?.fHasLabel}
                        fLabel=${this.fTable.fHeadingButtons?.filterButton
            ?.fLabel}
                        fHasIcon=${this.fTable.fHeadingButtons?.filterButton
            ?.fHasIcon}
                        fIcon=${this.fTable.fHeadingButtons?.filterButton
            ?.fIcon}
                        fIconType=${this.fTable.fHeadingButtons?.filterButton
            ?.fIconType}
                        @fClick=${() => {
            this.fFilterButtonClick?.();
        }}
                      ></atom-button>
                    `)}
                  ${when(this.fTable.fHeadingButtons?.addButton &&
            this.fTable.fHeadingButtons.addButton.fIsShow, () => html `
                      <atom-button
                        fSize=${this.fTable.fHeadingButtons?.addButton?.fSize}
                        fStatus=${this.fTable.fHeadingButtons?.addButton
            ?.fStatus}
                        fType=${this.fTable.fHeadingButtons?.addButton?.fType}
                        fShowType=${this.fTable.fHeadingButtons?.addButton
            ?.fShowType}
                        fHasLabel=${this.fTable.fHeadingButtons?.addButton
            ?.fHasLabel}
                        fLabel=${this.fTable.fHeadingButtons?.addButton?.fLabel}
                        fHasIcon=${this.fTable.fHeadingButtons?.addButton
            ?.fHasIcon}
                        fIcon=${this.fTable.fHeadingButtons?.addButton?.fIcon}
                        fIconType=${this.fTable.fHeadingButtons?.addButton
            ?.fIconType}
                        @fClick=${() => {
            this.fAddButtonClick?.();
        }}
                      ></atom-button>
                    `)}
                </div>
              `)}
          </div>
        </div>
        <table class="flw-molecule-table__body">
          <thead class="flw-molecule-table__head">
            <tr class="flw-molecule-table__head-tr">
              ${this.setSelectionType('th')}
              ${when(this.data, () => repeat(this.data.fHeadings, (_item, index) => index, (item) => {
            return html `<th
                      class="${classMap({
                'flw-molecule-table__head-cell--selected': this.isSelected,
                'flw-molecule-table__head-cell': true,
                [item.fClass]: true,
                [this.fTable.fThClass]: true,
            })}"
                    >
                      <button
                        type="button"
                        class="flw-flex flw-w-full flw-items-center"
                        @click="${() => {
                this.fShowSort && this.tableHeadSelected(item);
            }}"
                      >
                        <span class="flw-molecule-table__head-text">
                          ${item.fContent}
                          ${when(this.fShowSort, () => {
                return this.tableSortCell(item);
            })}
                        </span>
                      </button>
                    </th>`;
        }))}
              ${when(this.fTable.fEditButton?.showEditButton ||
            this.fTable.fDelButton?.showDelButton, () => html `
                  <th
                    class="${classMap({
            'flw-molecule-table__head-cell--selected': this.isSelected,
            'flw-molecule-table__head-cell': true,
            [this.fTable.fThClass]: true,
        })}"
                  >
                    <span class="flw-molecule-table__head-text">
                      ${this.fTable.fActionButtonHeading}
                    </span>
                  </th>
                `)}
            </tr>
          </thead>
          <tbody class="flw-molecule-table__tbody">
            ${when(this.data && this.data.fRows.length > 0, () => repeat(this.data.fRows, () => generateUUID(), (item) => {
            return html ` <tr
                      class="${classMap({
                'flw-molecule-table__body-row': true,
                [item.fClass]: true,
            })} "
                    >
                      ${this.setSelectionType('td', item.fClass)}
                      ${repeat(item.fColumns, (_i, _index) => _index, (column) => html `
                          <td
                            class="flw-molecule-table__body-cell"
                            ${column.fContent &&
                false &&
                tooltip(column.fContent)}
                          >
                            <span
                              class="flw-table-cell flw-table-cell-item ${column.fClass}"
                              >${column.fContent &&
                unsafeHTML(column.fContent.toString())}</span
                            >
                          </td>
                        `)}
                      ${when(this.fTable.fEditButton?.showEditButton ||
                this.fTable.fDelButton?.showDelButton, () => html `
                          <td class="flw-molecule-table__body-cell">
                            ${when(this.fTable.fEditButton?.showEditButton, () => html `
                                <atom-button
                                  fHasIcon=${this.fTable.fEditButton?.fHasIcon}
                                  fIcon=${this.fTable.fEditButton?.fIcon}
                                  fType=${this.fTable.fEditButton?.fType}
                                  fShowType=${this.fTable.fEditButton
                ?.fShowType}
                                  fStatus=${this.fTable.fEditButton?.fStatus}
                                  @fClick=${() => {
                this.fEditButtonClick?.(item.fItem);
            }}
                                >
                                </atom-button>
                              `)}
                            ${when(this.fTable.fDelButton?.showDelButton, () => html `
                                <atom-button
                                  fHasIcon=${this.fTable.fEditButton?.fHasIcon}
                                  fIcon=${this.fTable.fDelButton?.fIcon}
                                  fType=${this.fTable.fDelButton?.fType}
                                  fShowType=${this.fTable.fDelButton?.fShowType}
                                  fStatus=${this.fTable.fDelButton?.fStatus}
                                  @fClick=${() => {
                this.fDelButtonClick?.(item.fItem);
            }}
                                >
                                </atom-button>
                              `)}
                          </td>
                        `)}
                    </tr>`;
        }), () => html ``)}
          </tbody>
          ${when(!this.data || this.data.fRows.length <= 0, () => html `
              <caption class="flw-caption-bottom">
                <molecule-empty   
                  ?fHasButton="${this.fEmptyHasButton}"  
                  fButtonStatus="${this.fEmptyButtonStatus}"  
                  fButtonSize="${this.fEmptyButtonSize}"  
                  fButtonShowType="${this.fEmptyButtonShowType}""  
                  fTitle="${this.fEmptyTitle}"
                  fDescription="${this.fEmptyDescription}"  
                  fButtonText="${this.fEmptyButtonText}"  
                  @fClick="${() => {
            this.fEmptyButtonClick?.();
        }}"
                />
              </caption>
            `)}
        </table>
        ${when(!!this.data && !!this.data.fPaginate, () => html `
            <div
              class="${!this.data.fPaginate?.contentClass
            ? 'flw-flex flw-items-center flw-justify-center flw-py-16'
            : this.data.fPaginate.contentClass}"
            >
              <atom-pagination
                fPaginationRange=${this.data.fPaginate?.range}
                fTotalPage=${this.data.fPaginate?.totalPage}
                fSetCurrentPage=${this.data.fPaginate?.number}
                @fChange="${(e) => {
            this.fPaginateChange?.(e.detail);
        }}"
              ></atom-pagination>
            </div>
          `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fClass", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fHeadingClass", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTableComponent.prototype, "fShowSort", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTableComponent.prototype, "fHasLoader", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fCount", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fCountStatus", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fSubTitle", void 0);
__decorate([
    property({ type: Object })
], MoleculeTableComponent.prototype, "fTable", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTableComponent.prototype, "fEmptyHasButton", void 0);
__decorate([
    property({ type: AtomButtonStatusEnum })
], MoleculeTableComponent.prototype, "fEmptyButtonStatus", void 0);
__decorate([
    property({ type: AtomButtonSizeEnum })
], MoleculeTableComponent.prototype, "fEmptyButtonSize", void 0);
__decorate([
    property({ type: AtomButtonShowTypeEnum })
], MoleculeTableComponent.prototype, "fEmptyButtonShowType", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fEmptyTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fEmptyDescription", void 0);
__decorate([
    property({ type: String })
], MoleculeTableComponent.prototype, "fEmptyButtonText", void 0);
__decorate([
    event('fSort')
], MoleculeTableComponent.prototype, "fSort", void 0);
__decorate([
    event('fEditButtonClick')
], MoleculeTableComponent.prototype, "fEditButtonClick", void 0);
__decorate([
    event('fDelButtonClick')
], MoleculeTableComponent.prototype, "fDelButtonClick", void 0);
__decorate([
    event('fFilterButtonClick')
], MoleculeTableComponent.prototype, "fFilterButtonClick", void 0);
__decorate([
    event('fAddButtonClick')
], MoleculeTableComponent.prototype, "fAddButtonClick", void 0);
__decorate([
    event('fPaginateChange')
], MoleculeTableComponent.prototype, "fPaginateChange", void 0);
__decorate([
    event('fEmptyButtonClick')
], MoleculeTableComponent.prototype, "fEmptyButtonClick", void 0);
__decorate([
    state()
], MoleculeTableComponent.prototype, "sortStatus", void 0);
__decorate([
    state()
], MoleculeTableComponent.prototype, "sortField", void 0);
__decorate([
    state()
], MoleculeTableComponent.prototype, "data", void 0);
MoleculeTableComponent = __decorate([
    customElement('molecule-table')
], MoleculeTableComponent);
export { MoleculeTableComponent };
export const Table = createComponent({
    tagName: 'molecule-table',
    elementClass: MoleculeTableComponent,
    react: React,
    events: {
        fSort: 'fSort',
        fEditButtonClick: 'fEditButtonClick',
        fDelButtonClick: 'fDelButtonClick',
        fFilterButtonClick: 'fFilterButtonClick',
        fAddButtonClick: 'fAddButtonClick',
        fPaginateChange: 'fPaginateChange',
        fEmptyButtonClick: 'fEmptyButtonClick',
    },
});

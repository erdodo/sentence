var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomPaginationDefault, } from 'fstp-ui/src/models/atoms';
import { CommonBgColorsEnum, CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomPaginationComponent = class AtomPaginationComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fPaginationRange = 7;
        this.fTotalPage = AtomPaginationDefault.total;
        this.fSetCurrentPage = AtomPaginationDefault.number;
        this.value = AtomPaginationDefault.number;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fSetCurrentPage')) {
            this.value = this.fSetCurrentPage;
        }
    }
    get pages() {
        if (this.fPaginationRange >= this.fTotalPage) {
            return Array(this.fTotalPage)
                .fill(null)
                .map((_, index) => ({ value: index + 1 }));
        }
        const range = Math.floor(this.fPaginationRange / 2);
        const isStart = this.value <= range;
        const isEnd = this.fTotalPage - this.value < range;
        return Array(this.fPaginationRange)
            .fill(null)
            .map((_, index) => {
            const i = index + 1;
            if (isStart) {
                return {
                    value: range + 2 >= i
                        ? i
                        : this.fTotalPage - (this.fPaginationRange - i),
                    label: range + 2 === i ? '...' : null,
                };
            }
            if (isEnd) {
                return {
                    value: this.fPaginationRange - range - 2 < i
                        ? this.fTotalPage - (this.fPaginationRange - i)
                        : i,
                    label: range === i ? '...' : null,
                };
            }
            return {
                value: i === 1
                    ? 1
                    : i === this.fPaginationRange
                        ? this.fTotalPage
                        : +this.value + +(range - this.fPaginationRange + i),
                label: 2 === i || this.fPaginationRange - 1 === i ? '...' : null,
            };
        });
    }
    setPage(item) {
        if (!item.label && !!item.value) {
            if (item.value !== this.value) {
                this.value = item.value;
                this.fChange?.(item);
            }
        }
    }
    render() {
        return html `
      <div class="flw-pagination">
        <button
          type="button"
          class="flw-pagination--item"
          @click="${() => this.setPage({ value: 1 })}"
          ?disabled="${this.value === 1}"
        >
          ${when(this.value !== 1, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROWHEAD_LEFT}"
                fColor="${CommonTextColorsEnum.Neutral600} flw-pagination--arrow-icon"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROWHEAD_LEFT}"
                fColor="${CommonTextColorsEnum.Neutral400} ${CommonBgColorsEnum.Neutral200}"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `)}
        </button>
        <button
          type="button"
          class="flw-pagination--item"
          ?disabled="${this.value === 1}"
        >
          ${when(this.value !== 1, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROW_IOSBACK}"
                fColor="${CommonTextColorsEnum.Neutral600} flw-pagination--arrow-icon"
                @click="${() => this.setPage({ value: this.value - 1 })}"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROW_IOSBACK}"
                fColor="${CommonTextColorsEnum.Neutral400} ${CommonBgColorsEnum.Neutral200}"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `)}
        </button>
        ${repeat(this.pages, (_item, index) => index, (_item, i) => {
            return html `
              <button
                type="button"
                key="${i}"
                ?disabled=${!!_item.label}
                class="${classMap({
                'flw-pagination--item': true,
                'flw-pagination--disabled': !!_item.label,
                'flw-pagination--selected': _item.value === this.value,
            })}"
                @click="${() => this.setPage(_item)}"
              >
                <span class="flw-pagination__number"
                  >${_item.label ?? _item.value}</span
                >
              </button>
            `;
        })}
        <button
          type="button"
          class="${classMap({
            'flw-pagination--item': true,
        })} "
          ?disabled="${this.value === this.fTotalPage}"
        >
          ${when(this.value === this.fTotalPage, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROW_IOSFORWARD}"
                fColor="${CommonTextColorsEnum.Neutral400} ${CommonBgColorsEnum.Neutral200}"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROW_IOSFORWARD}"
                fColor="${CommonTextColorsEnum.Neutral600} flw-pagination--arrow-icon"
                @click="${() => this.setPage({ value: this.value + 1 })}"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `)}
        </button>
        <button
          type="button"
          class="flw-pagination--item"
          @click="${() => this.setPage({ value: this.fTotalPage })}"
          ?disabled="${this.value === this.fTotalPage}"
        >
          ${when(this.value === this.fTotalPage, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROWHEAD_RIGHT}"
                fColor="${CommonTextColorsEnum.Neutral400} ${CommonBgColorsEnum.Neutral200}"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `, () => html `
              <atom-icon
                fName="${AtomIconsEnum.ARROWHEAD_RIGHT}"
                fColor="${CommonTextColorsEnum.Neutral600} flw-pagination--arrow-icon"
                fSize="${AtomPaginationDefault.iconSize}"
              ></atom-icon>
            `)}
        </button>
      </div>
    `;
    }
};
__decorate([
    property({ type: Number })
], AtomPaginationComponent.prototype, "fPaginationRange", void 0);
__decorate([
    property({ type: Number })
], AtomPaginationComponent.prototype, "fTotalPage", void 0);
__decorate([
    property({ type: Number })
], AtomPaginationComponent.prototype, "fSetCurrentPage", void 0);
__decorate([
    state()
], AtomPaginationComponent.prototype, "value", void 0);
__decorate([
    event('fChange')
], AtomPaginationComponent.prototype, "fChange", void 0);
AtomPaginationComponent = __decorate([
    customElement('atom-pagination')
], AtomPaginationComponent);
export { AtomPaginationComponent };
export const Pagination = createComponent({
    tagName: 'atom-pagination',
    elementClass: AtomPaginationComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomBreadcrumbStatusEnum, AtomIconsEnum, BreadcrumbsDefault, } from 'fstp-ui/src/models/atoms';
import { repeat } from 'lit/directives/repeat.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { generateUUID } from 'fstp-ui/src/utils';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomBreadcrumbsComponent = class AtomBreadcrumbsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fBreadcrumbs = BreadcrumbsDefault;
        this.fIcon = AtomIconsEnum.ARROW_IOSFORWARD;
        this.fStatus = AtomBreadcrumbStatusEnum.NEUTRAL;
        this.fIsOutline = false;
        this.fColor = false;
        this.data = [];
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fBreadcrumbs')) {
            this.data = [...this.fBreadcrumbs];
        }
    }
    render() {
        return html `
      <div
        id="${this.fId}"
        class="flw-breadcrumb flw-breadcrumb--${this.fStatus} ${this.fIsOutline
            ? 'flw-breadcrumb--outline'
            : ''}  ${this.fClass}"
      >
        ${repeat(this.data, () => generateUUID(), (item, index) => {
            const isRouterLink = !!item.fRouterLink;
            return html `
              ${when(index > 0, () => html ` <atom-icon
                    fName="${this.fIcon}"
                    fColor="${CommonTextColorsEnum.Neutral200}"
                  ></atom-icon>`)}
              <button
                type="button"
                @click="${() => {
                item.fRouterLink && this.fClick?.(item.fRouterLink);
            }}"
                ?disabled=${!isRouterLink}
                class="flw-breadcrumb__item ${classMap({
                'flw-breadcrumb__item--disabled': !isRouterLink || this.data.length - 1 === index,
            })}"
              >
                ${item.fTitle}
              </button>
            `;
        })}
      </div>
    `;
    }
};
__decorate([
    property({ type: Object })
], AtomBreadcrumbsComponent.prototype, "fBreadcrumbs", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomBreadcrumbsComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomBreadcrumbStatusEnum })
], AtomBreadcrumbsComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomBreadcrumbsComponent.prototype, "fIsOutline", void 0);
__decorate([
    property({ type: Boolean })
], AtomBreadcrumbsComponent.prototype, "fColor", void 0);
__decorate([
    event('fClick')
], AtomBreadcrumbsComponent.prototype, "fClick", void 0);
__decorate([
    state()
], AtomBreadcrumbsComponent.prototype, "data", void 0);
AtomBreadcrumbsComponent = __decorate([
    customElement('atom-breadcrumbs')
], AtomBreadcrumbsComponent);
export { AtomBreadcrumbsComponent };
export const Breadcrumbs = createComponent({
    tagName: 'atom-breadcrumbs',
    elementClass: AtomBreadcrumbsComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property } from 'fstp-ui/src/components/base.component';
import { AtomBadgeStatusEnum } from 'fstp-ui/src/models/atoms';
import * as React from 'react';
import { createComponent } from '@lit/react';
let AtomBadgeComponent = class AtomBadgeComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fText = '';
        this.fStatus = AtomBadgeStatusEnum.PRIMARY;
    }
    render() {
        return html ` <span
      class="flw-badge flw-badge--${this.fStatus} ${this.fClass}"
      id="${this.fId}"
    >
      ${this.fHasDot === true
            ? html `<span class="flw-badge__dot"> </span>`
            : ''}
      ${this.fText}
      <slot></slot>
    </span>`;
    }
};
__decorate([
    property({ type: String })
], AtomBadgeComponent.prototype, "fText", void 0);
__decorate([
    property({ type: Boolean })
], AtomBadgeComponent.prototype, "fHasDot", void 0);
__decorate([
    property({ type: String })
], AtomBadgeComponent.prototype, "fStatus", void 0);
AtomBadgeComponent = __decorate([
    customElement('atom-badge')
], AtomBadgeComponent);
export { AtomBadgeComponent };
export const Badge = createComponent({
    tagName: 'atom-badge',
    elementClass: AtomBadgeComponent,
    react: React,
});

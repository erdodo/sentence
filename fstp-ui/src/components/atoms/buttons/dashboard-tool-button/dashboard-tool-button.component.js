var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { tooltip } from 'fstp-ui/src/directives';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomDashboardToolButtonComponent = class AtomDashboardToolButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fTooltip = '';
        this.fIcon = AtomIconsEnum.UPLOAD;
        this.fIconIsFill = false;
    }
    render() {
        return html `
      <button
        ${this.fTooltip && tooltip(this.fTooltip)}
        class="flw-dashboard-tool-button ${this.fClass}"
        type="button"
        @click="${() => {
            this.fClick?.(this);
        }}"
      >
        <atom-icon
          fName="${this.fIcon}"
          fType="${this.fIconIsFill
            ? AtomIconsTypeEnum.FILL
            : AtomIconsTypeEnum.OUTLINE}"
          fSize="24"
          fColor=" "
        ></atom-icon>
      </button>
    `;
    }
};
__decorate([
    property({ type: String })
], AtomDashboardToolButtonComponent.prototype, "fTooltip", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomDashboardToolButtonComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: Boolean })
], AtomDashboardToolButtonComponent.prototype, "fIconIsFill", void 0);
__decorate([
    event('fClick')
], AtomDashboardToolButtonComponent.prototype, "fClick", void 0);
AtomDashboardToolButtonComponent = __decorate([
    customElement('atom-dashboard-tool-button')
], AtomDashboardToolButtonComponent);
export { AtomDashboardToolButtonComponent };
export const ToolButton = createComponent({
    tagName: 'atom-dashboard-tool-button',
    elementClass: AtomDashboardToolButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

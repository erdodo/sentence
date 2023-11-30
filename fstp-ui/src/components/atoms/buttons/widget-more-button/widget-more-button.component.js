var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconSizeEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomWidgetMoreButtonComponent = class AtomWidgetMoreButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fDisabled = false;
        this.fFirst = false;
        this.fLast = false;
        this.fIcon = AtomIconsEnum.REFRESH;
        this.fIconType = AtomIconsTypeEnum.FILL;
    }
    render() {
        return html `
      <button
        class="flw-widget-more-button 
  ${this.fDisabled ? 'flw-widget-more-button--disabled' : ''}
        ${this.fFirst ? 'flw-widget-more-button--first' : ''}
      ${this.fLast ? 'flw-widget-more-button--last' : ''}"
        type="button"
        @click="${() => {
            if (!this.fDisabled) {
                this.fClick?.(this);
            }
        }}"
      >
        <atom-icon
          fName="${this.fIcon}"
          fType="${this.fIconType}"
          fSize="${AtomIconSizeEnum.XLARGE}"
          fColor=" "
        ></atom-icon>
      </button>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], AtomWidgetMoreButtonComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomWidgetMoreButtonComponent.prototype, "fFirst", void 0);
__decorate([
    property({ type: Boolean })
], AtomWidgetMoreButtonComponent.prototype, "fLast", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomWidgetMoreButtonComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomWidgetMoreButtonComponent.prototype, "fIconType", void 0);
__decorate([
    event('fClick')
], AtomWidgetMoreButtonComponent.prototype, "fClick", void 0);
AtomWidgetMoreButtonComponent = __decorate([
    customElement('atom-widget-more-button')
], AtomWidgetMoreButtonComponent);
export { AtomWidgetMoreButtonComponent };
export const WidgetButton = createComponent({
    tagName: 'atom-widget-more-button',
    elementClass: AtomWidgetMoreButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { AtomHeadingLevelEnum } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomHeadingComponent = class AtomHeadingComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fLevel = AtomHeadingLevelEnum.Level3;
        this.fText = '';
        this.fColor = CommonTextColorsEnum.Neutral800;
    }
    render() {
        switch (this.fLevel) {
            case AtomHeadingLevelEnum.Level1:
                return html `<h1 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h1>`;
            case AtomHeadingLevelEnum.Level2:
                return html `<h2 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h2>`;
            case AtomHeadingLevelEnum.Level3:
                return html `<h3 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h3>`;
            case AtomHeadingLevelEnum.Level4:
                return html `<h4 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h4>`;
            case AtomHeadingLevelEnum.Level5:
                return html `<h5 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h5>`;
            case AtomHeadingLevelEnum.Level6:
                return html `<h6 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h6>`;
            default:
                return html `<h1 class="${this.fColor} ${this.fClass}">
          ${this.fText}
          <slot></slot>
        </h1>`;
        }
    }
};
__decorate([
    property({ type: AtomHeadingLevelEnum })
], AtomHeadingComponent.prototype, "fLevel", void 0);
__decorate([
    property({ type: String })
], AtomHeadingComponent.prototype, "fText", void 0);
__decorate([
    property({ type: CommonTextColorsEnum })
], AtomHeadingComponent.prototype, "fColor", void 0);
AtomHeadingComponent = __decorate([
    customElement('atom-heading')
], AtomHeadingComponent);
export { AtomHeadingComponent };
export const Heading = createComponent({
    tagName: 'atom-heading',
    elementClass: AtomHeadingComponent,
    react: React,
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AtomParagraphSizesEnum } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomParagraphComponent = class AtomParagraphComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fColor = CommonTextColorsEnum.Neutral800;
        this.fSize = AtomParagraphSizesEnum.Medium;
        this.fText = '';
    }
    render() {
        return html `<p class="${this.fClass} ${this.fSize} ${this.fColor}">
      ${this.fText}
      <slot></slot>
    </p>`;
    }
};
__decorate([
    property({ type: CommonTextColorsEnum })
], AtomParagraphComponent.prototype, "fColor", void 0);
__decorate([
    property({ type: AtomParagraphSizesEnum })
], AtomParagraphComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: String })
], AtomParagraphComponent.prototype, "fText", void 0);
AtomParagraphComponent = __decorate([
    customElement('atom-paragraph')
], AtomParagraphComponent);
export { AtomParagraphComponent };
export const Paragraph = createComponent({
    tagName: 'atom-paragraph',
    elementClass: AtomParagraphComponent,
    react: React,
});

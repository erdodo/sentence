var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { AtomProgressBarStatusEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomProgressBarComponent = class AtomProgressBarComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = AtomProgressBarStatusEnum.PRIMARY;
        this.fValue = 35;
    }
    render() {
        return html `
      <div class="flw-progress-bar flw-progress-bar--${this.fStatus}">
        <div
          class="flw-progress-bar__value"
          style="width: ${this.fValue}%"
        ></div>
      </div>
    `;
    }
};
__decorate([
    property({ type: AtomProgressBarStatusEnum })
], AtomProgressBarComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Number })
], AtomProgressBarComponent.prototype, "fValue", void 0);
AtomProgressBarComponent = __decorate([
    customElement('atom-progress-bar')
], AtomProgressBarComponent);
export { AtomProgressBarComponent };
export const ProgressBar = createComponent({
    tagName: 'atom-progress-bar',
    elementClass: AtomProgressBarComponent,
    react: React,
});

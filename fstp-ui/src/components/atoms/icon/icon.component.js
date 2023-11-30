var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, query, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsFlagEnum, AtomIconsNodeEnum, AtomIconsOtherEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomIconComponent = class AtomIconComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fName = AtomIconsEnum.ALERT_CIRCLE;
        this.fOthers = AtomIconsOtherEnum.CIRCLES;
        this.fFlags = AtomIconsFlagEnum.TURKISH;
        this.fType = AtomIconsTypeEnum.OUTLINE;
        this.fNodes = AtomIconsNodeEnum.AI;
        this.fSize = 24;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        switch (this.fType) {
            case AtomIconsTypeEnum.OUTLINE:
                import('fstp-ui/src/models/atoms/icon/outline-icons.enum').then((module) => {
                    this.parseIcon(module);
                });
                break;
            case AtomIconsTypeEnum.OTHER:
                import('fstp-ui/src/models/atoms/icon/other-icons.enum').then((module) => {
                    this.parseIcon(module);
                });
                break;
            case AtomIconsTypeEnum.FLAG:
                import('fstp-ui/src/models/atoms/icon/flag-icons.enum').then((module) => {
                    this.parseIcon(module);
                });
                break;
            case AtomIconsTypeEnum.NODE:
                import('fstp-ui/src/models/atoms/icon/node-icons.enum').then((module) => {
                    this.parseIcon(module);
                });
                break;
            default:
                import('fstp-ui/src/models/atoms/icon/fill-icons.enum').then((module) => {
                    this.parseIcon(module);
                });
                break;
        }
    }
    render() {
        return html `
      <div
        class="flw-icon ${this.fClass} ${this.fColor}"
        id="${this.fId}"
      ></div>
    `;
    }
    parseIcon(module) {
        let icon;
        switch (this.fType) {
            case AtomIconsTypeEnum.OTHER:
                icon = module[this.fOthers];
                break;
            case AtomIconsTypeEnum.FLAG:
                icon = module[this.fFlags];
                break;
            case AtomIconsTypeEnum.NODE:
                icon = module[this.fNodes];
                break;
            default:
                icon = module[`${this.fType}_${this.fName.replace(/-/g, '_').toLowerCase()}`];
        }
        const iconDiv = this.icon;
        iconDiv.innerHTML = icon;
        const svgEl = iconDiv.querySelector('svg');
        svgEl.className.baseVal = ` flw-icon ${this.fClass} ${this.fColor}`;
        svgEl.style.width = `${this.fSize}px`;
        svgEl.style.height = `${this.fSize}px`;
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: AtomIconsEnum })
], AtomIconComponent.prototype, "fName", void 0);
__decorate([
    property({ type: AtomIconsOtherEnum })
], AtomIconComponent.prototype, "fOthers", void 0);
__decorate([
    property({ type: AtomIconsFlagEnum })
], AtomIconComponent.prototype, "fFlags", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomIconComponent.prototype, "fType", void 0);
__decorate([
    property({ type: AtomIconsNodeEnum })
], AtomIconComponent.prototype, "fNodes", void 0);
__decorate([
    property({ type: Number })
], AtomIconComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: CommonTextColorsEnum })
], AtomIconComponent.prototype, "fColor", void 0);
__decorate([
    query('.flw-icon')
], AtomIconComponent.prototype, "icon", void 0);
AtomIconComponent = __decorate([
    customElement('atom-icon')
], AtomIconComponent);
export { AtomIconComponent };
export const Icon = createComponent({
    tagName: 'atom-icon',
    elementClass: AtomIconComponent,
    react: React,
});

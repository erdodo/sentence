import {createComponent} from "@lit/react";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, customElement, event, property, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import * as React from "react";
let OrganismHeaderComponent = class OrganismHeaderComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fMenuIsOpen = false;
    }
    render() {
        return html ` <div class="flw-header">
      <div class="flw-header__logo">
        <slot name="logo"></slot>
      </div>
      <div class="flw-header__rectangle"></div>
      <div class="flw-header__area">
        <div class="flw-header__menu">
          <slot></slot>
        </div>
        <div class="flw-header__menu-button">
          ${this.fMenuIsOpen
            ? html `<atom-menu-button
                fType="header"
                fIcon="${AtomIconsEnum.CLOSE_DEFAULT}"
                @fClick=${() => {
                this.fMenuOpen?.(this);
                this.fMenuIsOpen = false;
            }}
              ></atom-menu-button>`
            : html `<atom-menu-button
                fType="header"
                fIcon="${AtomIconsEnum.MENU_2}"
                @fClick=${() => {
                this.fMenuOpen?.(this);
                this.fMenuIsOpen = true;
            }}
              ></atom-menu-button>`}
        </div>
      </div>
    </div>`;
    }
};
__decorate([
    property({ type: Boolean })
], OrganismHeaderComponent.prototype, "fMenuIsOpen", void 0);
__decorate([
    event('fMenuOpen')
], OrganismHeaderComponent.prototype, "fMenuOpen", void 0);
OrganismHeaderComponent = __decorate([
    customElement('organism-header')
], OrganismHeaderComponent);
export { OrganismHeaderComponent };

export const Header = createComponent({
    tagName: 'organism-header',
    elementClass: OrganismHeaderComponent,
    react: React,
});
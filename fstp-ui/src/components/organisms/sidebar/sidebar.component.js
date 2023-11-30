import {createComponent} from "@lit/react";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html } from 'fstp-ui/src/components/base.component';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import * as React from "react";
let OrganismSidebarComponent = class OrganismSidebarComponent extends BaseComponent {
    render() {
        return html `<div class="flw-sidebar">
      <div class="flw-sidebar__menu">
        <slot></slot>
      </div>
      <div class="flw-sidebar__settings">
        <slot name="settings"></slot>
      </div>
    </div>`;
    }
};
OrganismSidebarComponent = __decorate([
    customElement('organism-sidebar')
], OrganismSidebarComponent);
export { OrganismSidebarComponent };

export const Sidebar = createComponent({
    tagName: 'organism-sidebar',
    elementClass: OrganismSidebarComponent,
    react: React,
});
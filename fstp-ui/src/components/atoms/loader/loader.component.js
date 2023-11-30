var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, customElement, property } from 'fstp-ui/src/components/base.component';
import { AtomLoaderTypeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomLoaderComponent = class AtomLoaderComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fType = AtomLoaderTypeEnum.DEFAULT;
    }
    render() {
        if (this.fType === AtomLoaderTypeEnum.DEFAULT) {
            return html `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          class="flw-animate-spinner"
        >
          <circle
            cx="3.99999"
            cy="24"
            r="1.6"
            fill="#CCE5FF"
          />
          <circle
            cx="44"
            cy="24"
            r="3.2"
            fill="#66B0FF"
          />
          <circle
            cx="24"
            cy="4"
            r="2.4"
            fill="#99CAFF"
          />
          <circle
            cx="24"
            cy="44"
            r="4"
            fill="#007BFF"
          />
          <circle
            cx="38.1421"
            cy="9.85784"
            r="2.8"
            fill="#80BDFF"
          />
          <circle
            cx="9.85778"
            cy="38.1421"
            r="1.2"
            fill="#E6F2FF"
          />
          <circle
            cx="38.1421"
            cy="38.1421"
            r="3.6"
            fill="#3395FF"
          />
          <circle
            cx="9.85779"
            cy="9.85785"
            r="2"
            fill="#B3D7FF"
          />
        </svg>
      `;
        }
        else {
            return html `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="flw-relative"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            stroke="#E6F0FF"
            stroke-width="2"
            class="flw-animate-beat "
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="#007BFF"
          />
        </svg>
      `;
        }
    }
};
__decorate([
    property({ type: AtomLoaderTypeEnum })
], AtomLoaderComponent.prototype, "fType", void 0);
AtomLoaderComponent = __decorate([
    customElement('atom-loader')
], AtomLoaderComponent);
export { AtomLoaderComponent };
export const Loader = createComponent({
    tagName: 'atom-loader',
    elementClass: AtomLoaderComponent,
    react: React,
});

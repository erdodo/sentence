var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { event, html, state, property, customElement, } from 'fstp-ui/src/components/base.component';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomImageComponent = class AtomImageComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fSrc = '';
        this.fAlt = '';
        this.fError = false;
    }
    render() {
        if (this.fError) {
            return html `<atom-icon fName="slash"></atom-icon>`;
        }
        else {
            return html ` <img
        src="${this.fSrc}"
        alt="${this.fAlt}"
        id="${this.fId}"
        class="${this.fClass}"
        @error=${(e) => {
                this.onError(e);
            }}
      />`;
        }
    }
    onError(e) {
        this.fError = true;
        this.fImageError?.(e);
    }
};
__decorate([
    property({ type: String })
], AtomImageComponent.prototype, "fSrc", void 0);
__decorate([
    property({ type: String })
], AtomImageComponent.prototype, "fAlt", void 0);
__decorate([
    state()
], AtomImageComponent.prototype, "fError", void 0);
__decorate([
    event('fImageError')
], AtomImageComponent.prototype, "fImageError", void 0);
AtomImageComponent = __decorate([
    customElement('atom-image')
], AtomImageComponent);
export { AtomImageComponent };
export const Image = createComponent({
    tagName: 'atom-image',
    elementClass: AtomImageComponent,
    react: React,
    events: {
        fImageError: 'fImageError',
    },
});

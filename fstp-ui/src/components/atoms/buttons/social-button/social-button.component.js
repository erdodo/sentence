var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomIconSizeEnum, AtomSocialButtonIconEnum, microsoft, } from 'fstp-ui/src/models/atoms';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomSocialButtonComponent = class AtomSocialButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fHasLabel = false;
        this.fIsDisabled = false;
        this.fHasIcon = false;
        this.fLabel = 'Action';
        this.fIcon = AtomSocialButtonIconEnum.MICROSOFT;
        this.iconSize = AtomIconSizeEnum.MEDIUM;
        this.icons = { microsoft: microsoft };
    }
    render() {
        return html ` <button
      ?disabled="${this.fIsDisabled}"
      class="flw-button 
            ${this.fClass}
            flw-button--outline
            flw-button--large
            flw-button--neutral
            flw-gap-12
            "
      type="button"
      @click="${() => {
            this.fClick?.(this);
        }}"
    >
      ${!this.fHasIcon ? '' : unsafeHTML(this.icons[this.fIcon])}
      ${this.fHasLabel ? html `<span>${this.fLabel}</span>` : ''}
    </button>`;
    }
};
__decorate([
    property({ type: Boolean })
], AtomSocialButtonComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomSocialButtonComponent.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomSocialButtonComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: String })
], AtomSocialButtonComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomSocialButtonIconEnum })
], AtomSocialButtonComponent.prototype, "fIcon", void 0);
__decorate([
    state()
], AtomSocialButtonComponent.prototype, "iconSize", void 0);
__decorate([
    state()
], AtomSocialButtonComponent.prototype, "icons", void 0);
__decorate([
    event('fClick')
], AtomSocialButtonComponent.prototype, "fClick", void 0);
AtomSocialButtonComponent = __decorate([
    customElement('atom-social-button')
], AtomSocialButtonComponent);
export { AtomSocialButtonComponent };
export const SocialButton = createComponent({
    tagName: 'atom-social-button',
    elementClass: AtomSocialButtonComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

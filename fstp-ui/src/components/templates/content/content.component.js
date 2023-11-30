import {createComponent} from "@lit/react";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, customElement, property, state, event, } from 'fstp-ui/src/components/base.component';
import 'fstp-ui/src/components/organisms';
import * as React from "react";
let TemplateContentComponent = class TemplateContentComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fTitle = '';
        this.fValue = '';
        this.fIsDashboard = false;
        this.fBreadcrumbs = [];
        this.showMobileMenu = false;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        const headerSlot = this.querySelector('[slot="header"]');
        const header = headerSlot?.querySelector('organism-header');
        header?.addEventListener('fMenuOpen', () => {
            this.mobileMenuButtonClicked();
            header.setAttribute('fMenuIsOpen', `${this.showMobileMenu}`);
        });
    }
    render() {
        return html `
      <div class="flw-content-template">
        <slot name="header"></slot>
        <slot name="sidebar"></slot>

        <div class="flw-content-template__container">
          <div
            class="flw-content-template__content ${this.fIsDashboard
            ? 'flw-content-template--dashboard'
            : ''}"
          >
            <div
              class="flw-content-template__head ${this.fValue !== ''
            ? 'flw-cursor-pointer'
            : ''}"
            >
              <atom-heading
                fLevel="3"
                fText="${this.fTitle}"
                fColor="flw-text-neutral-200"
                @click="${() => {
            this.fTitleClick?.(this.fValue);
        }}"
              ></atom-heading>
              <atom-breadcrumbs
                .fBreadcrumbs="${this.fBreadcrumbs}"
                @fClick="${(e) => {
            this.fBreadcrumbsClick?.(e.detail);
        }}"
              ></atom-breadcrumbs>
            </div>

            <div class="flw-content__mobile-menu-area ">
              <div
                class="flw-content__mobile-menu ${this.showMobileMenu
            ? ''
            : 'menu-close'}"
              >
                <slot name="mobile-menu"></slot>
              </div>
            </div>
            <div class="flw-content-template__body">
              <slot> </slot>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    mobileMenuButtonClicked() {
        this.showMobileMenu = !this.showMobileMenu;
        const mobileMenu = this.shadowRoot?.querySelector('.flw-content__mobile-menu');
        if (!this.showMobileMenu) {
            setTimeout(() => {
                mobileMenu?.classList.add('flw-hidden');
            }, 300);
        }
        else {
            mobileMenu?.classList.remove('flw-hidden');
            setTimeout(() => {
                mobileMenu?.classList.add('menu-open');
            }, 30);
        }
    }
};
__decorate([
    property({ type: String })
], TemplateContentComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: Object })
], TemplateContentComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: Boolean })
], TemplateContentComponent.prototype, "fIsDashboard", void 0);
__decorate([
    property({ type: Array })
], TemplateContentComponent.prototype, "fBreadcrumbs", void 0);
__decorate([
    state()
], TemplateContentComponent.prototype, "showMobileMenu", void 0);
__decorate([
    event('fTitleClick')
], TemplateContentComponent.prototype, "fTitleClick", void 0);
__decorate([
    event('fBreadcrumbsClick')
], TemplateContentComponent.prototype, "fBreadcrumbsClick", void 0);
TemplateContentComponent = __decorate([
    customElement('template-content')
], TemplateContentComponent);
export { TemplateContentComponent };

export const Content = createComponent({
    tagName: 'template-content',
    elementClass: TemplateContentComponent,
    react: React,
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/molecules';
import { generateUUID } from 'fstp-ui/src/utils';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeDrawerComponent = class MoleculeDrawerComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fIsOpen = false;
        this.fIcon = AtomIconsEnum.FUNNEL;
        this.fIconType = AtomIconsTypeEnum.FILL;
        this.fTitle = '';
        this.fHasTitle = false;
        this.fDescription = '';
        this.fHasDescription = false;
        this.fHasCloseButton = false;
        this.fIsCloseOnOutsideClick = false;
        this.id = generateUUID();
        this.opened = false;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fIsOpen')) {
            if (this.fIsOpen) {
                this.show();
                this.fOpened?.(this);
                this.opened = true;
                setTimeout(() => {
                    this.opened = false;
                }, 100);
            }
            else {
                this.hide();
                this.fClosed?.(this);
            }
        }
    }
    firstUpdated() {
        if (this.fIsCloseOnOutsideClick) {
            document.addEventListener('click', (event) => {
                if (this.drawer && this.drawerArea) {
                    const path = event.composedPath();
                    let isClosed = true;
                    Object.values(path).map((item) => {
                        const el = item;
                        if (el.tagName == 'MOLECULE-DROPDOWN' ||
                            el.tagName == 'MOLECULE-DATEPICKER' ||
                            el.tagName == 'MOLECULE-DROPDOWN-ITEM') {
                            isClosed = false;
                            return;
                        }
                    });
                    if (isClosed &&
                        this.drawerArea &&
                        !path.includes(this.drawerArea) &&
                        !this.opened) {
                        this.hide();
                    }
                }
            });
        }
    }
    render() {
        return html `
      <div
        id="${this.id}"
        class="flw-drawer-area"
      >
        ${this.fIsOpen
            ? html `
              <div class="flw-drawer -flw-right-420 flw-animate-drawer-open">
                <div class="flw-drawer__header">
                  <div class="flw-drawer__header-close">
                    <div class="flw-drawer__header-close-icon">
                      <atom-icon
                        fName="${this.fIcon}"
                        fType="${this.fIconType}"
                        fColor="flw-text-primary-core"
                        fSize="48"
                      ></atom-icon>
                    </div>
                    ${this.fHasCloseButton
                ? html ` <atom-close-button
                          fSize="large"
                          fColor="neutral-600"
                          @fClick="${() => {
                    this.hide();
                }}"
                        ></atom-close-button>`
                : ''}
                  </div>
                  <div class="flw-drawer__header-title">
                    ${this.fHasTitle
                ? html ` <atom-heading
                          fLevel="4"
                          fText="${this.fTitle}"
                        ></atom-heading>`
                : ''}
                    ${this.fHasDescription
                ? html `
                          <atom-paragraph
                            fSize="flw-text-body-medium"
                            fText="${this.fDescription}"
                            fColor="flw-text-neutral-800"
                          ></atom-paragraph>
                        `
                : ''}
                  </div>
                </div>
                <div class="flw-drawer__content">
                  <slot></slot>
                </div>
                <div class="flw-drawer__footer">
                  <slot name="footer"></slot>
                </div>
              </div>
            `
            : ''}
      </div>
    `;
    }
    show() {
        this.fIsOpen = true;
        const area = this.shadowRoot?.getElementById(this.id);
        area.style.display = 'block';
        setTimeout(() => {
            this.drawer.style.right = '0';
        }, 390);
    }
    hide() {
        if (this.drawer) {
            this.drawer?.classList.remove('flw-animate-drawer-open');
            this.drawer?.classList.add('flw-animate-drawer-close');
        }
        setTimeout(() => {
            this.fIsOpen = false;
            this.drawerArea.style.display = 'none';
        }, 390);
    }
};
__decorate([
    property({ type: Boolean })
], MoleculeDrawerComponent.prototype, "fIsOpen", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], MoleculeDrawerComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], MoleculeDrawerComponent.prototype, "fIconType", void 0);
__decorate([
    property({ type: String })
], MoleculeDrawerComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDrawerComponent.prototype, "fHasTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeDrawerComponent.prototype, "fDescription", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDrawerComponent.prototype, "fHasDescription", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDrawerComponent.prototype, "fHasCloseButton", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeDrawerComponent.prototype, "fIsCloseOnOutsideClick", void 0);
__decorate([
    state()
], MoleculeDrawerComponent.prototype, "id", void 0);
__decorate([
    state()
], MoleculeDrawerComponent.prototype, "opened", void 0);
__decorate([
    event('fOpened')
], MoleculeDrawerComponent.prototype, "fOpened", void 0);
__decorate([
    event('fClosed')
], MoleculeDrawerComponent.prototype, "fClosed", void 0);
__decorate([
    query('.flw-drawer-area')
], MoleculeDrawerComponent.prototype, "drawerArea", void 0);
__decorate([
    query('.flw-drawer')
], MoleculeDrawerComponent.prototype, "drawer", void 0);
MoleculeDrawerComponent = __decorate([
    customElement('molecule-drawer')
], MoleculeDrawerComponent);
export { MoleculeDrawerComponent };
export const Drawer = createComponent({
    tagName: 'molecule-drawer',
    elementClass: MoleculeDrawerComponent,
    react: React,
    events: {
        fOpened: 'fOpened',
        fClosed: 'fClosed',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, state, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeToastIconEnum, MoleculeToastPositionEnum, MoleculeToastTypeEnum, } from 'fstp-ui/src/models/molecules';
import { AtomIconSizeEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import 'fstp-ui/src/components/atoms';
import { generateUUID } from 'fstp-ui/src/utils';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeToastComponent = class MoleculeToastComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fAutoClose = 3000;
        this.fDescription = '';
        this.fTitle = '';
        this.fHasTitle = false;
        this.fHasCloseButton = false;
        this.fTrigger = 0;
        this.fPosition = MoleculeToastPositionEnum.TOP_RIGHT;
        this.fType = MoleculeToastTypeEnum.INFO;
        this.toastList = [];
        this.openToast = () => `
    <div
      class="flw-toast--body flw-bg-${this.fType}-core "
    >
      <atom-icon
        fName="${this.getIcon()}"
        fSize="${AtomIconSizeEnum.SIZE_48}"
        fColor="${CommonTextColorsEnum.Neutral100}"
        fType="${AtomIconsTypeEnum.OUTLINE}"
      ></atom-icon>
      <div
        class="flw-toast--body-texts"
      >
      ${this.fHasTitle
            ? ` <atom-heading
              fLevel="5"
              fText="${this.fTitle}"
              fColor="${CommonTextColorsEnum.Neutral100}"
              fClass="flw-toast--body-texts__sub"
            ></atom-heading>`
            : ''}
             
        <atom-paragraph
          fSize="flw-text-body-large"
          fText="${this.fDescription}"
          fColor="${CommonTextColorsEnum.Neutral200}"
          fClass="flw-toast--body-texts__sub"
        ></atom-paragraph>
      </div>
      <div class="flw-toast--close-button">
          ${this.fHasCloseButton
            ? ` <atom-close-button
                  fColor="neutral-100"
                  fSize="medium"
                ></atom-close-button>`
            : ''}
      </div>
    </div>
      
  </div>
`;
        this.getIcon = () => {
            const type = this.fType.toUpperCase();
            const validIconEnum = MoleculeToastIconEnum;
            return validIconEnum[type];
        };
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fTrigger') &&
            this.fTrigger &&
            this.fTrigger > 0) {
            this.trigger();
        }
    }
    createToastArea() {
        const toastArea = document.querySelector(`.flw-toast--area.${this.fPosition}`);
        if (toastArea == null) {
            const toastAreaElement = document.createElement('div');
            toastAreaElement.classList.add('flw-toast--area');
            toastAreaElement.classList.add(this.fPosition);
            document.body.appendChild(toastAreaElement);
        }
    }
    render() {
        this.childListener();
        this.createToastArea();
        return html `
      <div
        id="${this.fId}"
        class="flw-relative"
      >
        <slot></slot>
      </div>
    `;
    }
    trigger() {
        this.fOpened?.(this);
        const newElement = document.createElement('div');
        const newElementID = `${this.fId}-${this.toastList.length + 1}`;
        newElement.innerHTML = this.openToast();
        this.toastList.push(newElementID);
        newElement.id = newElementID;
        newElement.classList.add('flw-toast--item');
        document
            .querySelector(`.flw-toast--area.${this.fPosition}`)
            ?.appendChild(newElement);
        setTimeout(() => newElement.classList.add('flw-toast--opened'), 100);
        setTimeout(() => {
            this.toastList.forEach((item, index) => {
                if (item === newElementID) {
                    this.toastList.splice(index, 1);
                }
            });
            newElement.classList.add('flw-toast--closed');
            this.fClosed?.(this);
            setTimeout(() => document
                .querySelector(`.flw-toast--area.${this.fPosition}`)
                ?.removeChild(newElement), 100);
        }, this.fAutoClose);
        this.closeListener(newElement);
    }
    closeListener(el) {
        if ('addEventListener' in el) {
            el.addEventListener('click', () => {
                this.toastList.forEach((item, index) => {
                    if (item === el.id) {
                        this.toastList.splice(index, 1);
                    }
                });
                el.classList.add('closed');
                this.fClosed?.(this);
                setTimeout(() => document
                    .querySelector(`.flw-toast--area.${this.fPosition}`)
                    ?.removeChild(el), 100);
            });
        }
    }
    childListener() {
        const child = this.children.length > 0
            ? this.children[0]
            : html `<div></div>`;
        if ('addEventListener' in child) {
            child.addEventListener('click', () => {
                this.trigger();
            });
        }
    }
};
__decorate([
    property({ type: Number })
], MoleculeToastComponent.prototype, "fAutoClose", void 0);
__decorate([
    property({ type: String })
], MoleculeToastComponent.prototype, "fDescription", void 0);
__decorate([
    property({ type: String })
], MoleculeToastComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeToastComponent.prototype, "fHasTitle", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeToastComponent.prototype, "fHasCloseButton", void 0);
__decorate([
    property({ type: Number })
], MoleculeToastComponent.prototype, "fTrigger", void 0);
__decorate([
    property({ type: MoleculeToastPositionEnum })
], MoleculeToastComponent.prototype, "fPosition", void 0);
__decorate([
    property({ type: MoleculeToastTypeEnum })
], MoleculeToastComponent.prototype, "fType", void 0);
__decorate([
    event('fOpened')
], MoleculeToastComponent.prototype, "fOpened", void 0);
__decorate([
    event('fClosed')
], MoleculeToastComponent.prototype, "fClosed", void 0);
__decorate([
    state()
], MoleculeToastComponent.prototype, "toastList", void 0);
MoleculeToastComponent = __decorate([
    customElement('molecule-toast')
], MoleculeToastComponent);
export { MoleculeToastComponent };
export const Toast = createComponent({
    tagName: 'molecule-toast',
    elementClass: MoleculeToastComponent,
    react: React,
    events: {
        fOpened: 'fOpened',
        fClosed: 'fClosed',
    },
});
export function toast(properties) {
    const toast = document.createElement('molecule-toast');
    toast.fDescription = properties.fDescription ?? '';
    toast.fTitle = properties.fTitle ?? '';
    toast.fHasTitle = properties.fHasTitle ?? false;
    toast.fType = properties.fType ?? MoleculeToastTypeEnum.INFO;
    toast.fAutoClose = properties.fAutoClose ?? 3000;
    toast.fHasCloseButton = properties.fHasCloseButton ?? false;
    toast.fClass = properties.fClass ?? '';
    toast.fId = properties.fId ?? generateUUID();
    toast.fPosition = properties.fPosition ?? MoleculeToastPositionEnum.TOP_RIGHT;
    toast.fTrigger = 1;
    document.body.appendChild(toast);
}

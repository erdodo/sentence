var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { MoleculeModalPositionEnum, MoleculeModalSizeEnum, MoleculeModalStatusEnum, MoleculeModalTypeEnum, } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/atoms';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomIconSizeEnum, AtomParagraphSizesEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeModalComponent = class MoleculeModalComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fPosition = MoleculeModalPositionEnum.TOP;
        this.fIsOpen = false;
        this.fTitle = '';
        this.fIsCloseOnOutsideClick = false;
        this.fType = MoleculeModalTypeEnum.DEFAULT;
        this.fSize = MoleculeModalSizeEnum.MEDIUM;
        this.fContentClass = '';
        this.fHasHeader = false;
        this.fHasTitle = false;
        this.fHasDescription = false;
        this.fHasFooter = false;
        this.fHasIcon = false;
        this.fHasCloseButton = false;
        this.fDescription = '';
        this.fIcon = AtomIconsEnum.INFO;
        this.fIconType = AtomIconsTypeEnum.OUTLINE;
        this.fStatus = MoleculeModalStatusEnum.PRIMARY;
        this.opened = false;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fIsOpen')) {
            if (this.fIsOpen) {
                this.show();
                this.opened = true;
                setTimeout(() => {
                    this.opened = false;
                }, 100);
                if (this.fIsCloseOnOutsideClick) {
                    this.modalArea.addEventListener('click', (event) => {
                        const path = event.composedPath();
                        if (this.modalContent &&
                            !path.includes(this.modalContent) &&
                            !this.opened) {
                            this.hide();
                        }
                    });
                }
            }
            else {
                this.hide();
            }
        }
        this.renderOptions.host.setAttribute('fId', `${this.fId}`);
    }
    render() {
        return html `
      <div
        class="flw-modal"
        id="${this.fId}"
      >
        ${this.fIsOpen
            ? html `
              <div
                class="
                  flw-modal__area 
                  flw-modal--${this.fPosition} 
                  flw-modal--${this.fType}
                  "
              >
                <div
                  class="${`flw-modal__content flw-modal--${this.fSize} flw-animate-modal-open ` /*TODO:It causes corruption when using popper.js (flw-translate-y-1020)*/}"
                >
                  ${this.fHasHeader
                ? html ` <div class="flw-modal__header">
                        <div class="flw-modal__header-buttons">
                          <div>
                            ${this.fHasIcon
                    ? html `
                                  <atom-icon
                                    fClass="flw-bg-${this.fStatus}-clear"
                                    fName="${this.fIcon}"
                                    fType="${this.fIconType}"
                                    fSize="${this.fSize ===
                        MoleculeModalSizeEnum.SMALL
                        ? AtomIconSizeEnum.SIZE_36
                        : AtomIconSizeEnum.SIZE_48}"
                                    fColor="flw-text-${this.fStatus}-core"
                                  ></atom-icon>
                                `
                    : html ``}
                          </div>
                          ${this.fHasCloseButton
                    ? html `
                                <atom-close-button
                                  fColor="neutral-600"
                                  fSize="medium"
                                  @click="${() => {
                        this.hide();
                    }}"
                                ></atom-close-button>
                              `
                    : html ``}
                        </div>
                        <div class="flw-modal__header-titles">
                          ${this.fHasTitle
                    ? html `
                                <atom-heading
                                  fLevel="${this.getTitleSize()}"
                                  fText="${this.fTitle}"
                                  fColor="flw-text-neutral-800"
                                ></atom-heading>
                              `
                    : html ``}
                          ${this.fHasDescription
                    ? html `
                                <atom-paragraph
                                  fClass="flw-modal__header-description"
                                  fText="${this.fDescription}"
                                  fSize="${this.fSize ===
                        MoleculeModalSizeEnum.LARGE
                        ? AtomParagraphSizesEnum.Medium
                        : AtomParagraphSizesEnum.Small}"
                                  fColor="flw-text-neutral-800"
                                ></atom-paragraph>
                              `
                    : html ``}
                        </div>
                      </div>`
                : html ``}
                  <div class="flw-modal__body"><slot></slot></div>
                  ${this.fHasFooter
                ? html ` <div class="flw-modal__footer">
                        <slot name="footer"></slot>
                      </div>`
                : html ``}
                </div>
              </div>
            `
            : ''}
      </div>
    `;
    }
    getTitleSize() {
        switch (this.fSize) {
            case MoleculeModalSizeEnum.SMALL:
                return 6;
            case MoleculeModalSizeEnum.MEDIUM:
                return 5;
            case MoleculeModalSizeEnum.LARGE:
                return 3;
            default:
                return 5;
        }
    }
    show() {
        this.fIsOpen = true;
        this.modal.style.display = '';
        this.fOpened?.(this);
        setTimeout(() => {
            /*
            TODO:It causes corruption when using popper.js.
            try {
              const modal = this.shadowRoot?.querySelector(
                '.flw-modal__content'
              ) as HTMLElement;
              modal.style.transform = 'translateY(0)';
            } catch (e) {
              return e;
            }*/
        }, 390);
    }
    hide() {
        if (this.fIsOpen) {
            this.modalContent.classList.remove('flw-animate-modal-open');
            this.modalContent.classList.add('flw-animate-modal-close');
        }
        setTimeout(() => {
            this.modal.style.display = '';
            this.fOpened?.(this);
            this.fIsOpen = false;
        }, 390);
    }
};
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fPosition", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fIsOpen", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fIsCloseOnOutsideClick", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fType", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fContentClass", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fHasHeader", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fHasTitle", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fHasDescription", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fHasFooter", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeModalComponent.prototype, "fHasCloseButton", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fDescription", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fIconType", void 0);
__decorate([
    property({ type: String })
], MoleculeModalComponent.prototype, "fStatus", void 0);
__decorate([
    state()
], MoleculeModalComponent.prototype, "opened", void 0);
__decorate([
    event('fOpened')
], MoleculeModalComponent.prototype, "fOpened", void 0);
__decorate([
    event('fClosed')
], MoleculeModalComponent.prototype, "fClosed", void 0);
__decorate([
    query('.flw-modal__content')
], MoleculeModalComponent.prototype, "modalContent", void 0);
__decorate([
    query('.flw-modal__area')
], MoleculeModalComponent.prototype, "modalArea", void 0);
__decorate([
    query('.flw-modal')
], MoleculeModalComponent.prototype, "modal", void 0);
MoleculeModalComponent = __decorate([
    customElement('molecule-modal')
], MoleculeModalComponent);
export { MoleculeModalComponent };
export const Modal = createComponent({
    tagName: 'molecule-modal',
    elementClass: MoleculeModalComponent,
    react: React,
    events: {
        fOpened: 'fOpened',
        fClosed: 'fClosed',
    },
});
export function openModal(id) {
    const modal = document.querySelector(`molecule-modal[fId="${id}"]`);
    if (modal) {
        modal.show();
    }
}
export function closeModal(id) {
    const modal = document.querySelector(`molecule-modal[fId="${id}"]`);
    if (modal) {
        modal.hide();
    }
}

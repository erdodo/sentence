var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, state, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeAlertTypeEnum, MoleculeTimelineStatusEnum, } from 'fstp-ui/src/models/molecules';
import { AtomButtonStatusEnum, AtomIconSizeEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeTimelineComponent = class MoleculeTimelineComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fItem = [];
        this.width = 0;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        this.width =
            this.shadowRoot?.querySelector('.flw-timeline')?.clientWidth ?? 0;
    }
    render() {
        return html `
      <div class="flw-timeline">
        ${this.fItem.map((item, index) => {
            return html `
            <div class="flw-timeline__step ">
              ${this.getCard(item, index % 2 == 0, 1)}
              ${this.getMarker(item, index == this.fItem.length - 1)}
              ${this.getCard(item, index % 2 != 0, 2)}
            </div>
          `;
        })}
      </div>
    `;
    }
    getMarker(item, isLastElement) {
        return html `
      <div class="flw-timeline__marker">
        <div class="flw-timeline__icon flw-timeline__icon-${item.fStatus}">
          <atom-icon
            fNodes="${item.fIcon}"
            fType="${AtomIconsTypeEnum.NODE}"
            fSize="${AtomIconSizeEnum.SIZE_32}"
            fColor="flw-text-neutral-100"
          ></atom-icon>
        </div>
        <div
          class="flw-timeline__line ${isLastElement ? 'flw-opacity-0' : ''}"
        ></div>
      </div>
    `;
    }
    getCard(item, isEmpty, index) {
        let alertType = MoleculeAlertTypeEnum.INFO;
        switch (item.fStatus) {
            case MoleculeTimelineStatusEnum.RUNNING:
                alertType = MoleculeAlertTypeEnum.INFO;
                break;
            case MoleculeTimelineStatusEnum.SUCCESS:
                alertType = MoleculeAlertTypeEnum.SUCCESS;
                break;
            case MoleculeTimelineStatusEnum.FAILURE:
                alertType = MoleculeAlertTypeEnum.DANGER;
                break;
            default:
                alertType = MoleculeAlertTypeEnum.INFO;
        }
        return html `
      <div
        class="flw-timeline__card flw-timeline__card-${item.fStatus} 
          ${isEmpty && this.width >= 768 ? 'flw-opacity-0 ' : ''}
          ${index === 1 ? 'flw-flex' : ''}
          ${this.width < 768 && index === 1 ? 'flw-hidden' : ''}
        "
      >
        <div class="flw-timeline__card__title">${item.fTitle}</div>
        <div class="flw-timeline__card__date">${item.fDate}</div>
        <div class="flw-timeline__card__content">
          <span>${item.fContent}</span>
        </div>
        ${item.fButtonIsShow
            ? html `
              <div class="flw-timeline__card__button">
                <atom-button
                  fStatus="${this.getButtonStatus(item.fStatus)}"
                  fSize="flw-button--medium"
                  fShowType="flw-button--ghost"
                  fHasLabel
                  fLabel="${item.fButtonLabel}"
                  @click="${() => {
                this.fClick?.(item);
            }}"
                ></atom-button>
              </div>
            `
            : html ``}
        <molecule-alert
          fParagraph="${item.fAlertParagraph}"
          fType="${alertType}"
          fClass="flw-timeline__card__alert"
          class="flw-w-full"
        ></molecule-alert>
      </div>
    `;
    }
    getButtonStatus(status) {
        switch (status) {
            case MoleculeTimelineStatusEnum.FAILURE:
                return AtomButtonStatusEnum.DANGER;
            case MoleculeTimelineStatusEnum.SUCCESS:
                return AtomButtonStatusEnum.SUCCESS;
            default:
                return AtomButtonStatusEnum.PRIMARY;
        }
    }
};
__decorate([
    property({ type: Array })
], MoleculeTimelineComponent.prototype, "fItem", void 0);
__decorate([
    state()
], MoleculeTimelineComponent.prototype, "width", void 0);
__decorate([
    event('fClick')
], MoleculeTimelineComponent.prototype, "fClick", void 0);
MoleculeTimelineComponent = __decorate([
    customElement('molecule-timeline')
], MoleculeTimelineComponent);
export { MoleculeTimelineComponent };
export const Timeline = createComponent({
    tagName: 'molecule-timeline',
    elementClass: MoleculeTimelineComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

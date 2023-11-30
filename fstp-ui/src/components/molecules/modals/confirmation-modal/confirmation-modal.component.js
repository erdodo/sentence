var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { MoleculeConfirmationStatusEnum, } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/molecules';
import { AtomButtonShowTypeEnum, AtomButtonStatusEnum, AtomIconsEnum, AtomIconsOtherEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeConfirmationModalComponent = class MoleculeConfirmationModalComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = MoleculeConfirmationStatusEnum.WARNING;
        this.fCancelButtonStatus = AtomButtonStatusEnum.NEUTRAL;
        this.fCancelButtonShowType = AtomButtonShowTypeEnum.OUTLINE;
        this.fCancelButtonLabel = 'Cancel';
        this.fConfirmButtonStatus = AtomButtonStatusEnum.NEUTRAL;
        this.fConfirmButtonShowType = AtomButtonShowTypeEnum.FILL;
        this.fConfirmButtonLabel = 'Delete';
        this.statusColor = '';
        this.statusIcon = '';
    }
    render() {
        return html `
      <molecule-modal
        fPosition="center"
        .fIsOpen="${this.fIsOpen}"
        fSize="small"
        .fShowHeader="false"
      >
        <div class="flw-confirmation-modal">
          <div class="flw-confirmation-modal__content">
            <div
              class="flw-confirmation-modal__content-header flw-bg-${this
            .fStatus}-clear"
            >
              <atom-icon
                fName="${this.statusIcon}"
                fSize="48"
                fColor="${this.statusColor}"
                fType="${AtomIconsTypeEnum.FILL}"
              ></atom-icon>
              <atom-icon
                class="flw-confirmation-modal__content-header-icon"
                fSize="96"
                fColor="${CommonTextColorsEnum.Neutral300}"
                fType="${AtomIconsTypeEnum.OTHER}"
                fOthers="${AtomIconsOtherEnum.CIRCLES}"
              ></atom-icon>
            </div>
            <div class="flw-confirmation-modal__content-title">
              <atom-heading
                fLevel="5"
                fText="${this.fTitle}"
                fColor="${CommonTextColorsEnum.Neutral800}"
              ></atom-heading>
              <atom-paragraph
                fSize="flw-text-body-small"
                fText="${this.fDescription}"
                fColor="${CommonTextColorsEnum.Neutral800}"
              ></atom-paragraph>
            </div>
          </div>
          <div class="flw-confirmation-modal__footer">
            ${this.fCancelButtonIsShow
            ? html `
                  <atom-button
                    fStatus="${this.fCancelButtonStatus}"
                    fSize="flw-button--medium"
                    fShowType="${this.fCancelButtonShowType}"
                    fHasLabel
                    fLabel="${this.fCancelButtonLabel}"
                    class="flw-w-full"
                    fClass="flw-w-full"
                    fId="${this.fId}-cancel"
                    @click="${() => {
                this.fClickCancel?.(this);
                this.hide();
            }}"
                  ></atom-button>
                `
            : html ``}
            ${this.fConfirmButtonIsShow
            ? html `<atom-button
                  fStatus="${this.fConfirmButtonStatus}"
                  fSize="flw-button--medium"
                  fShowType="${this.fConfirmButtonShowType}"
                  fHasLabel
                  fLabel="${this.fConfirmButtonLabel}"
                  class="flw-w-full"
                  fClass="flw-w-full"
                  @click="${() => {
                this.fClickConfirm?.(this);
                this.hide();
            }}"
                ></atom-button> `
            : html ``}
          </div>
        </div>
      </molecule-modal>
    `;
    }
    firstUpdated() {
        this.setStatusColor();
    }
    setStatusColor() {
        switch (this.fStatus) {
            case MoleculeConfirmationStatusEnum.SUCCESS:
                this.statusColor = CommonTextColorsEnum.SuccessCore;
                this.statusIcon = AtomIconsEnum.CHECKMARK_CIRCLE_2;
                break;
            case MoleculeConfirmationStatusEnum.DANGER:
                this.statusColor = CommonTextColorsEnum.DangerCore;
                this.statusIcon = AtomIconsEnum.CLOSE_CIRCLE;
                break;
            case MoleculeConfirmationStatusEnum.WARNING:
                this.statusColor = CommonTextColorsEnum.WarningCore;
                this.statusIcon = AtomIconsEnum.ALERT_CIRCLE;
                break;
            case MoleculeConfirmationStatusEnum.INFO:
                this.statusColor = CommonTextColorsEnum.InfoCore;
                this.statusIcon = AtomIconsEnum.ALERT_CIRCLE;
                break;
            default:
                this.statusColor = CommonTextColorsEnum.InfoCore;
                this.statusIcon = AtomIconsEnum.ALERT_CIRCLE;
                break;
        }
    }
    hide() {
        this.shadowRoot &&
            this.shadowRoot.querySelector('molecule-modal').hide();
        setTimeout(() => {
            this.fIsOpen = false;
        }, 390);
    }
};
__decorate([
    property({ type: MoleculeConfirmationStatusEnum })
], MoleculeConfirmationModalComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeConfirmationModalComponent.prototype, "fIsOpen", void 0);
__decorate([
    property({ type: String })
], MoleculeConfirmationModalComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeConfirmationModalComponent.prototype, "fDescription", void 0);
__decorate([
    property({ type: AtomButtonStatusEnum })
], MoleculeConfirmationModalComponent.prototype, "fCancelButtonStatus", void 0);
__decorate([
    property({ type: AtomButtonShowTypeEnum })
], MoleculeConfirmationModalComponent.prototype, "fCancelButtonShowType", void 0);
__decorate([
    property({ type: String })
], MoleculeConfirmationModalComponent.prototype, "fCancelButtonLabel", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeConfirmationModalComponent.prototype, "fCancelButtonIsShow", void 0);
__decorate([
    property({ type: AtomButtonStatusEnum })
], MoleculeConfirmationModalComponent.prototype, "fConfirmButtonStatus", void 0);
__decorate([
    property({ type: AtomButtonShowTypeEnum })
], MoleculeConfirmationModalComponent.prototype, "fConfirmButtonShowType", void 0);
__decorate([
    property({ type: String })
], MoleculeConfirmationModalComponent.prototype, "fConfirmButtonLabel", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeConfirmationModalComponent.prototype, "fConfirmButtonIsShow", void 0);
__decorate([
    state()
], MoleculeConfirmationModalComponent.prototype, "statusColor", void 0);
__decorate([
    state()
], MoleculeConfirmationModalComponent.prototype, "statusIcon", void 0);
__decorate([
    event('fClickCancel')
], MoleculeConfirmationModalComponent.prototype, "fClickCancel", void 0);
__decorate([
    event('fClickConfirm')
], MoleculeConfirmationModalComponent.prototype, "fClickConfirm", void 0);
MoleculeConfirmationModalComponent = __decorate([
    customElement('molecule-confirmation-modal')
], MoleculeConfirmationModalComponent);
export { MoleculeConfirmationModalComponent };
export const ConfirmationModal = createComponent({
    tagName: 'molecule-confirmation-modal',
    elementClass: MoleculeConfirmationModalComponent,
    react: React,
    events: {
        fClickCancel: 'fClickCancel',
        fClickConfirm: 'fClickConfirm',
    },
});
export async function confirmation(parameter) {
    const confirm = document.createElement('molecule-confirmation-modal');
    confirm.fStatus = parameter.fStatus ?? MoleculeConfirmationStatusEnum.SUCCESS;
    confirm.fTitle = parameter.fTitle ?? '';
    confirm.fDescription = parameter.fDescription ?? '';
    confirm.fCancelButtonLabel = parameter.fCancelButtonLabel ?? 'Cancel';
    confirm.fConfirmButtonLabel = parameter.fConfirmButtonLabel ?? 'Delete';
    confirm.fCancelButtonStatus =
        parameter.fCancelButtonStatus ?? AtomButtonStatusEnum.NEUTRAL;
    confirm.fConfirmButtonStatus =
        parameter.fConfirmButtonStatus ?? AtomButtonStatusEnum.NEUTRAL;
    confirm.fCancelButtonShowType =
        parameter.fCancelButtonShowType ?? AtomButtonShowTypeEnum.OUTLINE;
    confirm.fConfirmButtonShowType =
        parameter.fConfirmButtonShowType ?? AtomButtonShowTypeEnum.FILL;
    confirm.fConfirmButtonIsShow = parameter.fConfirmButtonIsShow ?? true;
    confirm.fCancelButtonIsShow = parameter.fCancelButtonIsShow ?? true;
    confirm.fIsOpen = true;
    document.body.appendChild(confirm);
    return new Promise((resolve, reject) => {
        confirm.addEventListener('fClickCancel', () => {
            reject();
        });
        confirm.addEventListener('fClickConfirm', () => {
            resolve();
        });
    });
}

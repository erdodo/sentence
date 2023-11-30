var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, state, } from 'fstp-ui/src/components/base.component';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { MoleculeNotificationDropdownItemStatus } from 'fstp-ui/src/models/molecules';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeNotificationItemDropdownComponent = class MoleculeNotificationItemDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fTitle = '';
        this.fTime = '';
        this.fStatus = MoleculeNotificationDropdownItemStatus.SUCCESS;
        this.statusColor = '';
        this.statusIcon = '';
    }
    render() {
        return html `<molecule-dropdown-item class="flw-w-full">
      <div class="flw-notification-dropdown-item">
        <div
          class="flw-notification-dropdown-item__status flw-bg-${this
            .statusColor}-clear"
        >
          <atom-icon
            fName="${this.statusIcon}"
            fSize="32"
            fColor="flw-text-${this.statusColor}-core"
            fType="fill"
          />
        </div>
        <div class="flw-notification-dropdown-item__content">
          <span class="flw-notification-dropdown-item__title">
            ${this.fTitle}
          </span>
          <span class="flw-notification-dropdown-item__time">
            ${this.fTime}
          </span>
        </div>
      </div>
    </molecule-dropdown-item>`;
    }
    firstUpdated() {
        this.getStatus();
    }
    getStatus() {
        switch (this.fStatus) {
            case MoleculeNotificationDropdownItemStatus.SUCCESS:
                this.statusColor = 'success';
                this.statusIcon = AtomIconsEnum.CHECKMARK_CIRCLE_2;
                break;
            case MoleculeNotificationDropdownItemStatus.WAITING:
                this.statusColor = 'warning';
                this.statusIcon = AtomIconsEnum.CLOCK;
                break;
            case MoleculeNotificationDropdownItemStatus.ERROR:
                this.statusColor = 'danger';
                this.statusIcon = AtomIconsEnum.CLOSE_CIRCLE;
                break;
            default:
                this.statusColor = 'success';
                this.statusIcon = AtomIconsEnum.CHECKMARK_CIRCLE_2;
                break;
        }
    }
};
__decorate([
    property({ type: String })
], MoleculeNotificationItemDropdownComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeNotificationItemDropdownComponent.prototype, "fTime", void 0);
__decorate([
    property({ type: MoleculeNotificationDropdownItemStatus })
], MoleculeNotificationItemDropdownComponent.prototype, "fStatus", void 0);
__decorate([
    state()
], MoleculeNotificationItemDropdownComponent.prototype, "statusColor", void 0);
__decorate([
    state()
], MoleculeNotificationItemDropdownComponent.prototype, "statusIcon", void 0);
MoleculeNotificationItemDropdownComponent = __decorate([
    customElement('molecule-notification-dropdown-item')
], MoleculeNotificationItemDropdownComponent);
export { MoleculeNotificationItemDropdownComponent };
export const NotificationDropdownItem = createComponent({
    tagName: 'molecule-notification-dropdown-item',
    elementClass: MoleculeNotificationItemDropdownComponent,
    react: React,
});

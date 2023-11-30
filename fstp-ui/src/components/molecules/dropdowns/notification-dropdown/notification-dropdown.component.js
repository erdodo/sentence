var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { MoleculeDropdownPlacement, } from 'fstp-ui/src/models/molecules';
import { IPopperEventsEnum, fPopper } from 'fstp-ui/src/functions';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeNotificationDropdownComponent = class MoleculeNotificationDropdownComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fShowEvents = [IPopperEventsEnum.CLICK];
        this.fHideEvents = [IPopperEventsEnum.OUTSIDE_CLICK];
        this.fPlacement = MoleculeDropdownPlacement.BOTTOM_END;
        this.fHasHeader = false;
        this.fCount = 0;
        this.fHasNotification = false;
        this.getList = (list) => {
            return html `
      ${list && list.length >= 0
                ? list.map((item) => {
                    return html `
              <molecule-notification-dropdown-item
                fTitle="${item.fTitle}"
                fTime="${item.fTime}"
                fStatus="${item.fStatus}"
                class="flw-w-full"
                @click="${() => {
                        this.fClick?.(item);
                    }}"
              >
              </molecule-notification-dropdown-item>
            `;
                })
                : html `<slot></slot>`}
    `;
        };
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        fPopper({
            trigger: this.trigger,
            menu: this.content,
            options: {
                placement: this.fPlacement,
                showEvent: this.fShowEvents,
                hideEvent: this.fHideEvents,
            },
        });
    }
    render() {
        return html `
      <div class="flw-notification-dropdown">
        <div class="flw-notification-dropdown__trigger">
          <atom-menu-button
            fIcon="bell-on"
            fType="header"
            fClass=""
            .fHasNotification="${this.fHasNotification}"
          />
        </div>
        <div class="flw-notification-dropdown__content flw-dropdown__menu">
          ${this.fHasHeader
            ? html `
                <div class="flw-notification-dropdown__header">
                  <atom-heading
                    fLevel="6"
                    fText="Realtime Jobs Status"
                    fColor="flw-text-neutral-800"
                  ></atom-heading>
                  <div class="flw-notification-dropdown__header-count">
                    ${this.fCount}
                  </div>
                </div>
              `
            : ''}
          ${this.getList(this.fItems)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeNotificationDropdownComponent.prototype, "fShowEvents", void 0);
__decorate([
    property({ type: Array })
], MoleculeNotificationDropdownComponent.prototype, "fHideEvents", void 0);
__decorate([
    property({ type: String })
], MoleculeNotificationDropdownComponent.prototype, "fPlacement", void 0);
__decorate([
    property({ type: Array })
], MoleculeNotificationDropdownComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeNotificationDropdownComponent.prototype, "fHasHeader", void 0);
__decorate([
    property({ type: Number })
], MoleculeNotificationDropdownComponent.prototype, "fCount", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeNotificationDropdownComponent.prototype, "fHasNotification", void 0);
__decorate([
    event('fClick')
], MoleculeNotificationDropdownComponent.prototype, "fClick", void 0);
__decorate([
    query('.flw-notification-dropdown__trigger')
], MoleculeNotificationDropdownComponent.prototype, "trigger", void 0);
__decorate([
    query('.flw-notification-dropdown__content')
], MoleculeNotificationDropdownComponent.prototype, "content", void 0);
__decorate([
    state()
], MoleculeNotificationDropdownComponent.prototype, "getList", void 0);
MoleculeNotificationDropdownComponent = __decorate([
    customElement('molecule-notification-dropdown')
], MoleculeNotificationDropdownComponent);
export { MoleculeNotificationDropdownComponent };
export const NotificationDropdown = createComponent({
    tagName: 'molecule-notification-dropdown',
    elementClass: MoleculeNotificationDropdownComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, query, state, } from 'fstp-ui/src/components/base.component';
import { tooltip } from 'fstp-ui/src/directives';
import { createComponent } from '@lit/react';
import * as React from 'react';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { IPopperEventsEnum } from 'fstp-ui/src/functions';
let MoleculeActionsComponent = class MoleculeActionsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.dropdownIsOpen = false;
    }
    render() {
        return html `
      <div
        class="flw-actions ${this.fClass}"
        id="${this.fId}"
      >
        ${this.fItems?.map((action, key) => html `
            ${action.fChildren && action.fChildren.length > 0
            ? html `
                  <molecule-dropdown
                    .fItems="${action.fChildren}"
                    fClass="flw-p-0"
                    .fHideEvents="${[
                IPopperEventsEnum.CLICK,
                IPopperEventsEnum.OUTSIDE_CLICK,
            ]}"
                    @fClick="${(e) => {
                this.fClick?.(e.detail);
            }}"
                    @fOpened="${() => {
                this.dropdownIsOpen = true;
            }}"
                    @fClosed="${() => {
                this.dropdownIsOpen = false;
            }}"
                  >
                    <atom-job-action-button
                      slot="trigger"
                      ${action.fTooltip && tooltip(action.fTooltip)}
                      .fClass="${action.fClass}"
                      ?fDisabled="${action.fDisabled}"
                      .fId="${action.fId}"
                      .fStatus="${action.fStatus}"
                      .fSize="${action.fSize}"
                      .fIcon="${this.dropdownIsOpen
                ? AtomIconsEnum.CLOSE_DEFAULT
                : action.fIcon}"
                      .fIconType="${action.fIconType}"
                    />
                  </molecule-dropdown>
                `
            : html `
                  <atom-job-action-button
                    ${action.fTooltip && tooltip(action.fTooltip)}
                    .fClass="${action.fClass}"
                    ?fDisabled="${action.fDisabled}"
                    .fId="${action.fId}"
                    .fStatus="${action.fStatus}"
                    .fSize="${action.fSize}"
                    .fIcon="${action.fIcon}"
                    .fIconType="${action.fIconType}"
                    @click="${() => {
                action.fKey = key;
                this.fClick?.(action);
            }}"
                  />
                `}
          `)}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeActionsComponent.prototype, "fItems", void 0);
__decorate([
    event('fClick')
], MoleculeActionsComponent.prototype, "fClick", void 0);
__decorate([
    state()
], MoleculeActionsComponent.prototype, "dropdownIsOpen", void 0);
__decorate([
    query('#dropdown-trigger')
], MoleculeActionsComponent.prototype, "dropdownTrigger", void 0);
MoleculeActionsComponent = __decorate([
    customElement('molecule-actions')
], MoleculeActionsComponent);
export { MoleculeActionsComponent };
export const Actions = createComponent({
    tagName: 'molecule-actions',
    elementClass: MoleculeActionsComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

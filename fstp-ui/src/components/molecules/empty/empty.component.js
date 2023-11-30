var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, } from 'fstp-ui/src/components/base.component';
import { AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomIconsEnum, AtomIconSizeEnum, AtomIconsOtherEnum, } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
import { MoleculeStatusEnum } from 'fstp-ui/src/models/molecules';
let MoleculeEmptyComponent = class MoleculeEmptyComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fHasButton = false;
        this.fTitle = 'No data found';
        this.fDescription = 'Your search did not match any results. Please try again.';
        this.fButtonText = 'Clear Filter';
        this.fIcon = AtomIconsEnum.SEARCH;
        this.fButtonStatus = AtomButtonStatusEnum.NEUTRAL;
        this.fButtonSize = AtomButtonSizeEnum.SMALL;
        this.fStatus = MoleculeStatusEnum.NEUTRAL;
        this.fButtonShowType = AtomButtonShowTypeEnum.OUTLINE;
    }
    render() {
        return html `
      <div class="flw-empty">
        <div class="flw-empty__search flw-empty--${this.fStatus}">
          <atom-icon
            fName="${this.fIcon}"
            fSize="${AtomIconSizeEnum.SIZE_48}"
          ></atom-icon>
          <atom-icon
            fClass="flw-empty__search-absolute"
            fOthers="${AtomIconsOtherEnum.CIRCLES_2}"
            fSize="${AtomIconSizeEnum.SIZE_200}"
            fType="other"
          ></atom-icon>
        </div>
        <div class="flw-empty__content">
          ${this.fTitle && this.fTitle.length > 1
            ? html `<div class="flw-empty__content-texts">
                  <atom-heading
                    fLevel="6"
                    fText="${this.fTitle}"
                    fColor="flw-text-neutral-600"
                  ></atom-heading>
                </div>`
            : html `<slot name="title"></slot>`}
            
            <atom-paragraph
              fSize="flw-text-body-small"
              fText="${this.fDescription}"
              fColor="flw-text-neutral-500"
            ></atom-paragraph>
          </div>
          ${this.fHasButton
            ? html `<atom-button
                  fStatus="${this.fButtonStatus}"
                  fSize="${this.fButtonSize}"
                  fShowType="${this.fButtonShowType}"
                  fHasLabel
                  fLabel="${this.fButtonText}"
                  @click="${() => {
                this.fClick?.(this);
            }}"
                ></atom-button>`
            : ''}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: Boolean })
], MoleculeEmptyComponent.prototype, "fHasButton", void 0);
__decorate([
    property({ type: String })
], MoleculeEmptyComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeEmptyComponent.prototype, "fDescription", void 0);
__decorate([
    property({ type: String })
], MoleculeEmptyComponent.prototype, "fButtonText", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], MoleculeEmptyComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomButtonStatusEnum })
], MoleculeEmptyComponent.prototype, "fButtonStatus", void 0);
__decorate([
    property({ type: AtomButtonSizeEnum })
], MoleculeEmptyComponent.prototype, "fButtonSize", void 0);
__decorate([
    property({ type: MoleculeStatusEnum })
], MoleculeEmptyComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: AtomButtonShowTypeEnum })
], MoleculeEmptyComponent.prototype, "fButtonShowType", void 0);
__decorate([
    event('fClick')
], MoleculeEmptyComponent.prototype, "fClick", void 0);
MoleculeEmptyComponent = __decorate([
    customElement('molecule-empty')
], MoleculeEmptyComponent);
export { MoleculeEmptyComponent };
export const Empty = createComponent({
    tagName: 'molecule-empty',
    elementClass: MoleculeEmptyComponent,
    react: React,
    events: {
        fClick: 'fClick',
    },
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { MoleculeCardMoreItems, MoleculeWidgetLabelPositionEnum, } from 'fstp-ui/src/models/molecules';
import { AtomWidgetLabelStatusEnum } from 'fstp-ui/src/models/atoms';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeWidgetCardComponent = class MoleculeWidgetCardComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fMoreItems = MoleculeCardMoreItems;
        this.fTitle = '';
        this.fHasHeader = false;
        this.fHasLoader = false;
        this.fSubLabel = '';
        this.fSubLabelStatus = AtomWidgetLabelStatusEnum.NEUTRAL;
        this.fSubLabelPosition = MoleculeWidgetLabelPositionEnum.RIGHT;
    }
    render() {
        return html `
      <div class="flw-card ${this.fClass}">
        ${this.fHasHeader
            ? html ` <div class="flw-card__header--widget">
              <h2 class="flw-card__header__title">${this.fTitle}</h2>
              <div class="flw-card__dropdown">
                <atom-widget-more-button
                  fIcon="${AtomIconsEnum.REFRESH}"
                  ?fFirst="${true}"
                  @fClick="${() => {
                this.fRefreshClick?.(this);
            }}"
                ></atom-widget-more-button>
                <molecule-dropdown
                  fClass="flw-p-0"
                  fPlacement="bottom-end"
                  .fItems="${this.fMoreItems}"
                  @fClick="${(e) => {
                this.fMoreClick?.(e.detail);
            }}"
                  inWindow
                >
                  <atom-widget-more-button
                    fIcon="${AtomIconsEnum.MORE_VERTICAL}"
                    ?fLast="${true}"
                    slot="trigger"
                  ></atom-widget-more-button>
                </molecule-dropdown>
              </div>
            </div>`
            : html ``}
        <div class="flw-card__body--widget"><slot></slot></div>
        ${this.fSubLabel && this.fSubLabel !== ''
            ? html `
              <div class="flw-card__sub-label flw-${this.fSubLabelPosition}-0">
                <atom-widget-label
                  .fLabel="${this.fSubLabel}"
                  .fPosition="bottom-${this.fSubLabelPosition}"
                  .fStatus="${this.fSubLabelStatus}"
                ></atom-widget-label>
              </div>
            `
            : html ``}
        ${this.fHasLoader
            ? html `<div class="flw-card__loader">
              <atom-loader fType="small"></atom-loader>
            </div>`
            : html ``}
      </div>
    `;
    }
};
__decorate([
    property({ type: Array })
], MoleculeWidgetCardComponent.prototype, "fMoreItems", void 0);
__decorate([
    property({ type: String })
], MoleculeWidgetCardComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeWidgetCardComponent.prototype, "fHasHeader", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeWidgetCardComponent.prototype, "fHasLoader", void 0);
__decorate([
    property({ type: String })
], MoleculeWidgetCardComponent.prototype, "fSubLabel", void 0);
__decorate([
    property({ type: String })
], MoleculeWidgetCardComponent.prototype, "fSubLabelStatus", void 0);
__decorate([
    property({ type: String })
], MoleculeWidgetCardComponent.prototype, "fSubLabelPosition", void 0);
__decorate([
    event('fMoreClick')
], MoleculeWidgetCardComponent.prototype, "fMoreClick", void 0);
__decorate([
    event('fRefreshClick')
], MoleculeWidgetCardComponent.prototype, "fRefreshClick", void 0);
MoleculeWidgetCardComponent = __decorate([
    customElement('molecule-card-widget')
], MoleculeWidgetCardComponent);
export { MoleculeWidgetCardComponent };
export const WidgetCard = createComponent({
    tagName: 'molecule-card-widget',
    elementClass: MoleculeWidgetCardComponent,
    react: React,
    events: {
        fMoreClick: 'fMoreClick',
        fRefreshClick: 'fRefreshClick',
    },
});

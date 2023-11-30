var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, html, property, state, } from 'fstp-ui/src/components/base.component';
import { MolculeStepsShowTypeEnum, MolculeStepsSizeEnum, MolculeStepsTypeEnum, } from 'fstp-ui/src/models/molecules';
import { when } from 'lit-html/directives/when.js';
import { AtomIconsEnum, AtomIconSizeEnum } from 'fstp-ui/src/models/atoms';
import { createComponent } from '@lit/react';
import * as React from 'react';
let MoleculeStepsComponent = class MoleculeStepsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fShowType = MolculeStepsShowTypeEnum.PRIMARY;
        this.fSize = MolculeStepsSizeEnum.MEDIUM;
        this.fItems = [];
        this.fStep = 0;
        this.fCount = 0;
        this.item = (props, index) => {
            return html `
      ${index > 0 && index < this.fItems.length
                ? html `<div
            class="flw-steps__line ${props.fType !==
                    MolculeStepsTypeEnum.INCOMPLETE
                    ? `flw-steps__line--${this.fShowType}`
                    : ''}"
          >
            ${this.step < this.fStep &&
                    props.fType == MolculeStepsTypeEnum.CURRENT &&
                    index + 1 === this.fStep
                    ? html `<div class="flw-steps__line--current"></div>`
                    : ''}
            ${this.step > this.fStep && index === this.fStep
                    ? html `<div class="flw-steps__line--current"></div>`
                    : ''}
          </div> `
                : ''}

      <div class="flw-steps__item">
        ${when(props.fType === MolculeStepsTypeEnum.INCOMPLETE, () => {
                return this.incomplate(this.fSize);
            })}
        ${when(props.fType === MolculeStepsTypeEnum.CURRENT, () => {
                return this.current(this.fSize);
            })}
        ${when(props.fType === MolculeStepsTypeEnum.COMPLETE, () => {
                return this.complate(this.fSize);
            })}
      </div>
    `;
        };
        this.incomplate = (size) => {
            return html `<div
      class="flw-steps__item--incomplete flw-steps__item--${size}"
    >
      <div
        class="flw-steps__item__circle flw-steps__item__circle--${size}"
      ></div>
    </div>`;
        };
        this.current = (size) => {
            return html `<div
      class="flw-steps__item--current flw-steps__item--${size} flw-steps__item--${this
                .fShowType}"
    >
      <div
        class="flw-steps__item__circle flw-steps__item__circle--${size}"
      ></div>
    </div>`;
        };
        this.complate = (size) => {
            return html `<div
      class="flw-steps__item--complate flw-steps__item--${size} flw-steps__item--${this
                .fShowType}"
    >
      <atom-icon
        fName="${AtomIconsEnum.CHECKMARK_CIRCLE_1}"
        fSize="${size === MolculeStepsSizeEnum.SMALL
                ? AtomIconSizeEnum.MEDIUM
                : AtomIconSizeEnum.XLARGE}"
      ></atom-icon>
    </div>`;
        };
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fStep')) {
            if (this.fCount && this.fCount > 0) {
                const items = [];
                for (let index = 0; index < this.fCount; index++) {
                    items.push({ fType: MolculeStepsTypeEnum.INCOMPLETE });
                }
                this.fItems = items;
            }
            if (this.fStep && this.fStep > 0) {
                this.fItems = this.fItems.map((item, index) => {
                    if (index === this.fStep - 1) {
                        item.fType = MolculeStepsTypeEnum.CURRENT;
                    }
                    else if (index < this.fStep - 1) {
                        item.fType = MolculeStepsTypeEnum.COMPLETE;
                    }
                    else {
                        item.fType = MolculeStepsTypeEnum.INCOMPLETE;
                    }
                    return item;
                });
            }
        }
        const itemCurrent = this.shadowRoot?.querySelector('.flw-steps__item--current');
        const currentLine = this.shadowRoot?.querySelector('.flw-steps__line--current');
        if (this.step > this.fStep) {
            currentLine.classList.remove('flw-right-0');
            currentLine.classList.add('flw-left-0');
        }
        else {
            itemCurrent && itemCurrent.classList.add('flw-bg-neutral-400');
            itemCurrent && itemCurrent.classList.remove('flw-steps__item--primary');
        }
        setTimeout(() => {
            try {
                currentLine.style.width = '0';
            }
            catch (error) {
                /* empty */
            }
            if (this.step == this.fStep) {
                itemCurrent.classList.remove('flw-bg-neutral-400');
                itemCurrent.classList.add('flw-steps__item--primary');
            }
            this.step = this.fStep;
        }, 500);
    }
    render() {
        return html `
      <div class="flw-steps ">
        ${this.fItems.map((item_props, index) => this.item(item_props, index))}
      </div>
    `;
    }
};
__decorate([
    property({ type: MolculeStepsShowTypeEnum })
], MoleculeStepsComponent.prototype, "fShowType", void 0);
__decorate([
    property({ type: MolculeStepsSizeEnum })
], MoleculeStepsComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: Array })
], MoleculeStepsComponent.prototype, "fItems", void 0);
__decorate([
    property({ type: Number })
], MoleculeStepsComponent.prototype, "fStep", void 0);
__decorate([
    property({ type: Number })
], MoleculeStepsComponent.prototype, "fCount", void 0);
__decorate([
    state()
], MoleculeStepsComponent.prototype, "step", void 0);
MoleculeStepsComponent = __decorate([
    customElement('molecule-steps')
], MoleculeStepsComponent);
export { MoleculeStepsComponent };
export const Steps = createComponent({
    tagName: 'molecule-steps',
    elementClass: MoleculeStepsComponent,
    react: React,
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, } from 'fstp-ui/src/components/base.component';
import { AtomTooltipPlacement, } from 'fstp-ui/src/models/atoms';
import { createPopper } from '@popperjs/core';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomTooltipComponent = class AtomTooltipComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fPlacement = AtomTooltipPlacement.BOTTOM;
        this.fShowEvents = [];
        this.fHideEvents = [];
        this.fShow = false;
        this.internal = false;
        this.closeTrigger = 0;
        this.openTrigger = 0;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('closeTrigger') && this.closeTrigger > 0) {
            setTimeout(() => {
                this.hide();
            }, 100);
        }
        if (_changedProperties.has('openTrigger') && this.openTrigger > 0) {
            setTimeout(() => {
                this.show();
            }, 100);
        }
    }
    firstUpdated() {
        const options = {
            placement: this.fPlacement,
            showEvents: this.fShowEvents,
            hideEvents: this.fHideEvents,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
                {
                    name: 'preventOverflow',
                    enabled: true,
                    options: {
                        boundary: window.document.body,
                        padding: 0,
                        offset: [0, 10],
                    },
                },
            ],
            strategy: 'fixed',
        };
        const selectElement = this.parentElement;
        this.menuElement = this.shadowRoot
            ? this.shadowRoot.querySelector('.flw-tooltip')
            : this.querySelector('.flw-tooltip');
        selectElement.classList.add('flw-relative');
        if (!this.fShow)
            this.menuElement.classList.add('flw-hidden');
        this.popperInstance = createPopper(selectElement, this.menuElement, options);
        !this.internal && this.addArrow(this.menuElement);
        options.showEvents &&
            options.showEvents.forEach((event) => {
                selectElement.addEventListener(event, () => {
                    this.show();
                });
            });
        options.hideEvents &&
            options.hideEvents.forEach((event) => {
                selectElement.addEventListener(event, () => {
                    this.hide();
                });
            });
    }
    render() {
        return html `<div
      class=" 
        flw-tooltip
        ${this.internal ? 'flw-tooltip--internal' : 'flw-tooltip--external'} 
        ${this.fClass}
      "
    >
      <slot></slot>
    </div>`;
    }
    addArrow(menuElement) {
        const arrow = document.createElement('div');
        arrow.classList.add('flw-popper-arrow');
        arrow.setAttribute('data-popper-arrow', '');
        menuElement.append(arrow);
        menuElement.setAttribute('role', 'tooltip');
    }
    show() {
        this.menuElement.classList.remove('flw-hidden');
        this.fOpen?.(this);
        this.fShow = true;
        this.popperInstance.update();
    }
    hide() {
        this.menuElement.classList.add('flw-hidden');
        this.fClose?.(this);
        this.fShow = false;
        this.popperInstance.update();
    }
};
__decorate([
    property({ type: String })
], AtomTooltipComponent.prototype, "fPlacement", void 0);
__decorate([
    property({ type: Array })
], AtomTooltipComponent.prototype, "fShowEvents", void 0);
__decorate([
    property({ type: Array })
], AtomTooltipComponent.prototype, "fHideEvents", void 0);
__decorate([
    property({ type: Boolean })
], AtomTooltipComponent.prototype, "fShow", void 0);
__decorate([
    property({ type: Boolean })
], AtomTooltipComponent.prototype, "internal", void 0);
__decorate([
    property({ type: Number })
], AtomTooltipComponent.prototype, "closeTrigger", void 0);
__decorate([
    property({ type: Number })
], AtomTooltipComponent.prototype, "openTrigger", void 0);
__decorate([
    event('fOpen')
], AtomTooltipComponent.prototype, "fOpen", void 0);
__decorate([
    event('fClose')
], AtomTooltipComponent.prototype, "fClose", void 0);
__decorate([
    state()
], AtomTooltipComponent.prototype, "menuElement", void 0);
__decorate([
    state()
], AtomTooltipComponent.prototype, "popperInstance", void 0);
AtomTooltipComponent = __decorate([
    customElement('atom-tooltip')
], AtomTooltipComponent);
export { AtomTooltipComponent };
export const Tooltip = createComponent({
    tagName: 'atom-tooltip',
    elementClass: AtomTooltipComponent,
    react: React,
    events: {
        fOpen: 'fOpen',
        fClose: 'fClose',
    },
});

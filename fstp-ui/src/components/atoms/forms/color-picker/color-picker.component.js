var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, query, } from 'fstp-ui/src/components/base.component';
import { AtomColorSizeEnum } from 'fstp-ui/src/models/atoms';
import { fPopper } from 'fstp-ui/src/functions';
import { createComponent } from '@lit/react';
import * as React from 'react';
import { FormControlMixin } from '@open-wc/form-control';
let AtomColorPickerComponent = class AtomColorPickerComponent extends FormControlMixin(BaseComponent) {
    constructor() {
        super(...arguments);
        this.fSize = AtomColorSizeEnum.MEDIUM;
        this.fLabel = 'Color';
        this.fHasLabel = false;
        this.fName = '';
        this.fValue = '#007BFF';
        this.fDisabled = false;
        this.fIsRGB = false;
    }
    firstUpdated() {
        this.buildColorPicker();
    }
    updated(_changedProperties) {
        if (_changedProperties.has('fValue')) {
            this.input.value = this.fValue;
            this.input.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
            this.setValue(this.fValue);
            this.fChange?.(this.fValue);
        }
    }
    render() {
        return html `
      <div class="flw-color-picker">
        <label
          class="flw-color-picker-button  flw-color-picker-button-${this.fSize}
        ${this.fDisabled
            ? 'flw-color--disabled'
            : 'flw-color-picker-button-color'}              
        "
          for="${this.fId}"
        >
          <input
            class="flw-hidden"
            .name="${this.fName}"
            .value="${this.fValue}"
            @input="${(e) => {
            this.fValue = e.target.value;
        }}"
          />
          <div style="background-color:${this.fValue}"></div>
        </label>

        <label
          class="
            flw-color-picker-button-label
            flw-color-picker-button-label-${this.fSize}
          ${this.fDisabled && 'flw-color-label--disabled'}"
        >
          ${this.fHasLabel ? html `<span>${this.fLabel}</span>` : ''}
        </label>
        ${!this.fDisabled
            ? html `
              <div
                id="${this.fId}"
                class="picker-area"
                acp-color="${this.fValue}"
                acp-show-rgb="no"
                acp-show-hsl="no"
                acp-palette="#007BFF|#8A2BE2|#17A2B8|#28A745|#DC3545|#FFC107|#66A3FF|#B877E8|#68B4C4|#8FD18F|#EB9FA3|#FFD86B|#E6F0FF|#F1E6FF|#E6F7F9|#E9F2E6|#F9EAEA|#FFF9E5"
                acp-show-hex="yes"
                acp-show-alpha
              ></div>
            `
            : ''}
      </div>
    `;
    }
    buildColorPicker() {
        import('a-color-picker').then((AColorPicker) => {
            const aColorPickerRef = AColorPicker.from(this.picker);
            fPopper({
                trigger: this.colorPickerButton,
                menu: this.picker,
                options: {
                    boundary: true,
                },
            });
            aColorPickerRef.length > 0 &&
                aColorPickerRef[0].on('change', (picker) => {
                    const color = this.fIsRGB
                        ? `rgba(${picker.rgba[0]}, ${picker.rgba[1]}, ${picker.rgba[2]}, ${picker.rgba[3]})`
                        : this.rgb2Hex(picker.rgba[0], picker.rgba[1], picker.rgba[2], picker.rgba[3]);
                    const colorInput = picker.element.querySelector('input[nameref="RGBHEX"]');
                    colorInput.value = color;
                    this.fValue = color;
                    this.paletteSelect(picker.rgba);
                    this.changeCanvasOpacity(picker.element, picker.rgba[3]);
                });
        });
    }
    paletteSelect(rgba) {
        const res = {
            r: rgba[0],
            g: rgba[1],
            b: rgba[2],
            a: rgba[3],
        };
        const pickerElement = document.getElementById(this.fId);
        const selected = pickerElement.querySelector(`div[data-color="rgb(${res.r}, ${res.g}, ${res.b}, ${res.a})"]`);
        const beforeSelectedElement = pickerElement.querySelector('.selected-color');
        if (selected) {
            if (beforeSelectedElement) {
                beforeSelectedElement.classList.remove('selected-color');
            }
            selected.classList.add('selected-color');
        }
        else {
            if (beforeSelectedElement) {
                beforeSelectedElement.classList.remove('selected-color');
            }
        }
    }
    rgb2Hex(r, g, b, a) {
        const red = r.toString(16).padStart(2, '0');
        const green = g.toString(16).padStart(2, '0');
        const blue = b.toString(16).padStart(2, '0');
        const alpha = Math.round(a * 255)
            .toString(16)
            .padStart(2, '0');
        return `#${red}${green}${blue}${alpha}`;
    }
    changeCanvasOpacity(e, o) {
        const canvas = e.querySelector('.a-color-picker-sl.a-color-picker-transparent');
        canvas.style.opacity = o.toString();
    }
};
__decorate([
    property({ type: String })
], AtomColorPickerComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: String })
], AtomColorPickerComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomColorPickerComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: String })
], AtomColorPickerComponent.prototype, "fName", void 0);
__decorate([
    property({ type: String })
], AtomColorPickerComponent.prototype, "fValue", void 0);
__decorate([
    property({ type: Boolean })
], AtomColorPickerComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomColorPickerComponent.prototype, "fIsRGB", void 0);
__decorate([
    event('fChange')
], AtomColorPickerComponent.prototype, "fChange", void 0);
__decorate([
    query('.picker-area')
], AtomColorPickerComponent.prototype, "picker", void 0);
__decorate([
    query('.flw-color-picker-button')
], AtomColorPickerComponent.prototype, "colorPickerButton", void 0);
__decorate([
    query('input')
], AtomColorPickerComponent.prototype, "input", void 0);
AtomColorPickerComponent = __decorate([
    customElement('atom-color-picker')
], AtomColorPickerComponent);
export { AtomColorPickerComponent };
export const ColorPicker = createComponent({
    tagName: 'atom-color-picker',
    elementClass: AtomColorPickerComponent,
    react: React,
    events: {
        fChange: 'fChange',
    },
});

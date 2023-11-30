var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { property, customElement } from 'fstp-ui/src/components/base.component';
import { AtomDivDisplayEnum, AtomDivFlexDirectionEnum, AtomDivFlexJustifyContentEnum, AtomDivTextAlignEnum, } from 'fstp-ui/src/models/atoms';
let AtomDivComponent = class AtomDivComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fDisplay = AtomDivDisplayEnum.BLOCK;
        this.fFlexDirection = AtomDivFlexDirectionEnum.COLUMN;
        this.fFlexJustifyContent = AtomDivFlexJustifyContentEnum.BETWEEN;
        this.fFlexAlignItems = AtomDivFlexJustifyContentEnum.START;
        this.fFlexWrap = false;
        this.fGridColumnCount = 0;
        this.fShadow = false;
        this.fBorder = false;
        this.fBorderRadius = false;
        this.fPadding = false;
        this.fMargin = false;
        this.fBackgroundColor = '';
        this.fColor = '';
        this.fFontSize = '';
        this.fTextAlign = AtomDivTextAlignEnum.LEFT;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        this.className = this.fClass;
        this.style.display = this.fDisplay;
        this.style.flexDirection = this.fFlexDirection;
        this.style.justifyContent = this.fFlexJustifyContent;
        this.style.alignItems = this.fFlexAlignItems;
        this.style.flexWrap = this.fFlexWrap ? 'wrap' : 'nowrap';
        this.style.gridTemplateColumns = `repeat(${this.fGridColumnCount}, 1fr)`;
        this.style.border = this.fBorder ? '1px solid var(--neutral-300)' : 'none';
        this.style.borderRadius = this.fBorderRadius ? '8px' : '0';
        this.style.padding = `${this.fPadding}px`;
        this.style.margin = `${this.fMargin}px`;
        this.style.backgroundColor = this.fBackgroundColor;
        this.style.color = this.fColor;
        this.style.fontSize = this.fFontSize;
        this.style.textAlign = this.fTextAlign;
        this.style.gap = '12px';
        this.fShadow
            ? this.classList.add('flw-shadow-md')
            : this.classList.remove('flw-shadow-md');
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: AtomDivDisplayEnum })
], AtomDivComponent.prototype, "fDisplay", void 0);
__decorate([
    property({ type: AtomDivFlexDirectionEnum })
], AtomDivComponent.prototype, "fFlexDirection", void 0);
__decorate([
    property({ type: AtomDivFlexJustifyContentEnum })
], AtomDivComponent.prototype, "fFlexJustifyContent", void 0);
__decorate([
    property({ type: AtomDivFlexJustifyContentEnum })
], AtomDivComponent.prototype, "fFlexAlignItems", void 0);
__decorate([
    property({ type: Boolean })
], AtomDivComponent.prototype, "fFlexWrap", void 0);
__decorate([
    property({ type: Number })
], AtomDivComponent.prototype, "fGridColumnCount", void 0);
__decorate([
    property({ type: Boolean })
], AtomDivComponent.prototype, "fShadow", void 0);
__decorate([
    property({ type: Boolean })
], AtomDivComponent.prototype, "fBorder", void 0);
__decorate([
    property({ type: Boolean })
], AtomDivComponent.prototype, "fBorderRadius", void 0);
__decorate([
    property({ type: Number })
], AtomDivComponent.prototype, "fPadding", void 0);
__decorate([
    property({ type: Number })
], AtomDivComponent.prototype, "fMargin", void 0);
__decorate([
    property({ type: String })
], AtomDivComponent.prototype, "fBackgroundColor", void 0);
__decorate([
    property({ type: String })
], AtomDivComponent.prototype, "fColor", void 0);
__decorate([
    property({ type: String })
], AtomDivComponent.prototype, "fFontSize", void 0);
__decorate([
    property({ type: AtomDivTextAlignEnum })
], AtomDivComponent.prototype, "fTextAlign", void 0);
AtomDivComponent = __decorate([
    customElement('atom-div')
], AtomDivComponent);
export { AtomDivComponent };

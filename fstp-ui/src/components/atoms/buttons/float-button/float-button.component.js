var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomFloatButtonLocationEnum, AtomIconsEnum, AtomIconsTypeEnum, } from 'fstp-ui/src/models/atoms';
let AtomFloatButtonComponent = class AtomFloatButtonComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = AtomButtonStatusEnum.PRIMARY;
        this.fHasLabel = false;
        this.fIsDisabled = false;
        this.fHasIcon = false;
        this.fLabel = 'Action';
        this.fShowType = AtomButtonShowTypeEnum.FILL;
        this.fSize = AtomButtonSizeEnum.MEDIUM;
        this.fLocation = AtomFloatButtonLocationEnum.BOTTOM_RIGHT;
        this.fIconType = AtomIconsTypeEnum.OUTLINE;
    }
    render() {
        return html `
      <div class="flw-float-button flw-float-button--${this.fLocation}">
        <slot name="left"></slot>
        <atom-button
          .fStatus="${this.fStatus}"
          .fSize="${this.fSize}"
          .fShowType="${this.fShowType}"
          ?fHasLabel="${this.fHasLabel}"
          .fLabel="${this.fLabel}"
          ?fHasIcon="${this.fHasIcon}"
          .fIcon="${this.fIcon}"
          .fIconType="${this.fIconType}"
          fType="button"
          ?fIsDisabled="${this.fIsDisabled}"
          @fClick="${this.fClick}"
        ></atom-button>
        <slot name="right"></slot>
      </div>
    `;
    }
};
__decorate([
    property({ type: AtomButtonStatusEnum })
], AtomFloatButtonComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomFloatButtonComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: Boolean })
], AtomFloatButtonComponent.prototype, "fIsDisabled", void 0);
__decorate([
    property({ type: Boolean })
], AtomFloatButtonComponent.prototype, "fHasIcon", void 0);
__decorate([
    property({ type: String })
], AtomFloatButtonComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomButtonShowTypeEnum })
], AtomFloatButtonComponent.prototype, "fShowType", void 0);
__decorate([
    property({ type: AtomButtonSizeEnum })
], AtomFloatButtonComponent.prototype, "fSize", void 0);
__decorate([
    property({ type: AtomIconsEnum })
], AtomFloatButtonComponent.prototype, "fIcon", void 0);
__decorate([
    property({ type: AtomFloatButtonLocationEnum })
], AtomFloatButtonComponent.prototype, "fLocation", void 0);
__decorate([
    property({ type: AtomIconsTypeEnum })
], AtomFloatButtonComponent.prototype, "fIconType", void 0);
__decorate([
    event('fClick')
], AtomFloatButtonComponent.prototype, "fClick", void 0);
AtomFloatButtonComponent = __decorate([
    customElement('atom-float-button')
], AtomFloatButtonComponent);
export { AtomFloatButtonComponent };

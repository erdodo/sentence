var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement, event, } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomJobActionButtonSizeEnum, AtomJobActionButtonStatusEnum, } from 'fstp-ui/src/models/atoms';
let MoleculeZoomActionsComponent = class MoleculeZoomActionsComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fExample = '';
    }
    render() {
        return html `
      <div
        class="flw-zoom-actions ${this.fClass}"
        id="${this.fId}"
      >
        <atom-job-action-button
          fStatus="${AtomJobActionButtonStatusEnum.NEUTRAL}"
          .fSize="${AtomJobActionButtonSizeEnum.DEFAULT}"
          .fIcon="${AtomIconsEnum.RADIO_BUTTON_ON}"
          .fIconType="${AtomIconsTypeEnum.FILL}"
          @click="${() => {
            this.fResetClick?.();
        }}"
        ></atom-job-action-button>
        <div class="flw-zoom-actions__buttons">
          <atom-job-action-button
            fStatus="${AtomJobActionButtonStatusEnum.NEUTRAL}"
            .fSize="${AtomJobActionButtonSizeEnum.DEFAULT}"
            .fIcon="${AtomIconsEnum.PLUS_DEFAULT}"
            .fIconType="${AtomIconsTypeEnum.FILL}"
            fClass="flw-rounded-b-none"
            @click="${() => {
            this.fPlusClick?.();
        }}"
          ></atom-job-action-button>
          <atom-job-action-button
            fStatus="${AtomJobActionButtonStatusEnum.NEUTRAL}"
            .fSize="${AtomJobActionButtonSizeEnum.DEFAULT}"
            .fIcon="${AtomIconsEnum.MINUS_DEFAULT}"
            .fIconType="${AtomIconsTypeEnum.FILL}"
            fClass="flw-rounded-t-none"
            @click="${() => {
            this.fMinusClick?.();
        }}"
          ></atom-job-action-button>
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], MoleculeZoomActionsComponent.prototype, "fExample", void 0);
__decorate([
    event('fResetClick')
], MoleculeZoomActionsComponent.prototype, "fResetClick", void 0);
__decorate([
    event('fPlusClick')
], MoleculeZoomActionsComponent.prototype, "fPlusClick", void 0);
__decorate([
    event('fMinusClick')
], MoleculeZoomActionsComponent.prototype, "fMinusClick", void 0);
MoleculeZoomActionsComponent = __decorate([
    customElement('molecule-zoom-actions')
], MoleculeZoomActionsComponent);
export { MoleculeZoomActionsComponent };

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, customElement, property, state, event, } from 'fstp-ui/src/components/base.component';
let MoleculeTitleWidgetComponent = class MoleculeTitleWidgetComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fTitle = '';
        this.fTitleSize = '';
        this.fTitleIsBold = false;
        this.fTitleColor = '';
        this.fTitleIsItalic = false;
        this.isEdit = false;
        this.editValue = this.fTitle;
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fTitle')) {
            this.editValue = this.fTitle;
        }
    }
    render() {
        return html `
      <div
        class="flw-title-widget ${this.isEdit ? 'flw-title-widget--edit' : ''}"
      >
        ${this.fIcon
            ? html `<atom-icon .fName="${this.fIcon}"></atom-icon>`
            : ''}
        ${this.isEdit
            ? html ` <atom-textbox
              .fValue="${this.fTitle}"
              @fChange="${(e) => {
                this.editValue = e.detail;
            }}"
            ></atom-textbox>`
            : html `
              <span
                style="
                    font-size: ${this.fTitleSize};
                    color: ${this.fTitleColor};
                    font-weight: ${this.fTitleIsBold ? 'bold' : 'normal'};
                    font-style: ${this.fTitleIsItalic ? 'italic' : 'normal'};
                  "
              >
                ${this.fTitle}
              </span>
            `}
        <div class="flw-title-widget__actions">
          ${this.isEdit
            ? html `
                <atom-widget-more-button
                  fIcon="save"
                  fLast
                  @click="${() => {
                this.fClickSave?.(this.editValue);
                this.isEdit = false;
            }}"
                ></atom-widget-more-button>
              `
            : html `
                <atom-widget-more-button
                  fIcon="edit-1"
                  fLast
                  @click="${() => {
                this.isEdit = true;
            }}"
                ></atom-widget-more-button>
              `}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], MoleculeTitleWidgetComponent.prototype, "fTitle", void 0);
__decorate([
    property({ type: String })
], MoleculeTitleWidgetComponent.prototype, "fTitleSize", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTitleWidgetComponent.prototype, "fTitleIsBold", void 0);
__decorate([
    property({ type: String })
], MoleculeTitleWidgetComponent.prototype, "fTitleColor", void 0);
__decorate([
    property({ type: Boolean })
], MoleculeTitleWidgetComponent.prototype, "fTitleIsItalic", void 0);
__decorate([
    property({ type: String })
], MoleculeTitleWidgetComponent.prototype, "fIcon", void 0);
__decorate([
    state()
], MoleculeTitleWidgetComponent.prototype, "isEdit", void 0);
__decorate([
    state()
], MoleculeTitleWidgetComponent.prototype, "editValue", void 0);
__decorate([
    event('fClickSave')
], MoleculeTitleWidgetComponent.prototype, "fClickSave", void 0);
MoleculeTitleWidgetComponent = __decorate([
    customElement('molecule-title-widget')
], MoleculeTitleWidgetComponent);
export { MoleculeTitleWidgetComponent };

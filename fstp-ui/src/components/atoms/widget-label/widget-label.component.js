var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, customElement } from 'fstp-ui/src/components/base.component';
import { AtomWidgetLabelPositionEnum, AtomWidgetLabelStatusEnum, } from 'fstp-ui/src/models/atoms';
let AtomWidgetLabelComponent = class AtomWidgetLabelComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fLabel = '';
        this.fPosition = AtomWidgetLabelPositionEnum.BOTTOM_RIGHT;
        this.fStatus = AtomWidgetLabelStatusEnum.PRIMARY;
    }
    render() {
        return html `
      <div
        class="flw-widget-label flw-widget-label--${this
            .fPosition} flw-widget-label--${this.fStatus}"
      >
        ${this.fLabel}
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], AtomWidgetLabelComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: AtomWidgetLabelPositionEnum })
], AtomWidgetLabelComponent.prototype, "fPosition", void 0);
__decorate([
    property({ type: AtomWidgetLabelStatusEnum })
], AtomWidgetLabelComponent.prototype, "fStatus", void 0);
AtomWidgetLabelComponent = __decorate([
    customElement('atom-widget-label')
], AtomWidgetLabelComponent);
export { AtomWidgetLabelComponent };

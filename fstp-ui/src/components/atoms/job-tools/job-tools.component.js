var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, customElement, event, } from 'fstp-ui/src/components/base.component';
let AtomJobToolsComponent = class AtomJobToolsComponent extends BaseComponent {
    render() {
        return html `
      <div class="flw-job-tools">
        <atom-icon
          fSize="32"
          fType="other"
          fOthers="cursor_grab"
          fClass="flw-cursor-pointer"
          @click="${() => {
            this.fHandClick?.();
        }}"
        ></atom-icon>
        <atom-icon
          fSize="32"
          fType="other"
          fOthers="cursor_more_cell"
          fClass="flw-cursor-pointer"
          @click="${() => {
            this.fLassoClick?.();
        }}"
        ></atom-icon>
        <atom-icon
          fSize="32"
          fType="other"
          fOthers="cursor_resize_leftright"
          fClass="flw-cursor-pointer"
          @click="${() => {
            this.fLineSpaceClick?.();
        }}"
        ></atom-icon>
        <atom-icon
          fSize="32"
          fType="other"
          fOthers="cursor_resize_norteast"
          fClass="flw-cursor-pointer"
          @click="${() => {
            this.fConnectClick?.();
        }}"
        ></atom-icon>
      </div>
    `;
    }
};
__decorate([
    event('fHandClick')
], AtomJobToolsComponent.prototype, "fHandClick", void 0);
__decorate([
    event('fLassoClick')
], AtomJobToolsComponent.prototype, "fLassoClick", void 0);
__decorate([
    event('fLineSpaceClick')
], AtomJobToolsComponent.prototype, "fLineSpaceClick", void 0);
__decorate([
    event('fConnectClick')
], AtomJobToolsComponent.prototype, "fConnectClick", void 0);
AtomJobToolsComponent = __decorate([
    customElement('atom-job-tools')
], AtomJobToolsComponent);
export { AtomJobToolsComponent };

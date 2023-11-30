var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { customElement, event, html, property, state, query, } from 'fstp-ui/src/components/base.component';
import { AtomFileAcceptEnum, AtomFileShowTypeEnum, AtomFileSizeEnum, AtomFileStatusEnum, AtomIconsEnum, AtomIconSizeEnum, } from 'fstp-ui/src/models/atoms';
import { when } from 'lit/directives/when.js';
import { createComponent } from '@lit/react';
import * as React from 'react';
let AtomFileComponent = class AtomFileComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fStatus = AtomFileStatusEnum.PRIMARY;
        this.fHasLabel = false;
        this.fAccept = AtomFileAcceptEnum.PNG;
        this.fIsMultiple = true;
        this.fHelperText = '';
        this.fDisabled = false;
        this.fLabel = '';
        this.fName = '';
        this.fFileSize = 1000;
        this.fShowType = AtomFileShowTypeEnum.FILL;
        this.fSize = AtomFileSizeEnum.SMALL;
        this.iconSize = 16;
        this.isUpload = false;
        this.files = {};
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.addEventListener('fClick', () => {
            this.input.click();
        });
    }
    render() {
        return html `
    <label      
      class="flw-button 
            ${this.fClass} 
            ${this.fShowType}
            ${this.fSize}
            ${this.fDisabled ? 'flw-button--disabled' : this.fStatus}"
      
      for="${this.fId}"
    >
      <atom-icon
          fName="${when(this.isUpload, () => AtomIconsEnum.CHECKMARK_CIRCLE_1, () => AtomIconsEnum.CLOUD_UPLOAD)}"
          fSize="${this.fSize === AtomFileSizeEnum.LARGE
            ? AtomIconSizeEnum.LARGE
            : AtomIconSizeEnum.MEDIUM}"
          fClass=" ${this.fShowType}
${this.fStatus}"
          fColor="${this.fStatus}"
      ></atom-icon>
      <input
        type="file"
        id="${this.fId}"
        name="${this.fName}"
        ?multiple ="${this.fIsMultiple ? 'multiple' : ''}"
        accept="${this.fAccept}"
        ?disabled=${this.fDisabled}
        @change="${this.upload}"
        class="flw-hidden"
        @click="${() => {
            this.fClick?.();
        }}"
      />     
      <span class="flw-file__view"></span>
      ${this.fHasLabel ? html `<span>${this.fLabel}</span>` : ''}
    </label>
    ${this.fHelperText
            ? html `<span class="flw-file__helpertext">${this.fHelperText}</span>`
            : ''}
    </div> 
  `;
    }
    upload(event) {
        this.files = event.target.files;
        const fileNames = [];
        for (const item of this.files) {
            if (this.fFileSize < item.size) {
                this.fUploadError?.('file_size_error');
                return;
            }
            fileNames.push(item.name);
        }
        this.fLabel = fileNames.join(' - ');
        this.isUpload = true;
        this.fUpload?.(event.target.files);
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    property({ type: AtomFileStatusEnum })
], AtomFileComponent.prototype, "fStatus", void 0);
__decorate([
    property({ type: Boolean })
], AtomFileComponent.prototype, "fHasLabel", void 0);
__decorate([
    property({ type: AtomFileAcceptEnum })
], AtomFileComponent.prototype, "fAccept", void 0);
__decorate([
    property({ type: Boolean })
], AtomFileComponent.prototype, "fIsMultiple", void 0);
__decorate([
    property({ type: String })
], AtomFileComponent.prototype, "fHelperText", void 0);
__decorate([
    property({ type: Boolean })
], AtomFileComponent.prototype, "fDisabled", void 0);
__decorate([
    property({ type: String })
], AtomFileComponent.prototype, "fLabel", void 0);
__decorate([
    property({ type: String })
], AtomFileComponent.prototype, "fName", void 0);
__decorate([
    property({ type: Number })
], AtomFileComponent.prototype, "fFileSize", void 0);
__decorate([
    property({ type: AtomFileShowTypeEnum })
], AtomFileComponent.prototype, "fShowType", void 0);
__decorate([
    property({ type: AtomFileSizeEnum })
], AtomFileComponent.prototype, "fSize", void 0);
__decorate([
    state()
], AtomFileComponent.prototype, "iconSize", void 0);
__decorate([
    state()
], AtomFileComponent.prototype, "isUpload", void 0);
__decorate([
    state()
], AtomFileComponent.prototype, "files", void 0);
__decorate([
    query('input')
], AtomFileComponent.prototype, "input", void 0);
__decorate([
    event('fUpload')
], AtomFileComponent.prototype, "fUpload", void 0);
__decorate([
    event('fClick')
], AtomFileComponent.prototype, "fClick", void 0);
__decorate([
    event('fUploadError')
], AtomFileComponent.prototype, "fUploadError", void 0);
AtomFileComponent = __decorate([
    customElement('atom-file')
], AtomFileComponent);
export { AtomFileComponent };
export const File = createComponent({
    tagName: 'atom-file',
    elementClass: AtomFileComponent,
    react: React,
    events: {
        fUpload: 'fUpload',
        fUploadError: 'fUploadError',
    },
});

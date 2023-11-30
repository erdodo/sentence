var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, state, customElement, } from 'fstp-ui/src/components/base.component';
import { lexer, parse } from 'marked';
import 'fstp-ui/src/components/atoms';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
let MoleculeMdxParserComponent = class MoleculeMdxParserComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.fValue = '';
        this.value = {};
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('fValue')) {
            this.value = lexer(this.fValue);
        }
    }
    render() {
        return html `
      <div>
        ${Object.values(this.value).map((item) => {
            return html `<div class="flw-mb-4">
            ${this.getItem(item)}
          </div>`;
        })}
      </div>
    `;
    }
    getItem(item) {
        switch (item.type) {
            case 'heading':
                return html `
          <atom-heading
            .fLevel="${(Number(item.depth) + 1).toString()}"
            .fText="${item.text}"
            fColor="flw-text-neutral-800"
          ></atom-heading>
        `;
            case 'space':
                return html `<br />`;
            case 'list':
                return html `
          <atom-list
            fType="ul"
            fSize="flw-text-body-medium"
            fStatus="SECONDARY"
            .fItems="${this.getListItems(item.items)}"
          />
        `;
            default:
                if (item.raw) {
                    return html `${unsafeHTML(parse(item.raw))}`;
                }
                else {
                    return html `<div></div>`;
                }
        }
    }
    getListItems(items) {
        return Object.values(items).map((item) => item.text);
    }
};
__decorate([
    property({ type: String })
], MoleculeMdxParserComponent.prototype, "fValue", void 0);
__decorate([
    state()
], MoleculeMdxParserComponent.prototype, "value", void 0);
MoleculeMdxParserComponent = __decorate([
    customElement('molecule-mdx-parser')
], MoleculeMdxParserComponent);
export { MoleculeMdxParserComponent };

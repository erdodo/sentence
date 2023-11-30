var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import BaseComponent, { html, property, state, customElement, event, } from 'fstp-ui/src/components/base.component';
import { generateUUID } from 'fstp-ui/src/utils';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { MoleculeDragDropAllProps, MoleculeDragDropDivProps, MoleculeDragDropItems, } from 'fstp-ui/src/models/molecules';
import { argsParserUtils, objectToDoubleQuotedString } from 'fstp-ui/src/models/common';
let MoleculeDragDropComponent = class MoleculeDragDropComponent extends BaseComponent {
    constructor() {
        super(...arguments);
        this.paletteItems = MoleculeDragDropItems;
        this.panelItems = {};
        this.shortPanelItems = [];
        this.allProperties = MoleculeDragDropAllProps;
    }
    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this.paletteElements = this.shadowRoot?.querySelectorAll('[data-palette="true"]');
        // paletteki elemanları sürüklemek için event listener ekleniyor
        this.paletteElements.forEach((element) => {
            element.addEventListener('dragstart', (event) => {
                this.dragStart(event);
            });
        });
    }
    updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('panelItems')) {
            this.panelElements = this.shadowRoot?.querySelectorAll('[data-panel="true"]');
            // paneldeki elemanları sürüklemek için event listener ekleniyor
            this.panelElements.forEach((element) => {
                element.addEventListener('dragstart', (event) => {
                    this.dragStart(event);
                });
            });
            this.fJsonOutput?.(this.panelItems);
            console.log('-----> this.panelItems: ', this.panelItems);
        }
    }
    render() {
        return html ` 
      <div class="flw-grid flw-grid-cols-6 flw-drag-drop flw-gap-12">
      <!-- Start: Palette -->
      <div
         id="palette"
        class="flw-col-span-1 flw-card flw-p-12  flw-h-body"
      >
       
        <div class="flw-flex flw-flex-col">
          ${this.paletteItems &&
            this.paletteItems.map((item) => {
                return html `
                <div class="flw-card flw-p-12 flw-my-8 flw-relative">
                  <atom-div
                    data-type="${item.type}"
                    data-palette="true"
                    draggable="true"
                    class="flw-p-4 flw-w-full"
                    fDisplay="flex"
                    fFlexDirection="row"
                    fFlexAlignItems="end"
                  >
                    ${unsafeHTML(`<atom-${item.type} fHasLabel 
                        ${argsParserUtils(item)}
                         class="flw-w-full"
                         ></atom-${item.type}>`)}
                  </atom-div>
                </div>
              `;
            })}
        </div>
      </div>
      <!-- End: Palette -->
      <!-- Start: Panel -->
      <atom-div
        id="panel"
        fClass="flw-col-span-4 flw-card flw-h-body  "
        fPadding="12"
        fDisplay="block"
        fBorderRadius
        
        @drop="${this.drop}"
        @dragover="${(event) => {
            this.allowDrop(event);
        }}"
      >
       <div class="flw-w-full flw-m-12 flw-flex flw-justify-end">
         <atom-dashboard-tool-button
           fTooltip="Edit"
           fIcon="edit-1"
         ></atom-dashboard-tool-button>
        
       </div>
        <div class="flw-flex flw-flex-col flw-my-12 flw-bg-primary-clear">
          ${this.panelItems &&
            Object.keys(this.panelItems).map((key) => {
                const item = this.panelItems[key];
                return html `<div
                class="flw-card flw-p-12 flw-my-8 flw-relative flw-flex flw-items-end flw-flex-row"
              >
                ${unsafeHTML(`<atom-div
                  id="${item.id}"
                  data-type="${item.type}"
                  data-panel="true"
                  draggable="true"
                  fClass="flw-p-4 flw-w-full"
                  ${argsParserUtils(item.divProps)}
                >
                  <atom-${item.type} fHasLabel
                      ${argsParserUtils(item)}
                     class="flw-w-full"></atom-${item.type}>
                  
                </atom-div>
                `)}
                <div class="flw-drag-drop__edit-buttons">
                  <atom-dashboard-tool-button
                    fTooltip="Edit"
                    fIcon="edit-1"
                    @fClick="${() => {
                    this.selectedItemID = item.id;
                }}"
                  ></atom-dashboard-tool-button>
                </div>
              </div>`;
            })}
        </div>
      </atom-div>
      <!-- End: Panel -->
      <!-- Start: Properties -->
      <div
        id="properties"
        class="flw-col-span-1 flw-p-8 flw-card flw-h-body"
      >
        Properties ( ${this.panelItems[this.selectedItemID]?.type} )
        <div class="flw-flex flw-w-full flw-flex-col flw-gap-12 flw-my-12" >
          ${this.selectedItemID && this.getProperties()}
          <hr/>
          ${this.selectedItemID && this.getDivProperties()}
        </div>
      </div>
      <!-- End: Properties -->
      </div>
    </div>`;
    }
    dragStart(event) {
        const target = event.target;
        target.setAttribute('data-transport', 'true');
        this.transportElement = target;
        this.transportID = target.id;
    }
    allowDrop(event) {
        event.preventDefault();
    }
    drop(event) {
        const panel = event.target;
        const fromPalette = this.transportElement.getAttribute('data-palette');
        if (fromPalette && panel.id == 'panel') {
            // palette'den panel'e eleman taşınıyor
            const type = this.transportElement.getAttribute('data-type');
            const id = generateUUID();
            this.panelItems = {
                ...this.panelItems,
                [id]: {
                    type: type,
                    fLabel: '',
                    fName: '',
                    fValue: '',
                    fItems: [],
                    id: id,
                    fStatus: '',
                    divProps: {
                        fDisplay: 'flex',
                        fFlexDirection: 'row',
                        short: Object.keys(this.panelItems).length + 1,
                    },
                },
            };
        }
        if (!fromPalette && panel.id == 'panel') {
            // panel'den panele eleman taşınıyor
        }
    }
    getProperties() {
        const type = this.panelItems[this.selectedItemID]?.type;
        if (!type)
            return html ``;
        const properties = this.allProperties[type];
        return properties.map((property) => {
            const item = this.panelItems[this.selectedItemID];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const val = item?.[property.name];
            switch (property.type) {
                case 'textbox':
                    return html `<atom-textbox
            fHasLabel
            fLabel="${property.fLabel}"
            fValue="${val}"
            @fChange="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                [property.fName]: event.detail,
                            },
                        };
                    }}"
          ></atom-textbox>`;
                case 'number':
                    return html `<atom-textbox
            fHasLabel
            fType="number"
            fLabel="${property.fLabel}"
            fValue="${val}"
            @fChange="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                [property.fName]: event.detail,
                            },
                        };
                    }}"
          ></atom-textbox>`;
                case 'select':
                    return html `<atom-select
            fHasLabel
            fLabel="${property.fLabel}"
            fValue="${val}"
            fItems="${objectToDoubleQuotedString(property.fItems)}"
            @fChangeValue="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                [property.fName]: event.detail,
                            },
                        };
                    }}"
          ></atom-select>`;
                default:
                    return html ``;
            }
        });
    }
    getDivProperties() {
        const type = this.panelItems[this.selectedItemID]?.type;
        if (!type)
            return html ``;
        const item = this.panelItems[this.selectedItemID];
        return MoleculeDragDropDivProps.map((property) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const val = item?.divProps?.[property.name];
            switch (property.type) {
                case 'textbox':
                    return html `<atom-textbox
              fHasLabel
              fLabel="${property.fLabel}"
              fValue="${val}"
              @fChange="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                divProps: {
                                    ...this.panelItems[this.selectedItemID].divProps,
                                    [property.fName]: event.detail,
                                },
                            },
                        };
                    }}"
            ></atom-textbox>`;
                case 'number':
                    return html `<atom-textbox
              fHasLabel
              fLabel="${property.fLabel}"
              fType="number"
              fValue="${val}"
              @fChange="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                divProps: {
                                    ...this.panelItems[this.selectedItemID].divProps,
                                    [property.fName]: event.detail,
                                },
                            },
                        };
                    }}"
            ></atom-textbox>`;
                case 'color-picker':
                    return html `<atom-color-picker
              fHasLabel
              fLabel="${property.fLabel}"
              fValue="${val}"
              @fChange="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                divProps: {
                                    ...this.panelItems[this.selectedItemID].divProps,
                                    [property.fName]: event.detail,
                                },
                            },
                        };
                    }}"
            ></atom-color-picker>`;
                case 'select':
                    return html `<atom-select
              fHasLabel
              fLabel="${property.fLabel}"
              fValue="${val}"
              fItems="${objectToDoubleQuotedString(property.fItems)}"
              @fChangeValue="${(event) => {
                        this.panelItems = {
                            ...this.panelItems,
                            [this.selectedItemID]: {
                                ...this.panelItems[this.selectedItemID],
                                divProps: {
                                    ...this.panelItems[this.selectedItemID].divProps,
                                    [property.fName]: event.detail,
                                },
                            },
                        };
                    }}"
            ></atom-select>`;
                default:
                    return html ``;
            }
        });
    }
};
__decorate([
    property({ type: Array }) //soldaki palet menüsü
], MoleculeDragDropComponent.prototype, "paletteItems", void 0);
__decorate([
    state() //ortadaki panel elemanları
], MoleculeDragDropComponent.prototype, "panelItems", void 0);
__decorate([
    state() //ortadaki panel elemanları
], MoleculeDragDropComponent.prototype, "shortPanelItems", void 0);
__decorate([
    state() //soldaki palet menüsü
], MoleculeDragDropComponent.prototype, "paletteElements", void 0);
__decorate([
    state() //soldaki palet menüsü
], MoleculeDragDropComponent.prototype, "panelElements", void 0);
__decorate([
    state()
], MoleculeDragDropComponent.prototype, "transportElement", void 0);
__decorate([
    state()
], MoleculeDragDropComponent.prototype, "transportID", void 0);
__decorate([
    state()
], MoleculeDragDropComponent.prototype, "allProperties", void 0);
__decorate([
    state()
], MoleculeDragDropComponent.prototype, "selectedItemID", void 0);
__decorate([
    event('fJsonOutput')
], MoleculeDragDropComponent.prototype, "fJsonOutput", void 0);
MoleculeDragDropComponent = __decorate([
    customElement('molecule-drag-drop')
], MoleculeDragDropComponent);
export { MoleculeDragDropComponent };

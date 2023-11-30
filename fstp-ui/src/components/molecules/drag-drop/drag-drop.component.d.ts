import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { IMoleculeDragDropItemProperties, IMoleculeDragDropPanelItems } from 'fstp-ui/src/models/molecules';
export declare class MoleculeDragDropComponent extends BaseComponent {
    paletteItems: IMoleculeDragDropItemProperties[];
    panelItems: IMoleculeDragDropPanelItems;
    shortPanelItems: IMoleculeDragDropPanelItems[];
    paletteElements: NodeList;
    panelElements: NodeList;
    transportElement: HTMLElement;
    transportID: string;
    allProperties: {
        [key: string]: IMoleculeDragDropItemProperties[];
    };
    selectedItemID: string;
    fJsonOutput?: EventDispatcher<IMoleculeDragDropPanelItems>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    dragStart(event: Event): void;
    allowDrop(event: Event): void;
    drop(event: Event): void;
    getProperties(): TemplateResult | TemplateResult[];
    getDivProperties(): TemplateResult | TemplateResult[];
}

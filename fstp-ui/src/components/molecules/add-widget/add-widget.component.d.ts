import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeAddWidgetItem } from 'fstp-ui/src/models/molecules';
export declare class MoleculeAddWidgetComponent extends BaseComponent {
    fItems: MoleculeAddWidgetItem[];
    fClick?: EventDispatcher<MoleculeAddWidgetItem>;
    protected render(): TemplateResult;
    private getItem;
}
export declare const AddWidget: import("@lit/react").ReactWebComponent<MoleculeAddWidgetComponent, {
    fClick: string;
}>;

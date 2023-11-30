import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeGroupedDataCardWidgetItem } from 'fstp-ui/src/models/molecules';
export declare class MoleculeGroupedDataCardWidgetComponent extends BaseComponent {
    fItems: MoleculeGroupedDataCardWidgetItem[];
    protected render(): TemplateResult;
    private getItemTemplate;
}
export declare const GroupedDataCard: import("@lit/react").ReactWebComponent<MoleculeGroupedDataCardWidgetComponent, {}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeTabsItemProps, MoleculeTabsStatusEnum } from 'fstp-ui/src/models/molecules';
export declare class MoleculeTabsComponent extends BaseComponent {
    fStatus: MoleculeTabsStatusEnum;
    fItems: MoleculeTabsItemProps[];
    fChange?: EventDispatcher<MoleculeTabsItemProps>;
    protected render(): TemplateResult;
    private selectTab;
}
export declare const Tabs: import("@lit/react").ReactWebComponent<MoleculeTabsComponent, {
    fChange: string;
}>;

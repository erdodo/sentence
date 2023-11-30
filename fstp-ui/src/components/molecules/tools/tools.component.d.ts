import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { IMoleculeItems } from 'fstp-ui/src/models/molecules';
export declare class MoleculeToolsComponent extends BaseComponent {
    fItems?: IMoleculeItems[];
    fClick?: EventDispatcher<IMoleculeItems>;
    protected render(): TemplateResult;
}
export declare const Tools: import("@lit/react").ReactWebComponent<MoleculeToolsComponent, {
    fClick: string;
}>;

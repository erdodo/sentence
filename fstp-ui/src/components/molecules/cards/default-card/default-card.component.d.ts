import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeDropdownItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeDefaultCardComponent extends BaseComponent {
    fMoreItems: MoleculeDropdownItemProps[];
    fTitle: string;
    fDescription: string;
    fHasHeader: boolean;
    fHasLoader: boolean;
    protected render(): TemplateResult;
}
export declare const Card: import("@lit/react").ReactWebComponent<MoleculeDefaultCardComponent, {}>;

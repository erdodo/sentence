import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { IMoleculeGenericListItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeGenericListComponent extends BaseComponent {
    fItems: IMoleculeGenericListItemProps[];
    items: IMoleculeGenericListItemProps[];
    fClick?: EventDispatcher<IMoleculeGenericListItemProps>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private getItem;
}
export declare const GenericList: import("@lit/react").ReactWebComponent<MoleculeGenericListComponent, {
    fClick: string;
}>;

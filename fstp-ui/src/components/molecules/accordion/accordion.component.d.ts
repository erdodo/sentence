import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { IMoleculeAccordionItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeAccordionComponent extends BaseComponent {
    fItems: IMoleculeAccordionItemProps[];
    fIsMultiple?: boolean;
    items: IMoleculeAccordionItemProps[];
    fChange?: EventDispatcher<IMoleculeAccordionItemProps[]>;
    fClick?: EventDispatcher<IMoleculeAccordionItemProps>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private getItem;
    private toggleItem;
    private getIcon;
}
export declare const Accordion: import("@lit/react").ReactWebComponent<MoleculeAccordionComponent, {
    fChange: string;
    fClick: string;
}>;

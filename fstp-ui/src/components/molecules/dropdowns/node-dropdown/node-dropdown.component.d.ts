import BaseComponent from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { MoleculeNodeDropdownItem } from 'fstp-ui/src/models/molecules';
export declare class MoleculeNodeDropdownComponent extends BaseComponent {
    fItems: MoleculeNodeDropdownItem[];
    trigger: HTMLElement;
    items: HTMLElement;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
}
export declare const NodeDropdown: import("@lit/react").ReactWebComponent<MoleculeNodeDropdownComponent, {}>;

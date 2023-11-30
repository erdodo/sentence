import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { IPopper } from 'fstp-ui/src/functions';
import { MoleculeSearchItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeSearchComponent extends BaseComponent {
    fPlaceholder: string;
    fValue: string;
    fLoading: boolean;
    fItems: MoleculeSearchItemProps[];
    menuPopper: IPopper;
    items: MoleculeSearchItemProps[];
    flwSearchMenu: HTMLElement;
    search: HTMLInputElement;
    fChange?: EventDispatcher<string>;
    fClick?: EventDispatcher<MoleculeSearchItemProps>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private getOptions;
    private optionSelect;
    private searchChange;
}
export declare const Search: import("@lit/react").ReactWebComponent<MoleculeSearchComponent, {
    fChange: string;
}>;

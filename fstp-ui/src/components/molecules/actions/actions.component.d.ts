import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeActionsItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeActionsComponent extends BaseComponent {
    fItems?: MoleculeActionsItemProps[];
    fClick?: EventDispatcher<MoleculeActionsItemProps>;
    dropdownIsOpen: boolean;
    dropdownTrigger?: HTMLElement;
    protected render(): TemplateResult;
}
export declare const Actions: import("@lit/react").ReactWebComponent<MoleculeActionsComponent, {
    fClick: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit-element';
export declare class MoleculeDropdownItemComponent extends BaseComponent {
    fIcon?: AtomIconsEnum;
    fIconFill?: boolean;
    fCurrent?: boolean;
    fDisabled?: boolean;
    fHasIcon?: boolean;
    fLabel?: string;
    fValue?: string;
    fOpened: boolean;
    isChild: boolean;
    isParent: boolean;
    showChildren: boolean;
    iconColor: string;
    fClick?: EventDispatcher<LitElement>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    toggleChildren(): void;
}
export declare const DropdownItem: import("@lit/react").ReactWebComponent<MoleculeDropdownItemComponent, {
    fClick: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomCheckboxSelectionTypeEnum, AtomCheckboxSizeEnum } from 'fstp-ui/src/models/atoms';
import { PropertyValues, TemplateResult } from 'lit';
declare const AtomCheckboxComponent_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & typeof BaseComponent;
export declare class AtomCheckboxComponent extends AtomCheckboxComponent_base {
    fName: string;
    fSelectionType: AtomCheckboxSelectionTypeEnum;
    fIsChecked: boolean;
    fIsError: boolean;
    fHasLabel: boolean;
    fDisabled: boolean;
    fLabel: string;
    fSize: AtomCheckboxSizeEnum;
    fChange?: EventDispatcher<boolean>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
}
export declare const Checkbox: import("@lit/react").ReactWebComponent<AtomCheckboxComponent, {
    fChange: string;
}>;
export {};

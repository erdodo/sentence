import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomPasswordSizeEnum, AtomPasswordStatusEnum, AtomPasswordTypesEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
import { TemplateResult } from 'lit';
export declare class AtomPasswordComponent extends BaseComponent {
    fName: string;
    fValue: string;
    fLabel: string;
    fHasLabel: boolean;
    fStatus: AtomPasswordStatusEnum;
    fDisabled: boolean;
    fReadonly: boolean;
    fHasIcon: boolean;
    fPlaceholder: string;
    fSize: AtomPasswordSizeEnum;
    fHasHelperText: boolean;
    fHelperText: string;
    fFloatLabel: boolean;
    fIsRequired: boolean;
    inputType: AtomPasswordTypesEnum;
    fChange?: EventDispatcher<string>;
    fTypeChange?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
    private inputTypeChange;
    protected createRenderRoot(): this;
}
export declare const Password: import("@lit/react").ReactWebComponent<AtomPasswordComponent, {
    fChange: string;
    fTypeChange: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomRadioSelectionTypeEnum, AtomRadioSizeEnum } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
export declare class AtomRadioComponent extends BaseComponent {
    fSelectionType: AtomRadioSelectionTypeEnum;
    fIsError: boolean;
    fHasLabel: boolean;
    fIsChecked: boolean;
    fIsDisabled: boolean;
    fLabel: string;
    fValue: string;
    fSize: AtomRadioSizeEnum;
    fName: string;
    fChange?: EventDispatcher<string>;
    protected render(): TemplateResult;
    protected createRenderRoot(): this;
}
export declare const Radio: import("@lit/react").ReactWebComponent<AtomRadioComponent, {
    fChange: string;
}>;

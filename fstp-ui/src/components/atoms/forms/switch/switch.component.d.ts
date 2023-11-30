import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomSwitchSelectionTypeEnum, AtomSwitchSizeEnum } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
export declare class AtomSwitchComponents extends BaseComponent {
    fSelectionType: AtomSwitchSelectionTypeEnum;
    fIsError: boolean;
    fHasLabel: boolean;
    fIsChecked: boolean;
    fIsDisabled: boolean;
    fLabel: string;
    fSize: AtomSwitchSizeEnum;
    fName: string;
    fChange?: EventDispatcher<boolean>;
    protected render(): TemplateResult;
    private change;
    protected createRenderRoot(): this;
}
export declare const Switch: import("@lit/react").ReactWebComponent<AtomSwitchComponents, {
    fChange: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomTexboxTypeEnum, AtomTextboxSizeEnum, AtomTextboxStatusEnum } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import { TemplateResult } from 'lit';
export declare class AtomTextboxComponent extends BaseComponent {
    fName: string;
    fValue: string;
    fLabel: string;
    fStatus: AtomTextboxStatusEnum;
    fIsDisabled: boolean;
    fIsReadonly: boolean;
    fHasIcon: boolean;
    fHasLabel: boolean;
    fIcon: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    fPlaceholder: string;
    fSize: AtomTextboxSizeEnum;
    fHasHelperText: boolean;
    fHelperText: string;
    fFloatLabel: boolean;
    fHasNumberButtons: boolean;
    fIsRequired: boolean;
    fType: AtomTexboxTypeEnum;
    id: string;
    fChange?: EventDispatcher<string>;
    protected render(): TemplateResult;
}
export declare const Textbox: import("@lit/react").ReactWebComponent<AtomTextboxComponent, {
    fChange: string;
}>;

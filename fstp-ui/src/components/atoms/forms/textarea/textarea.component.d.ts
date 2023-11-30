import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomTextareaResizeEnum, AtomTextareaSizeEnum, AtomTextareaStatusEnum } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/atoms';
import { TemplateResult } from 'lit';
export declare class AtomTextareaComponent extends BaseComponent {
    fName: string;
    fValue: string;
    fLabel: string;
    fStatus: AtomTextareaStatusEnum;
    fIsDisabled: boolean;
    fIsReadonly: boolean;
    fHasIcon: boolean;
    fIcon: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    fPlaceholder: string;
    fSize: AtomTextareaSizeEnum;
    fResize: AtomTextareaResizeEnum;
    fHasHelperText: boolean;
    fHelperText: string;
    fFloatLabel: boolean;
    fIsRequired: boolean;
    fChange?: EventDispatcher<string>;
    protected render(): TemplateResult;
    protected createRenderRoot(): this;
}
export declare const Textarea: import("@lit/react").ReactWebComponent<AtomTextareaComponent, {
    fChange: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomColorSizeEnum } from 'fstp-ui/src/models/atoms';
import { PropertyValues, TemplateResult } from 'lit';
declare const AtomColorPickerComponent_base: import("@open-wc/form-control").Constructor<import("@open-wc/form-control").FormControlInterface> & typeof BaseComponent;
export declare class AtomColorPickerComponent extends AtomColorPickerComponent_base {
    fSize: AtomColorSizeEnum;
    fLabel: string;
    fHasLabel: boolean;
    fName: string;
    fValue: string;
    fDisabled: boolean;
    fIsRGB: boolean;
    fChange?: EventDispatcher<string>;
    picker: HTMLElement;
    colorPickerButton: HTMLElement;
    input: HTMLInputElement;
    protected firstUpdated(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private buildColorPicker;
    private paletteSelect;
    private rgb2Hex;
    private changeCanvasOpacity;
}
export declare const ColorPicker: import("@lit/react").ReactWebComponent<AtomColorPickerComponent, {
    fChange: string;
}>;
export {};

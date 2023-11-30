import BaseComponent from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum, AtomIconsFlagEnum, AtomIconsNodeEnum, AtomIconsOtherEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { TemplateResult, PropertyValues } from 'lit';
export declare class AtomIconComponent extends BaseComponent {
    fName: AtomIconsEnum;
    fOthers: AtomIconsOtherEnum;
    fFlags: AtomIconsFlagEnum;
    fType: AtomIconsTypeEnum;
    fNodes: AtomIconsNodeEnum;
    fSize?: number;
    fColor: CommonTextColorsEnum;
    icon: HTMLElement;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private parseIcon;
    protected createRenderRoot(): this;
}
export declare const Icon: import("@lit/react").ReactWebComponent<AtomIconComponent, {}>;

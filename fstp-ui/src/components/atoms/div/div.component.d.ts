import BaseComponent from 'fstp-ui/src/components/base.component';
import { PropertyValues } from 'lit';
import { AtomDivDisplayEnum, AtomDivFlexDirectionEnum, AtomDivFlexJustifyContentEnum, AtomDivTextAlignEnum } from 'fstp-ui/src/models/atoms';
export declare class AtomDivComponent extends BaseComponent {
    fDisplay: AtomDivDisplayEnum;
    fFlexDirection: AtomDivFlexDirectionEnum;
    fFlexJustifyContent: AtomDivFlexJustifyContentEnum;
    fFlexAlignItems: AtomDivFlexJustifyContentEnum;
    fFlexWrap: boolean;
    fGridColumnCount: number;
    fShadow: boolean;
    fBorder: boolean;
    fBorderRadius: boolean;
    fPadding: boolean;
    fMargin: boolean;
    fBackgroundColor: string;
    fColor: string;
    fFontSize: string;
    fTextAlign: AtomDivTextAlignEnum;
    protected updated(_changedProperties: PropertyValues): void;
    protected createRenderRoot(): this;
}

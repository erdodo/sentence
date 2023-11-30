import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
export declare class MoleculeDividerLineWidgetComponent extends BaseComponent {
    fTitle: string;
    fTitleSize: string;
    fTitleIsBold: boolean;
    fTitleColor: string;
    fTitleIsItalic: boolean;
    fIcon: AtomIconsEnum;
    protected render(): TemplateResult;
}
export declare const DividerLine: import("@lit/react").ReactWebComponent<MoleculeDividerLineWidgetComponent, {}>;

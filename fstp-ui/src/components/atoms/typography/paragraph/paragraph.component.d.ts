import { AtomParagraphSizesEnum } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
export declare class AtomParagraphComponent extends BaseComponent {
    fColor: CommonTextColorsEnum;
    fSize: AtomParagraphSizesEnum;
    fText: string;
    protected render(): TemplateResult;
}
export declare const Paragraph: import("@lit/react").ReactWebComponent<AtomParagraphComponent, {}>;

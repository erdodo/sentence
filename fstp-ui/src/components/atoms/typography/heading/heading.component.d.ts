import BaseComponent from 'fstp-ui/src/components/base.component';
import { AtomHeadingLevelEnum } from 'fstp-ui/src/models/atoms';
import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
import { TemplateResult } from 'lit';
export declare class AtomHeadingComponent extends BaseComponent {
    fLevel: AtomHeadingLevelEnum;
    fText: string;
    fColor: CommonTextColorsEnum;
    protected render(): TemplateResult;
}
export declare const Heading: import("@lit/react").ReactWebComponent<AtomHeadingComponent, {}>;

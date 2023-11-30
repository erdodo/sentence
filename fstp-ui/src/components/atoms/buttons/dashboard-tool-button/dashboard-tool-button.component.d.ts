import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class AtomDashboardToolButtonComponent extends BaseComponent {
    fTooltip: string;
    fIcon: AtomIconsEnum;
    fIconIsFill: boolean;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}
export declare const ToolButton: import("@lit/react").ReactWebComponent<AtomDashboardToolButtonComponent, {
    fClick: string;
}>;

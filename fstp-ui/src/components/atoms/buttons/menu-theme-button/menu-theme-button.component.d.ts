import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomMenuThemeButtonTypeEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class AtomMenuThemeButtonComponent extends BaseComponent {
    fDisabled: boolean;
    fCurrent: boolean;
    fType: AtomMenuThemeButtonTypeEnum;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
    getIconName(): string;
    protected createRenderRoot(): this;
}
export declare const ThemeButton: import("@lit/react").ReactWebComponent<AtomMenuThemeButtonComponent, {
    fClick: string;
}>;

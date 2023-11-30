import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomIconSizeEnum, AtomSocialButtonIconProps } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
import { LitElement } from 'lit-element';
export declare class AtomSocialButtonComponent extends BaseComponent {
    fHasLabel: boolean;
    fIsDisabled: boolean;
    fHasIcon: boolean;
    fLabel: string;
    fIcon: string;
    iconSize: AtomIconSizeEnum;
    icons: AtomSocialButtonIconProps;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}
export declare const SocialButton: import("@lit/react").ReactWebComponent<AtomSocialButtonComponent, {
    fClick: string;
}>;

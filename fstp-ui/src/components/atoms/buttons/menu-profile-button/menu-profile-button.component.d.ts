import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomMenuProfileButtonStatusEnum, AtomMenuProfileButtonTypeEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class AtomMenuProfileButtonComponent extends BaseComponent {
    fImage: string;
    fStatus: AtomMenuProfileButtonStatusEnum;
    fName: string;
    fEmail: string;
    fInitials: string;
    fHasName?: boolean;
    fHasStatus?: boolean;
    fType?: AtomMenuProfileButtonTypeEnum;
    _name: string;
    fClick?: EventDispatcher<LitElement>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    protected createRenderRoot(): this;
}
export declare const ProfileButton: import("@lit/react").ReactWebComponent<AtomMenuProfileButtonComponent, {
    fClick: string;
}>;

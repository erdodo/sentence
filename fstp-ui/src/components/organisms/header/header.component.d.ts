import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { LitElement } from 'lit-element';
export declare class OrganismHeaderComponent extends BaseComponent {
    fMenuIsOpen: boolean;
    fMenuOpen?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}

export declare const Header: import("@lit/react").ReactWebComponent<OrganismHeaderComponent, {}>;
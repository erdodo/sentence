import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/molecules';
import { LitElement } from 'lit-element';
export declare class MoleculeDrawerComponent extends BaseComponent {
    fIsOpen: boolean;
    fIcon: AtomIconsEnum;
    fIconType: AtomIconsTypeEnum;
    fTitle: string;
    fHasTitle: boolean;
    fDescription: string;
    fHasDescription: boolean;
    fHasCloseButton: boolean;
    fIsCloseOnOutsideClick: boolean;
    id: string;
    opened: boolean;
    fOpened?: EventDispatcher<LitElement>;
    fClosed?: EventDispatcher<LitElement>;
    drawerArea: HTMLElement;
    drawer: HTMLElement;
    protected updated(_changedProperties: PropertyValues): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    show(): void;
    hide(): void;
}
export declare const Drawer: import("@lit/react").ReactWebComponent<MoleculeDrawerComponent, {
    fOpened: string;
    fClosed: string;
}>;

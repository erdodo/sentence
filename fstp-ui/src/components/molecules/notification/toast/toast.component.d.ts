import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { MoleculeToastPositionEnum, MoleculeToastProps, MoleculeToastTypeEnum } from 'fstp-ui/src/models/molecules';
import { PropertyValues, TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import { LitElement } from 'lit-element';
export declare class MoleculeToastComponent extends BaseComponent {
    fAutoClose?: number;
    fDescription?: string;
    fTitle?: string;
    fHasTitle?: boolean;
    fHasCloseButton?: boolean;
    fTrigger?: number;
    fPosition: MoleculeToastPositionEnum;
    fType: MoleculeToastTypeEnum;
    fOpened?: EventDispatcher<LitElement>;
    fClosed?: EventDispatcher<LitElement>;
    toastList: string[];
    openToast: () => string;
    protected updated(_changedProperties: PropertyValues): void;
    private createToastArea;
    protected render(): TemplateResult;
    private trigger;
    closeListener(el: HTMLDivElement): void;
    private childListener;
    private getIcon;
}
export declare const Toast: import("@lit/react").ReactWebComponent<MoleculeToastComponent, {
    fOpened: string;
    fClosed: string;
}>;
export declare function toast(properties: MoleculeToastProps): void;

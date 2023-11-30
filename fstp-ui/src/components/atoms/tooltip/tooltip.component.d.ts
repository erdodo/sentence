import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomTooltipEventsEnum, AtomTooltipPlacement } from 'fstp-ui/src/models/atoms';
import { Instance } from '@popperjs/core';
import { PropertyValues, TemplateResult } from 'lit';
import { LitElement } from 'lit-element';
export declare class AtomTooltipComponent extends BaseComponent {
    fPlacement: AtomTooltipPlacement;
    fShowEvents: AtomTooltipEventsEnum[];
    fHideEvents: AtomTooltipEventsEnum[];
    fShow: boolean;
    internal: boolean;
    closeTrigger: number;
    openTrigger: number;
    fOpen?: EventDispatcher<LitElement>;
    fClose?: EventDispatcher<LitElement>;
    menuElement: HTMLElement;
    popperInstance: Instance;
    protected updated(_changedProperties: PropertyValues): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private addArrow;
    show(): void;
    hide(): void;
}
export declare const Tooltip: import("@lit/react").ReactWebComponent<AtomTooltipComponent, {
    fOpen: string;
    fClose: string;
}>;

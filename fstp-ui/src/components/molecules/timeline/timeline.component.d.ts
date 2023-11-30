import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { MoleculeTimelineItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeTimelineComponent extends BaseComponent {
    fItem: MoleculeTimelineItemProps[];
    width: number;
    fClick?: EventDispatcher<MoleculeTimelineItemProps>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private getMarker;
    private getCard;
    private getButtonStatus;
}
export declare const Timeline: import("@lit/react").ReactWebComponent<MoleculeTimelineComponent, {
    fClick: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeDropdownItemProps, MoleculeWidgetLabelPositionEnum } from 'fstp-ui/src/models/molecules';
import { AtomWidgetLabelStatusEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
export declare class MoleculeWidgetCardComponent extends BaseComponent {
    fMoreItems: MoleculeDropdownItemProps[];
    fTitle: string;
    fHasHeader: boolean;
    fHasLoader: boolean;
    fSubLabel: string;
    fSubLabelStatus: AtomWidgetLabelStatusEnum;
    fSubLabelPosition: MoleculeWidgetLabelPositionEnum;
    fMoreClick?: EventDispatcher<MoleculeDropdownItemProps>;
    fRefreshClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}
export declare const WidgetCard: import("@lit/react").ReactWebComponent<MoleculeWidgetCardComponent, {
    fMoreClick: string;
    fRefreshClick: string;
}>;

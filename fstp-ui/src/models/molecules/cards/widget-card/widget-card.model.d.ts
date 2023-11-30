import { MoleculeDropdownItemProps } from 'fstp-ui/src/models/molecules';
import { AtomWidgetLabelStatusEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface MoleculeWidgetCardProps {
    fTitle?: string;
    fMoreItems?: MoleculeDropdownItemProps[];
    fDescription?: string;
    fHasHeader?: boolean;
    fHasLoader?: boolean;
    fSubLabel?: string;
    fSubLabelStatus?: AtomWidgetLabelStatusEnum;
    fSubLabelPosition?: MoleculeWidgetLabelPositionEnum;
    fMoreClick?: EventDispatcher<MoleculeDropdownItemProps>;
    fRefreshClick?: EventDispatcher<LitElement>;
}
export declare enum MoleculeWidgetLabelPositionEnum {
    LEFT = "left",
    RIGHT = "right"
}
export declare const MoleculeCardMoreItems: MoleculeDropdownItemProps[];

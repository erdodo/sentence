import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { MoleculeDropdownPlacement } from 'fstp-ui/src/models/molecules';
import { AtomIconsFlagEnum } from 'fstp-ui/src/models/atoms';
import { IPopperEventsEnum } from 'fstp-ui/src/functions';
export interface MoleculeLanguageDropdownProps {
    fShowEvents: IPopperEventsEnum[];
    fHideEvents: IPopperEventsEnum[];
    fPlacement?: MoleculeDropdownPlacement;
    fItems?: MoleculeLanguageDropdownItemProps[];
    fHasHeader?: boolean;
    fCount?: number;
    fClick?: EventDispatcher<MoleculeLanguageDropdownItemProps>;
}
export interface MoleculeLanguageDropdownItemProps {
    fText: string;
    fIcon: AtomIconsFlagEnum;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum MoleculeLanguageDropdownItemStatus {
    SUCCESS = "success",
    WAITING = "waiting",
    ERROR = "error"
}

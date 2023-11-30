import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
import { IPopperEventsEnum } from 'fstp-ui/src/functions';
export interface MoleculeDropdownProps {
    fShowEvents?: IPopperEventsEnum[];
    fHideEvents?: IPopperEventsEnum[];
    fPlacement?: MoleculeDropdownPlacement;
    fShow?: boolean;
    fItems?: MoleculeDropdownItemProps[];
    fClick?: EventDispatcher<MoleculeDropdownItemProps>;
    fOpened?: EventDispatcher<void>;
    fClosed?: EventDispatcher<void>;
}
export interface MoleculeDropdownItemProps<fData = string> {
    fIcon?: string;
    fLabel: string;
    fCurrent?: boolean;
    fIconFill?: boolean;
    fDisabled?: boolean;
    fHasIcon?: boolean;
    fId?: string;
    fClass?: string;
    fOpened?: boolean;
    fValue?: string;
    fData?: fData;
    fChildren?: MoleculeDropdownItemProps[];
    fClick?: EventDispatcher<LitElement>;
}
export declare enum MoleculeDropdownItemTagNameEnum {
    MOLECULE_DROPDOWN_ITEM = "MOLECULE-DROPDOWN-ITEM"
}
export declare enum MoleculeDropdownPlacement {
    TOP_START = "top-start",
    TOP = "top",
    TOP_END = "top-end",
    RIGHT_START = "right-start",
    RIGHT = "right",
    RIGHT_END = "right-end",
    BOTTOM_START = "bottom-start",
    BOTTOM = "bottom",
    BOTTOM_END = "bottom-end",
    LEFT_START = "left-start",
    LEFT = "left",
    LEFT_END = "left-end"
}

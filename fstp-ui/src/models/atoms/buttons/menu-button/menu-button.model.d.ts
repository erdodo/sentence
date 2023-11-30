import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomMenuButtonProps {
    fDisabled: boolean;
    fCurrent: boolean;
    fType: AtomMenuButtonTypeEnum;
    fIcon: AtomIconsEnum;
    fTooltip?: string;
    fHasNotification: boolean;
    fId?: string;
    fClass?: string;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum AtomMenuButtonTypeEnum {
    SIDEBAR = "sidebar",
    HEADER = "header"
}

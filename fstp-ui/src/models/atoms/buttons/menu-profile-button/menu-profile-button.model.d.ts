import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomMenuProfileButtonProps {
    fImage?: string;
    fStatus?: AtomMenuProfileButtonStatusEnum;
    fName?: string;
    fEmail?: string;
    fInitials?: string;
    fHasName?: boolean;
    fHasStatus?: boolean;
    fId?: string;
    fClass?: string;
    fClick?: EventDispatcher<LitElement>;
    fType?: AtomMenuProfileButtonTypeEnum;
}
export declare enum AtomMenuProfileButtonStatusEnum {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum AtomMenuProfileButtonTypeEnum {
    MENU = "menu",
    PROFILE = "profile"
}

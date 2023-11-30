import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomSocialButtonProps {
    fText: string;
    fClass?: string;
    fHasIcon: boolean;
    fLabel: string;
    fHasLabel: boolean;
    fIcon: AtomSocialButtonIconEnum;
    fId?: string;
    fClick?: EventDispatcher<LitElement>;
}
export interface AtomSocialButtonIconProps {
    [key: string]: string;
}
export declare enum AtomSocialButtonIconEnum {
    MICROSOFT = "microsoft"
}

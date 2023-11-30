import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomMenuThemeButtonProps {
    fDisabled?: boolean;
    fCurrent?: boolean;
    fType: AtomMenuThemeButtonTypeEnum;
    fId?: string;
    fClass?: string;
    fClick?: EventDispatcher<LitElement>;
}
export declare enum AtomMenuThemeButtonTypeEnum {
    OS_DEFAULT = "os-default",
    LIGHT = "light",
    DARK = "dark"
}

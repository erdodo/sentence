import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeThemeDropdownProps {
    fDefault?: MoleculeThemeDropdownDefaultEnum;
    fOsDefaultText?: string;
    fDarkText?: string;
    fLightText?: string;
    fChange?: EventDispatcher<string>;
}
export declare enum MoleculeThemeDropdownDefaultEnum {
    OS_DEFAULT = "os-default",
    DARK = "dark",
    LIGHT = "light"
}

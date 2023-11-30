import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { MoleculeDropdownItemProps } from 'fstp-ui/src/models/molecules';
import { TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
export declare class MoleculeThemeDropdownComponent extends BaseComponent {
    fDefault?: string;
    fOsDefaultText: string;
    fDarkText: string;
    fLightText: string;
    fChange?: EventDispatcher<string>;
    items: MoleculeDropdownItemProps[];
    protected render(): TemplateResult;
    getMenuThemeButtonType(): TemplateResult;
    changeTheme(e: CustomEvent): void;
}
export declare const ThemeDropdown: import("@lit/react").ReactWebComponent<MoleculeThemeDropdownComponent, {
    fChange: string;
}>;

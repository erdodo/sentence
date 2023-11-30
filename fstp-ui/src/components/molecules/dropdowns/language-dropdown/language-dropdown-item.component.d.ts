import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
import 'fstp-ui/src/components/molecules';
import { AtomIconsFlagEnum } from 'fstp-ui/src/models/atoms';
export declare class MoleculeLanguageItemDropdownComponent extends BaseComponent {
    fText: string;
    fIcon: AtomIconsFlagEnum;
    protected render(): TemplateResult;
}
export declare const LanguageDropdownItem: import("@lit/react").ReactWebComponent<MoleculeLanguageItemDropdownComponent, {}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { MoleculeDropdownItemProps, MoleculeMobileMenuItemsProps } from 'fstp-ui/src/models/molecules';
import 'fstp-ui/src/components/molecules';
import 'fstp-ui/src/components/atoms';
export declare class MoleculeMobileMenuComponent extends BaseComponent {
    fItems: MoleculeMobileMenuItemsProps[];
    fClick?: EventDispatcher<MoleculeDropdownItemProps>;
    protected render(): TemplateResult;
}
export declare const MobileMenu: import("@lit/react").ReactWebComponent<MoleculeMobileMenuComponent, {
    fClick: string;
}>;

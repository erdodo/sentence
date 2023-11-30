import { MoleculeDropdownItemProps } from 'fstp-ui/src/models/molecules';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeMobileMenuProps {
    fItems: MoleculeMobileMenuItemsProps[];
    fClick?: EventDispatcher<MoleculeDropdownItemProps>;
}
export interface MoleculeMobileMenuItemsProps {
    fLabel: string;
    fChildren?: MoleculeDropdownItemProps[];
}

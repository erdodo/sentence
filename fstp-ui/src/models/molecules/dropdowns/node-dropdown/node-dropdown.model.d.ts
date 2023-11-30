import { AtomIconsNodeEnum } from 'fstp-ui/src/models/atoms';
export interface MoleculeNodeDropdownProps {
    fItems: MoleculeNodeDropdownItem[];
}
export interface MoleculeNodeDropdownItem {
    fTitle?: string;
    fChildren?: MoleculeNodeDropdownChildren[];
}
export interface MoleculeNodeDropdownChildren {
    fTitle?: string;
    fIcon?: AtomIconsNodeEnum;
    fValue?: string;
    fStatus?: MoleculeNodeDropdownStatusEnum;
    fActive?: boolean;
}
export declare enum MoleculeNodeDropdownStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INFO = "info"
}
export declare const MoleculeNodeDropdownItemsDefault: MoleculeNodeDropdownItem[];

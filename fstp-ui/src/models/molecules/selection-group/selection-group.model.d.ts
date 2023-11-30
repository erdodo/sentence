import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeSelectionGroupProps {
    fHasSearch?: boolean;
    fHasFooter?: boolean;
    fItems?: MoleculeSelectionGroupItem[];
    fType?: MoleculeSelectionGroupItemTypeEnum;
    fChange?: EventDispatcher<MoleculeSelectionGroupItem[]>;
    fSearchChange?: EventDispatcher<string>;
}
export interface MoleculeSelectionGroupItem<fValue = any> {
    fDisable?: boolean;
    fSelected?: boolean;
    fTitle?: string;
    fValue?: fValue;
    fDescription?: string;
    fIcon?: AtomIconsEnum;
    fIconType?: AtomIconsTypeEnum;
    visible?: boolean;
    fIconColor?: MoleculeSelectionGroupItemIconColorEnum;
    fIconIsShow?: boolean;
    fDescriptionIsShow?: boolean;
}
export declare enum MoleculeSelectionGroupItemIconColorEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INFO = "info",
    DANGER = "danger"
}
export declare enum MoleculeSelectionGroupItemTypeEnum {
    CHECKBOX = "checkbox",
    RADIO = "radio"
}

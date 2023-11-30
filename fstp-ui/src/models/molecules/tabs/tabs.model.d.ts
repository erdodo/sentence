import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeTabsProps {
    fStatus?: MoleculeTabsStatusEnum;
    fItems?: MoleculeTabsItemProps[];
    fChange?: EventDispatcher<MoleculeTabsItemProps>;
}
export interface MoleculeTabsItemProps {
    fLabel?: string;
    fValue?: string;
    fCurrent?: boolean;
}
export declare enum MoleculeTabsStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare const MoleculeTabsItemsDefault: MoleculeTabsItemProps[];

import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { IMoleculeItems, MoleculeDropdownItemProps } from 'fstp-ui/src/models/molecules';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
export interface MoleculeTreeProps {
    fItems?: MoleculeTreeItemsProps[];
    fHasSearch?: boolean;
    fId?: string;
    fClass?: string;
    fSelectedValue?: string;
    fActiveIsShow?: boolean;
    fDropdownClick?: EventDispatcher<MoleculeTreeDropdownClickProps>;
    fSelectedChange?: EventDispatcher<MoleculeTreeItemsProps[]>;
    fDropdownJobItems?: MoleculeDropdownItemProps[];
    fJobItems?: MoleculeDropdownItemProps[];
    fDropdownFolderItems?: MoleculeDropdownItemProps[];
    fFolderItems?: MoleculeDropdownItemProps[];
    fLeftItems?: MoleculeDropdownItemProps[];
    fRightItems?: MoleculeDropdownItemProps[];
    fTopButtonsClick?: EventDispatcher<IMoleculeItems>;
    fParentClosedIcon?: AtomIconsEnum;
    fParentOpenedIcon?: AtomIconsEnum;
    fChildIcon?: AtomIconsEnum;
}
export interface MoleculeTreeItemsProps {
    label: string;
    key: string | number;
    children: MoleculeTreeItemsProps[];
    data: MoleculeTreeItemsDataProps;
}
export interface MoleculeTreeItemsDataProps {
    createdBy?: string;
    createdDate?: number;
    hasAccess?: boolean;
    id?: number;
    isFolder?: boolean;
    isFolderOpen?: boolean;
    isSelected?: boolean;
    is_Actv?: boolean;
    isDropdownShow?: boolean;
    lastModifiedBy?: string;
    lastModifiedDate?: number;
    parentId?: number;
}
export interface MoleculeTreeDropdownClickProps {
    item: MoleculeTreeItemsProps;
    dropdown: MoleculeDropdownItemProps;
}

import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeSearchProps {
    fPlaceholder?: string;
    fValue?: string;
    fItems?: MoleculeSearchItemProps[];
    fLoading?: boolean;
    fChange?: EventDispatcher<string>;
    fClick?: EventDispatcher<MoleculeSearchItemProps>;
}
export interface MoleculeSearchItemProps {
    fLabel: string;
    fValue: string;
    fIsCurrent?: boolean;
    fIsDisabled?: boolean;
}
export declare const defaultMoleculeSearchItems: MoleculeSearchItemProps[];

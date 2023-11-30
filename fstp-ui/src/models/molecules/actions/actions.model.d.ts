import { IAtomJobActionButtonProps } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeActionsProps {
    fItems: MoleculeActionsItemProps[];
    fClick?: EventDispatcher<IAtomJobActionButtonProps>;
}
export interface MoleculeActionsItemProps extends IAtomJobActionButtonProps {
    fChildren?: MoleculeActionsItemProps[];
    fLabel?: string;
}
export declare const MoleculeActionsDefaultItems: MoleculeActionsItemProps[];

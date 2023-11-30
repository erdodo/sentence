import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeZoomActionsProps {
    fResetClick?: EventDispatcher<void>;
    fPlusClick?: EventDispatcher<void>;
    fMinusClick?: EventDispatcher<void>;
}

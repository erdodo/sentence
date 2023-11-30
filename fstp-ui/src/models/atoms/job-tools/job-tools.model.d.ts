import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IAtomJobToolsProps {
    fHandClick?: EventDispatcher<void>;
    fLassoClick?: EventDispatcher<void>;
    fLineSpaceClick?: EventDispatcher<void>;
    fConnectClick?: EventDispatcher<void>;
}

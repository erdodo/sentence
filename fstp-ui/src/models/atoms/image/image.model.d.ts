import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface AtomImageProps {
    fSrc?: string;
    fClass?: string;
    fAlt?: string;
    fId?: string;
    fImageError?: EventDispatcher<Event>;
}

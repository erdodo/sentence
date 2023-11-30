import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IAtomPaginationProps {
    fPaginationRange?: AtomPaginationRange;
    fTotalPage?: number;
    fSetCurrentPage?: number;
    fChange?: EventDispatcher<IPages>;
}
export type AtomPaginationRange = 5 | 7 | 9;
export interface IPages {
    value: number;
    label?: string;
}

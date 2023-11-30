import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomPaginationRange, IPages } from 'fstp-ui/src/models/atoms';
export declare class AtomPaginationComponent extends BaseComponent {
    fPaginationRange: AtomPaginationRange;
    fTotalPage: number;
    fSetCurrentPage: number;
    value: number;
    fChange?: EventDispatcher<IPages>;
    protected updated(_changedProperties: PropertyValues): void;
    get pages(): IPages[];
    private setPage;
    protected render(): TemplateResult;
}
export declare const Pagination: import("@lit/react").ReactWebComponent<AtomPaginationComponent, {
    fChange: string;
}>;

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomBreadcrumbStatusEnum, AtomIconsEnum, IBreadcrumb } from 'fstp-ui/src/models/atoms';
import { PropertyValues, TemplateResult } from 'lit';
export declare class AtomBreadcrumbsComponent extends BaseComponent {
    fBreadcrumbs?: IBreadcrumb[];
    fIcon: AtomIconsEnum;
    fStatus: AtomBreadcrumbStatusEnum;
    fIsOutline: boolean;
    fColor: boolean;
    fClick?: EventDispatcher<string>;
    data: IBreadcrumb[];
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
}
export declare const Breadcrumbs: import("@lit/react").ReactWebComponent<AtomBreadcrumbsComponent, {
    fClick: string;
}>;

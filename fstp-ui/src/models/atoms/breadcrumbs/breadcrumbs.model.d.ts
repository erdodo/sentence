import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface AtomBreadcrumbsProps {
    fBreadcrumbs: IBreadcrumb[];
    fIsOutline?: boolean;
    fStatus?: AtomBreadcrumbStatusEnum;
    fId?: string;
    fClass?: string;
    fClick?: EventDispatcher<string>;
}
export interface IBreadcrumb {
    fTitle: string;
    fRouterLink?: string;
}
export declare enum AtomBreadcrumbStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    DANGER = "danger",
    WARNING = "warning",
    INFO = "info",
    NEUTRAL = "neutral"
}

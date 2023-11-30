import { IBreadcrumb } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface ITemplateContent<fValue = any> {
    fTitle?: string;
    fValue?: fValue;
    fBreadcrumbs?: IBreadcrumb[];
    fIsDashboard?: boolean;
    fTitleClick?: EventDispatcher<any>;
    fBreadcrumbsClick?: EventDispatcher<string>;
}

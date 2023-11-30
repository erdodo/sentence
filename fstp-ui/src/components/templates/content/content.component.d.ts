import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { IBreadcrumb } from 'fstp-ui/src/models/atoms';
import 'fstp-ui/src/components/organisms';
export declare class TemplateContentComponent extends BaseComponent {
    fTitle: string;
    fValue: any;
    fIsDashboard: boolean;
    fBreadcrumbs: IBreadcrumb[];
    private showMobileMenu;
    fTitleClick?: EventDispatcher<any>;
    fBreadcrumbsClick?: EventDispatcher<string>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    mobileMenuButtonClicked(): void;
}

export declare const Content: import("@lit/react").ReactWebComponent<TemplateContentComponent, {}>;

import BaseComponent from 'fstp-ui/src/components/base.component';
import { AtomBadgeStatusEnum } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
export declare class AtomBadgeComponent extends BaseComponent {
    fText: string;
    fHasDot?: boolean;
    fStatus: AtomBadgeStatusEnum;
    protected render(): TemplateResult;
}
export declare const Badge: import("@lit/react").ReactWebComponent<AtomBadgeComponent, {}>;

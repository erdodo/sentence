import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomProgressBarStatusEnum } from 'fstp-ui/src/models/atoms';
export declare class AtomProgressBarComponent extends BaseComponent {
    fStatus: AtomProgressBarStatusEnum;
    fValue: number;
    protected render(): TemplateResult;
}
export declare const ProgressBar: import("@lit/react").ReactWebComponent<AtomProgressBarComponent, {}>;

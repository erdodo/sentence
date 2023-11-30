import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomWidgetLabelPositionEnum, AtomWidgetLabelStatusEnum } from 'fstp-ui/src/models/atoms';
export declare class AtomWidgetLabelComponent extends BaseComponent {
    fLabel: string;
    fPosition: AtomWidgetLabelPositionEnum;
    fStatus: AtomWidgetLabelStatusEnum;
    protected render(): TemplateResult;
}

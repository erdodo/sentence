import BaseComponent from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import 'fstp-ui/src/components/atoms';
export declare class MoleculeMdxParserComponent extends BaseComponent {
    fValue: string;
    value: {};
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private getItem;
    private getListItems;
}

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
export declare class MoleculeTitleWidgetComponent extends BaseComponent {
    fTitle: string;
    fTitleSize: string;
    fTitleIsBold: boolean;
    fTitleColor: string;
    fTitleIsItalic: boolean;
    fIcon?: AtomIconsEnum;
    isEdit: boolean;
    editValue: string;
    fClickSave?: EventDispatcher<string>;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
}

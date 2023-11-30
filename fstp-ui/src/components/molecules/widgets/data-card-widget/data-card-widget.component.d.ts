import BaseComponent from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { MoleculeDataCardWidgetPropsIconStatusEnum } from 'fstp-ui/src/models/molecules';
export declare class MoleculeDataCardWidgetComponent extends BaseComponent {
    fTitle: string;
    fSubTitle: string;
    fIcon: AtomIconsEnum;
    fIconStatus?: MoleculeDataCardWidgetPropsIconStatusEnum;
    fTitleSize: string;
    fTitleIsBold: boolean;
    fTitleColor: string;
    fTitleIsItalic: boolean;
    fSubTitleSize: string;
    fSubTitleIsBold: boolean;
    fSubTitleColor: string;
    fSubTitleIsItalic: boolean;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
}
export declare const DataCard: import("@lit/react").ReactWebComponent<MoleculeDataCardWidgetComponent, {}>;

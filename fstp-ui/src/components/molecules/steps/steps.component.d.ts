import BaseComponent from 'fstp-ui/src/components/base.component';
import { PropertyValues, TemplateResult } from 'lit';
import { MolculeStepsShowTypeEnum, MolculeStepsSizeEnum, MoleculeStepsItemProps } from 'fstp-ui/src/models/molecules';
export declare class MoleculeStepsComponent extends BaseComponent {
    fShowType: MolculeStepsShowTypeEnum;
    fSize: MolculeStepsSizeEnum;
    fItems: MoleculeStepsItemProps[];
    fStep: number;
    fCount: number;
    step: number;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private item;
    private incomplate;
    private current;
    private complate;
}
export declare const Steps: import("@lit/react").ReactWebComponent<MoleculeStepsComponent, {}>;

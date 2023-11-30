import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
export declare class MoleculeZoomActionsComponent extends BaseComponent {
    fExample: string;
    fResetClick?: EventDispatcher<void>;
    fPlusClick?: EventDispatcher<void>;
    fMinusClick?: EventDispatcher<void>;
    protected render(): TemplateResult;
}

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
export declare class AtomJobToolsComponent extends BaseComponent {
    fHandClick?: EventDispatcher<void>;
    fLassoClick?: EventDispatcher<void>;
    fLineSpaceClick?: EventDispatcher<void>;
    fConnectClick?: EventDispatcher<void>;
    protected render(): TemplateResult;
}

import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
export declare class AtomImageComponent extends BaseComponent {
    fSrc: string;
    fAlt: string;
    fError: boolean;
    fImageError?: EventDispatcher<Event>;
    protected render(): TemplateResult;
    private onError;
}
export declare const Image: import("@lit/react").ReactWebComponent<AtomImageComponent, {
    fImageError: string;
}>;

import BaseComponent from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomLoaderTypeEnum } from 'fstp-ui/src/models/atoms';
export declare class AtomLoaderComponent extends BaseComponent {
    fType: AtomLoaderTypeEnum;
    protected render(): TemplateResult;
}
export declare const Loader: import("@lit/react").ReactWebComponent<AtomLoaderComponent, {}>;

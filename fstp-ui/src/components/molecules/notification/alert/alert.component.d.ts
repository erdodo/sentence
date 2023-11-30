import BaseComponent from 'fstp-ui/src/components/base.component';
import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { TemplateResult } from 'lit';
import { MoleculeAlertTypeEnum } from 'fstp-ui/src/models/molecules';
export declare class AtomAlertComponent extends BaseComponent {
    fIcon: AtomIconsEnum;
    fTitle: string;
    fHasTitle: boolean;
    fHasCloseButton: boolean;
    fParagraph: string;
    fType: MoleculeAlertTypeEnum;
    private getIcon;
    protected render(): TemplateResult;
}
export declare const Alert: import("@lit/react").ReactWebComponent<AtomAlertComponent, {}>;

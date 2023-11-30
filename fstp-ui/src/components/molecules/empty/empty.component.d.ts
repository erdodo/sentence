import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { TemplateResult } from 'lit';
import { AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomIconsEnum } from 'fstp-ui/src/models/atoms';
import { LitElement } from 'lit-element';
import { MoleculeStatusEnum } from 'fstp-ui/src/models/molecules';
export declare class MoleculeEmptyComponent extends BaseComponent {
    fHasButton: boolean;
    fTitle: string;
    fDescription: string;
    fButtonText: string;
    fIcon: AtomIconsEnum;
    fButtonStatus: AtomButtonStatusEnum;
    fButtonSize: AtomButtonSizeEnum;
    fStatus: MoleculeStatusEnum;
    fButtonShowType: AtomButtonShowTypeEnum;
    fClick?: EventDispatcher<LitElement>;
    protected render(): TemplateResult;
}
export declare const Empty: import("@lit/react").ReactWebComponent<MoleculeEmptyComponent, {
    fClick: string;
}>;

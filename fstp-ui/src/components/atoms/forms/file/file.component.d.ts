import BaseComponent, { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { AtomFileAcceptEnum, AtomFileShowTypeEnum, AtomFileSizeEnum, AtomFileStatusEnum } from 'fstp-ui/src/models/atoms';
import { PropertyValues, TemplateResult } from 'lit';
export declare class AtomFileComponent extends BaseComponent {
    fStatus: AtomFileStatusEnum;
    fHasLabel: boolean;
    fAccept: AtomFileAcceptEnum;
    fIsMultiple: boolean;
    fHelperText: string;
    fDisabled: boolean;
    fLabel: string;
    fName: string;
    fFileSize: number;
    fShowType: AtomFileShowTypeEnum;
    fSize: AtomFileSizeEnum;
    iconSize: number;
    isUpload: boolean;
    files: FileList;
    input: HTMLInputElement;
    fUpload?: EventDispatcher<File[]>;
    fClick?: EventDispatcher<void>;
    fUploadError?: EventDispatcher<string>;
    protected firstUpdated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult;
    private upload;
    protected createRenderRoot(): this;
}
export declare const File: import("@lit/react").ReactWebComponent<AtomFileComponent, {
    fUpload: string;
    fUploadError: string;
}>;

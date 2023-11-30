import { EventDispatcher } from 'fstp-ui/src/components/base.component';
import { LitElement } from 'lit-element';
export interface AtomFileProps {
    fId?: string;
    fName?: string;
    fClass: string;
    fLabel: string;
    fHasLabel: boolean;
    fDisabled: boolean;
    fStatus: AtomFileStatusEnum;
    fHelperText: string;
    fAccept: string;
    fHasIcon: boolean;
    fIsMultiple: boolean;
    fFileSize: number;
    fShowType: AtomFileShowTypeEnum;
    fSize: AtomFileSizeEnum;
    fUpload?: EventDispatcher<LitElement>;
    fUploadError?: EventDispatcher<string>;
    fClick?: EventDispatcher<void>;
}
export declare enum AtomFileStatusEnum {
    PRIMARY = "flw-button--primary",
    SECONDARY = "flw-button--secondary",
    SUCCESS = "flw-button--success",
    DANGER = "flw-button--danger"
}
export declare enum AtomFileSizeEnum {
    SMALL = "flw-button--small",
    MEDIUM = "flw-button--medium",
    LARGE = "flw-button--large"
}
export declare enum AtomFileAcceptEnum {
    TXT = ".txt",
    PNG = ".png",
    JPG = ".jpg",
    JPEG = ".jpeg",
    SH = ".sh",
    JAR = ".jar",
    XML = ".xml"
}
export declare enum AtomFileShowTypeEnum {
    FILL = "flw-button--fill",
    OUTLINE = "flw-button--outline",
    GHOST = "flw-button--ghost"
}

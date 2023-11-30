export interface IMoleculeAlert {
    fHasTitle?: boolean;
    fTitle?: string;
    fParagraph?: string;
    fType?: MoleculeAlertTypeEnum;
    fHasCloseButton?: boolean;
    fId?: string;
    fClass?: string;
}
export declare enum MoleculeAlertTypeEnum {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    DANGER = "danger"
}
export declare enum MoleculeAlertIconEnum {
    SUCCESS = "checkmark-circle-2",
    INFO = "info",
    WARNING = "alert-circle",
    DANGER = "close-circle"
}

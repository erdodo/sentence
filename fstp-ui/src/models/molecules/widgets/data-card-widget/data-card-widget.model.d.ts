import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
export interface MoleculeDataCardWidgetProps<fData = any> {
    fTitle?: string;
    fSubTitle?: string;
    fData?: fData;
    fTitleSize?: string;
    fTitleIsBold?: boolean;
    fTitleColor?: string;
    fTitleIsItalic?: boolean;
    fSubTitleSize?: string;
    fSubTitleIsBold?: boolean;
    fSubTitleColor?: string;
    fSubTitleIsItalic?: boolean;
    fIcon?: AtomIconsEnum;
    fIconStatus?: MoleculeDataCardWidgetPropsIconStatusEnum;
}
export declare enum MoleculeDataCardWidgetPropsIconStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
}

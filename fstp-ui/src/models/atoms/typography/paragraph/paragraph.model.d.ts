import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
export interface AtomParagraphProps {
    fColor: CommonTextColorsEnum;
    fSize: AtomParagraphSizesEnum;
    fText: string;
    fClass: string;
}
export declare enum AtomParagraphSizesEnum {
    Small = "flw-text-body-small",
    Medium = "flw-text-body-medium",
    Large = "flw-text-body-large"
}

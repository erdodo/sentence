import { CommonTextColorsEnum } from 'fstp-ui/src/models/common';
export interface AtomHeadingProps {
    fLevel: AtomHeadingLevelEnum;
    fText: string;
    fColor: CommonTextColorsEnum;
    fClass: string;
}
export declare enum AtomHeadingLevelEnum {
    Level1 = "1",
    Level2 = "2",
    Level3 = "3",
    Level4 = "4",
    Level5 = "5",
    Level6 = "6"
}

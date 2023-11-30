export interface MoleculeStepsProps {
    fShowType?: MolculeStepsShowTypeEnum;
    fSize?: MolculeStepsSizeEnum;
    fItems?: MoleculeStepsItemProps[];
    fStep?: number;
    fCount?: number;
}
export interface MoleculeStepsItemProps {
    fType?: MolculeStepsTypeEnum;
}
export declare enum MolculeStepsTypeEnum {
    INCOMPLETE = "incomplete",
    CURRENT = "current",
    COMPLETE = "complete"
}
export declare enum MolculeStepsSizeEnum {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare enum MolculeStepsShowTypeEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

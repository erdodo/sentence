import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface IMoleculeGenericListProps {
    fItems: IMoleculeGenericListItemProps[];
    fClick?: EventDispatcher<IMoleculeGenericListItemProps>;
}
export interface IMoleculeGenericListItemProps<fData = any> {
    fTitle?: string;
    fSubtitle?: string;
    fIcon?: AtomIconsEnum;
    fStatus?: IMoleculeGenericListItemStatusEnum;
    fIconType?: AtomIconsTypeEnum;
    fDisabled?: boolean;
    fValue?: string;
    fData?: fData;
    fCurrent?: boolean;
}
export declare enum IMoleculeGenericListItemStatusEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger",
    INFO = "info",
    NEUTRAL = "neutral"
}

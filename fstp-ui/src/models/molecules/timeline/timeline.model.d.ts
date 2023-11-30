import { AtomIconsNodeEnum } from 'fstp-ui/src/models/atoms';
import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeTimelineProps {
    fItem?: MoleculeTimelineItemProps[];
    fClick?: EventDispatcher<MoleculeTimelineItemProps>;
}
export interface MoleculeTimelineItemProps<fData = any> {
    fStatus?: MoleculeTimelineStatusEnum;
    fTitle?: string;
    fIcon?: AtomIconsNodeEnum;
    fDate?: string;
    fContent?: string;
    fAlertParagraph?: string;
    fButtonIsShow?: boolean;
    fButtonLabel?: string;
    fValue?: string;
    fData?: fData;
}
export declare enum MoleculeTimelineStatusEnum {
    RUNNING = "running",
    SUCCESS = "success",
    FAILURE = "failure"
}

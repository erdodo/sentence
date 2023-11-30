import { AtomProgressBarStatusEnum } from 'fstp-ui/src/models/atoms';
export interface MoleculeGroupedDataCardWidgetProps {
    fItems?: MoleculeGroupedDataCardWidgetItem[];
}
export interface MoleculeGroupedDataCardWidgetItem {
    fLabel?: string;
    fDescription?: string;
    fHasDescription?: boolean;
    fValue?: string;
    fProgressValue?: number;
    fProgressType?: AtomProgressBarStatusEnum;
}

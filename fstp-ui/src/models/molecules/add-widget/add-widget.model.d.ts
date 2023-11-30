import { EventDispatcher } from 'fstp-ui/src/components/base.component';
export interface MoleculeAddWidgetProps {
    fItems?: MoleculeAddWidgetItem[];
    fClick?: EventDispatcher<MoleculeAddWidgetItem>;
}
export interface MoleculeAddWidgetItem<fData = any> {
    fType: MoleculeAddWidgetItemTypeEnum;
    fLabel?: string;
    fValue?: string;
    fData?: fData;
}
export declare enum MoleculeAddWidgetItemTypeEnum {
    BAR_CHART = "bar_chart",
    LINE_CHART = "line_chart",
    PIE_CHART = "pie_chart",
    POLAR_AREA_CHART = "polar_area_chart",
    RADAR_CHART = "radar_chart",
    DATA_TABLE = "data_table",
    GROUPED_DATA_CARD = "grouped_data_card",
    DATA_CARD = "data_card",
    DIVIDER_LINE = "divider_line"
}

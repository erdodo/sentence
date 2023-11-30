import { AtomIconsEnum } from 'fstp-ui/src/models/atoms';
export var MoleculeWidgetLabelPositionEnum;
(function (MoleculeWidgetLabelPositionEnum) {
    MoleculeWidgetLabelPositionEnum["LEFT"] = "left";
    MoleculeWidgetLabelPositionEnum["RIGHT"] = "right";
})(MoleculeWidgetLabelPositionEnum || (MoleculeWidgetLabelPositionEnum = {}));
export const MoleculeCardMoreItems = [
    {
        fLabel: 'Refresh',
        fIcon: AtomIconsEnum.REFRESH,
        fIconFill: true,
        fValue: 'refresh',
        fHasIcon: true,
    },
    {
        fLabel: 'Edit',
        fIcon: AtomIconsEnum.EDIT_1,
        fIconFill: true,
        fValue: 'edit',
        fHasIcon: true,
    },
    {
        fLabel: 'Detail',
        fIcon: AtomIconsEnum.EXTERNAL_LINK,
        fIconFill: true,
        fValue: 'detail',
        fHasIcon: true,
    },
    {
        fLabel: 'Copy',
        fIcon: AtomIconsEnum.COPY,
        fIconFill: true,
        fValue: 'copy',
        fHasIcon: true,
    },
    {
        fLabel: 'Delete',
        fIcon: AtomIconsEnum.TRASH_2,
        fIconFill: true,
        fValue: 'delete',
        fHasIcon: true,
    },
    {
        fLabel: 'Export',
        fIcon: AtomIconsEnum.DOWNLOAD,
        fIconFill: true,
        fValue: 'export',
        fHasIcon: true,
        fChildren: [
            {
                fLabel: 'PNG',
                fIcon: AtomIconsEnum.IMAGE_1,
                fValue: 'png',
                fIconFill: true,
                fHasIcon: true,
            },
            {
                fLabel: 'XLSX',
                fIcon: AtomIconsEnum.FILE_TEXT,
                fValue: 'xlsx',
                fIconFill: true,
                fHasIcon: true,
            },
        ],
    },
];

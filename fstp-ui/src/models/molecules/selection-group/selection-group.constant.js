import { MoleculeSelectionGroupItemIconColorEnum, } from 'fstp-ui/src/models/molecules';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
export const MoleculeSelectionGroupDefaultItems = [
    {
        fTitle: 'Item 1',
        fDescription: 'Description 1',
        fSelected: true,
        fIcon: AtomIconsEnum.GLOBE_3,
        fIconType: AtomIconsTypeEnum.FILL,
        fIconColor: MoleculeSelectionGroupItemIconColorEnum.PRIMARY,
        fIconIsShow: true,
        fDescriptionIsShow: true,
    },
    {
        fTitle: 'Item 2',
        fDescription: 'Description 2',
        fSelected: false,
        fIcon: AtomIconsEnum.PIE_CHART_1,
        fIconType: AtomIconsTypeEnum.FILL,
        fIconColor: MoleculeSelectionGroupItemIconColorEnum.SECONDARY,
        fIconIsShow: true,
        fDescriptionIsShow: true,
    },
    {
        fTitle: 'Item 3',
        fDescription: 'Description 3',
        fSelected: false,
        fIcon: AtomIconsEnum.PIE_CHART_1,
        fIconType: AtomIconsTypeEnum.FILL,
        fDisable: true,
        fIconIsShow: true,
        fDescriptionIsShow: true,
    },
    {
        fTitle: 'No description',
        fSelected: false,
        fIcon: AtomIconsEnum.PIE_CHART_1,
        fIconType: AtomIconsTypeEnum.FILL,
        fIconIsShow: true,
    },
    {
        fTitle: 'No icon',
        fDescription: '--- no icon ---',
        fSelected: false,
        fDescriptionIsShow: true,
    },
];

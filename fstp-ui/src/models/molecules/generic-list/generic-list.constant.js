import { IMoleculeGenericListItemStatusEnum, } from 'fstp-ui/src/models/molecules';
import { AtomIconsEnum, AtomIconsTypeEnum } from 'fstp-ui/src/models/atoms';
export const MoleculeGenericListDefaultItems = [
    {
        fTitle: 'Dashboards Tree',
        fSubtitle: 'You can access and organize dashboard folders.',
        fIcon: AtomIconsEnum.GRID,
        fIconType: AtomIconsTypeEnum.FILL,
        fStatus: IMoleculeGenericListItemStatusEnum.PRIMARY,
        fValue: '1',
        fData: {
            example: 'example',
        },
    },
    {
        fTitle: 'Jobs Tree',
        fSubtitle: 'You can access and organize job folders.',
        fIcon: AtomIconsEnum.OPTIONS_2,
        fIconType: AtomIconsTypeEnum.FILL,
        fStatus: IMoleculeGenericListItemStatusEnum.SECONDARY,
        fValue: '2',
        fData: {
            example: 'example',
        },
    },
    {
        fTitle: 'Configuration',
        fSubtitle: 'You can access and organize configuration tables.',
        fIcon: AtomIconsEnum.SHIELD_ON,
        fIconType: AtomIconsTypeEnum.FILL,
        fStatus: IMoleculeGenericListItemStatusEnum.INFO,
        fValue: '3',
        fData: {
            example: 'example',
        },
    },
];

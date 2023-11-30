import { AtomIconsEnum, AtomIconsTypeEnum, AtomJobActionButtonSizeEnum, AtomJobActionButtonStatusEnum, } from 'fstp-ui/src/models/atoms';
export const MoleculeActionsDefaultItems = [
    {
        fStatus: AtomJobActionButtonStatusEnum.SUCCESS,
        fIcon: AtomIconsEnum.PLAY_CIRCLE,
        fIconType: AtomIconsTypeEnum.FILL,
        fSize: AtomJobActionButtonSizeEnum.LARGE,
    },
    {
        fStatus: AtomJobActionButtonStatusEnum.NEUTRAL,
        fIcon: AtomIconsEnum.SAVE,
        fIconType: AtomIconsTypeEnum.FILL,
    },
    {
        fStatus: AtomJobActionButtonStatusEnum.NEUTRAL,
        fIcon: AtomIconsEnum.CALENDAR,
        fIconType: AtomIconsTypeEnum.FILL,
    },
    {
        fStatus: AtomJobActionButtonStatusEnum.NEUTRAL,
        fIcon: AtomIconsEnum.CLOCK,
        fIconType: AtomIconsTypeEnum.FILL,
    },
    {
        fStatus: AtomJobActionButtonStatusEnum.NEUTRAL,
        fIcon: AtomIconsEnum.MENU_1,
        fIconType: AtomIconsTypeEnum.FILL,
    },
    {
        fStatus: AtomJobActionButtonStatusEnum.NEUTRAL,
        fIcon: AtomIconsEnum.MORE_HORIZONTAL,
        fIconType: AtomIconsTypeEnum.FILL,
        fChildren: [
            {
                fIcon: AtomIconsEnum.UPLOAD,
                fIconType: AtomIconsTypeEnum.FILL,
                fLabel: 'Import XML',
                fHasIcon: true,
            },
            {
                fIcon: AtomIconsEnum.DOWNLOAD,
                fIconType: AtomIconsTypeEnum.FILL,
                fLabel: 'Export XML',
                fHasIcon: true,
            },
            {
                fIcon: AtomIconsEnum.ALERT_CIRCLE,
                fIconType: AtomIconsTypeEnum.FILL,
                fLabel: 'Error Handler',
                fHasIcon: true,
                fChildren: [
                    {
                        fIcon: AtomIconsEnum.BELL_ON,
                        fIconType: AtomIconsTypeEnum.FILL,
                        fLabel: 'Error Notification',
                        fHasIcon: true,
                    },
                    {
                        fIcon: AtomIconsEnum.REPEAT,
                        fIconType: AtomIconsTypeEnum.FILL,
                        fLabel: 'Error Retry',
                        fHasIcon: true,
                    },
                    {
                        fIcon: AtomIconsEnum.ACTIVITY,
                        fIconType: AtomIconsTypeEnum.FILL,
                        fLabel: 'Job Trigger',
                        fHasIcon: true,
                    },
                ],
            },
            {
                fIcon: AtomIconsEnum.SHARE,
                fIconType: AtomIconsTypeEnum.FILL,
                fLabel: 'Sub Job',
                fHasIcon: true,
            },
            {
                fIcon: AtomIconsEnum.TRASH_2,
                fIconType: AtomIconsTypeEnum.FILL,
                fLabel: 'Delete',
                fHasIcon: true,
            },
        ],
    },
];

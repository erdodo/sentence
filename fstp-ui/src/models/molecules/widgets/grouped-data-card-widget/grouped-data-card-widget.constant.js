import { AtomProgressBarStatusEnum } from 'fstp-ui/src/models/atoms';
export const DefaultGroupedDataCardWidgetItems = [
    {
        fLabel: 'label',
        fDescription: 'description',
        fHasDescription: true,
        fValue: '428',
        fProgressValue: 30,
        fProgressType: AtomProgressBarStatusEnum.SUCCESS,
    },
    {
        fLabel: 'label2',
        fDescription: 'description2',
        fHasDescription: true,
        fValue: '28',
        fProgressValue: 60,
        fProgressType: AtomProgressBarStatusEnum.DANGER,
    },
    {
        fLabel: 'label3',
        fDescription: 'description3',
        fHasDescription: true,
        fValue: '500',
        fProgressValue: 100,
        fProgressType: AtomProgressBarStatusEnum.INFO,
    },
];

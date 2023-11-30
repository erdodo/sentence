import { AtomIconsNodeEnum } from 'fstp-ui/src/models/atoms';
import { MoleculeTimelineStatusEnum, } from 'fstp-ui/src/models/molecules';
export const DefaultMoleculeTimeline = [
    {
        fStatus: MoleculeTimelineStatusEnum.SUCCESS,
        fTitle: 'Start Flow',
        fDate: '2021-01-01 00:00:00',
        fContent: 'The flow was successfully started. You can follow the running nodes as run time.',
        fAlertParagraph: 'Node completed successfully.',
        fIcon: AtomIconsNodeEnum.AI,
    },
    {
        fStatus: MoleculeTimelineStatusEnum.FAILURE,
        fTitle: 'Queue Node',
        fDate: '2021-01-01 00:00:00',
        fContent: 'The message you entered has been forwarded to the queue. This process took 2 minutes and 8 seconds.',
        fAlertParagraph: 'Node failed completion.',
        fIcon: AtomIconsNodeEnum.BATCH,
        fButtonIsShow: true,
        fButtonLabel: 'View Message',
        fData: {
            message: 'This is a message',
        },
    },
    {
        fStatus: MoleculeTimelineStatusEnum.RUNNING,
        fTitle: 'File Node',
        fDate: '2021-01-01 00:00:00',
        fContent: 'File transfer to the address you provided is in progress. This process takes an average of 48 seconds.',
        fAlertParagraph: 'Node continues to work.',
        fIcon: AtomIconsNodeEnum.MAIL,
    },
    {
        fStatus: MoleculeTimelineStatusEnum.FAILURE,
        fTitle: 'Terminate Flow',
        fDate: '2021-01-01 00:00:00',
        fContent: 'The flow completed unsuccessfully due to nodes receiving errors. Please try again.',
        fAlertParagraph: 'Node failed completion.',
        fIcon: AtomIconsNodeEnum.QUEUE,
        fButtonIsShow: true,
        fButtonLabel: 'View Message',
        fData: {
            message: 'This is a message',
        },
    },
];

import { AtomIconsNodeEnum } from 'fstp-ui/src/models/atoms';
export var MoleculeNodeDropdownStatusEnum;
(function (MoleculeNodeDropdownStatusEnum) {
    MoleculeNodeDropdownStatusEnum["PRIMARY"] = "primary";
    MoleculeNodeDropdownStatusEnum["SECONDARY"] = "secondary";
    MoleculeNodeDropdownStatusEnum["INFO"] = "info";
})(MoleculeNodeDropdownStatusEnum || (MoleculeNodeDropdownStatusEnum = {}));
export const MoleculeNodeDropdownItemsDefault = [
    {
        fTitle: 'Gateways',
        fChildren: [
            {
                fTitle: 'Inclusive',
                fStatus: MoleculeNodeDropdownStatusEnum.PRIMARY,
                fIcon: AtomIconsNodeEnum.GATEWAY_INCLUSIVE,
            },
        ],
    },
    {
        fTitle: 'Nodes',
        fChildren: [
            {
                fTitle: 'SQL',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.SQL,
            },
            {
                fTitle: 'E-mail',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.MAIL,
            },
            {
                fTitle: 'File',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.FILE,
            },
            {
                fTitle: 'Jar',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.JAR,
            },
            {
                fTitle: 'SH',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.SH,
            },
            {
                fTitle: 'Batch',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.BATCH,
            },
            {
                fTitle: 'Rest API',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.REST,
            },
            {
                fTitle: 'Soap API',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.SOAP,
            },
            {
                fTitle: 'AI',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.AI,
            },
            {
                fTitle: 'Queue',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.QUEUE,
            },
            {
                fTitle: 'Web Hooks',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.WEBHOOK,
            },
            {
                fTitle: 'Script',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.SCRIPT,
            },
            {
                fTitle: 'Listener',
                fStatus: MoleculeNodeDropdownStatusEnum.SECONDARY,
                fIcon: AtomIconsNodeEnum.LISTENER,
            },
        ],
    },
];

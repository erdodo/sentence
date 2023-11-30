//soldaki palet menüsü
export const MoleculeDragDropItems = [
    {
        type: 'textbox',
        fLabel: 'Text input',
        fName: 'textbox',
        fValue: 'Text input',
    },
    {
        type: 'button',
        fLabel: 'Button',
        fName: 'button',
        fValue: 'Button',
    },
];
// div elementi için özellik listesi
export const MoleculeDragDropDivProps = [
    {
        type: 'number',
        fLabel: 'Sort',
        fName: 'sort',
    },
    {
        type: 'color-picker',
        fLabel: 'Background Color',
        fName: 'fBackgroundColor',
    },
    {
        type: 'color-picker',
        fLabel: 'Text Color',
        fName: 'fColor',
    },
    {
        type: 'textbox',
        fLabel: 'Font Size',
        fName: 'fFontSize',
    },
    {
        type: 'select',
        fLabel: 'Text Align',
        fName: 'fTextAlign',
        fItems: [
            {
                fValue: 'left',
                fLabel: 'Left',
            },
            {
                fValue: 'center',
                fLabel: 'Center',
            },
            {
                fValue: 'right',
                fLabel: 'Right',
            },
        ],
    },
];
//tüm elemanların özellik listesi
export const MoleculeDragDropAllProps = {
    textbox: [
        {
            type: 'textbox',
            fLabel: 'Label',
            fName: 'fLabel',
        },
        {
            type: 'textbox',
            fLabel: 'Name',
            fName: 'fName',
        },
        {
            type: 'textbox',
            fLabel: 'Value',
            fName: 'defaultValue',
        },
        {
            type: 'select',
            fLabel: 'Status',
            fName: 'fStatus',
            fItems: [
                {
                    fValue: 'flw-textbox--default',
                    fLabel: 'Default',
                },
                {
                    fValue: 'flw-textbox--success',
                    fLabel: 'Success',
                },
                {
                    fValue: 'flw-textbox--error',
                    fLabel: 'Error',
                },
            ],
        },
    ],
    button: [
        {
            type: 'textbox',
            fLabel: 'Label',
            fName: 'fLabel',
        },
        {
            type: 'select',
            fLabel: 'Status',
            fName: 'fStatus',
            fItems: [
                {
                    fValue: 'flw-button--primary',
                    fLabel: 'Primary',
                },
                {
                    fValue: 'flw-button--secondary',
                    fLabel: 'Secondary',
                },
            ],
        },
    ],
    panel: [
        {
            type: 'textbox',
            fLabel: 'Panel',
            fName: 'fLabel',
        },
    ],
};

import { SelectionTypeEnum } from './table.model';
import { AtomIconsEnum, AtomIconsTypeEnum, AtomButtonShowTypeEnum, AtomButtonSizeEnum, AtomButtonStatusEnum, AtomButtonTypeEnum, } from 'fstp-ui/src/models/atoms';
export const TableDefault = {
    fClass: '',
    fThClass: '',
    fTdClass: '',
    fSelectionType: SelectionTypeEnum.DEFAULT,
    fSort: '',
    fActionButtonHeading: 'Actions',
    fEditButton: {
        showEditButton: true,
        fIcon: AtomIconsEnum.EDIT_1,
        fType: AtomButtonTypeEnum.BUTTON,
        fShowType: AtomButtonShowTypeEnum.GHOST,
        fHasIcon: true,
        fStatus: AtomButtonStatusEnum.NEUTRAL,
        fIconType: AtomIconsTypeEnum.FILL,
    },
    fDelButton: {
        showDelButton: true,
        fIcon: AtomIconsEnum.TRASH_1,
        fType: AtomButtonTypeEnum.BUTTON,
        fShowType: AtomButtonShowTypeEnum.GHOST,
        fHasIcon: true,
        fStatus: AtomButtonStatusEnum.NEUTRAL,
        fIconType: AtomIconsTypeEnum.FILL,
    },
    fHeadingButtons: {
        filterButton: {
            fSize: AtomButtonSizeEnum.MEDIUM,
            fStatus: AtomButtonStatusEnum.SECONDARY,
            fType: AtomButtonTypeEnum.BUTTON,
            fShowType: AtomButtonShowTypeEnum.GHOST,
            fHasLabel: true,
            fLabel: 'Filter',
            fHasIcon: true,
            fIcon: AtomIconsEnum.FUNNEL,
            fIconType: AtomIconsTypeEnum.FILL,
            fIsShow: true,
        },
        addButton: {
            fSize: AtomButtonSizeEnum.MEDIUM,
            fStatus: AtomButtonStatusEnum.PRIMARY,
            fType: AtomButtonTypeEnum.BUTTON,
            fShowType: AtomButtonShowTypeEnum.GHOST,
            fHasLabel: true,
            fLabel: 'Add',
            fHasIcon: true,
            fIcon: AtomIconsEnum.PLUS_DEFAULT,
            fIconType: AtomIconsTypeEnum.FILL,
            fIsShow: true,
        },
    },
    fPaginate: {
        range: 5,
        number: 1,
        totalPage: 10,
    },
    fHeadings: [
        {
            fField: 'head1',
            fClass: '',
            fContent: 'Title',
        },
        {
            fField: 'head2',
            fClass: '',
            fContent: 'Title',
        },
        {
            fField: 'head3',
            fClass: '',
            fContent: 'Title',
        },
        {
            fField: 'head4',
            fClass: '',
            fContent: 'Title',
        },
        {
            fField: 'head5',
            fClass: '',
            fContent: 'Title',
        },
        {
            fField: 'head6',
            fClass: '',
            fContent: 'Title',
        },
    ],
    fRows: [
        {
            fItem: { city: 'İstanbul', id: 1 },
            fClass: '',
            fColumns: [
                {
                    fClass: '',
                    fContent: `
<div class="flw-flex flw-items-center">
        <atom-icon fName="person-default" ></atom-icon>
        <div class="flw-flex flw-flex-col">
          <atom-paragraph fText="Highlight Cell" fSize="flw-text-body-large" ></atom-paragraph>
          <span>With Image</span>
  </div>
</div> 
`,
                },
                {
                    fClass: '',
                    fContent: 'Body Cell',
                },
                { fClass: '', fContent: 'data 3 - 1' },
                {
                    fClass: '',
                    fContent: 'Body Cell',
                },
                {
                    fClass: '',
                    fContent: 'Body Cell',
                },
                {
                    fClass: '',
                    fContent: 'Body Cell',
                },
            ],
        },
        {
            fItem: { city: 'Denizli', id: 2 },
            fClass: '',
            fColumns: [
                {
                    fClass: '',
                    fContent: `
<div class="flw-flex flw-items-center">
        <atom-icon fName="person-default" ></atom-icon>
        <div class="flw-flex flw-flex-col">
          <atom-paragraph fText="Highlight Cell" fSize="flw-text-body-large" ></atom-paragraph>
          <span>With Image</span>
  </div>
</div> 
`,
                },
                {
                    fClass: '',
                    fContent: 'Body Cell',
                },
                {
                    fClass: '',
                    fContent: 'Body Cell',
                },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
            ],
        },
        {
            fItem: { city: 'Bursa', id: 3 },
            fClass: '',
            fColumns: [
                {
                    fClass: '',
                    fContent: `
<div class="flw-flex flw-items-center">
        <atom-icon fName="person-default" ></atom-icon>
        <div class="flw-flex flw-flex-col">
          <atom-paragraph fText="Highlight Cell" fSize="flw-text-body-large" ></atom-paragraph>
          <span>With Image</span>
  </div>
</div> 
`,
                },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
            ],
        },
        {
            fItem: { city: 'İzmir', id: 4 },
            fClass: '',
            fColumns: [
                {
                    fClass: '',
                    fContent: `
<div class="flw-flex flw-items-center">
        <atom-icon fName="person-default" ></atom-icon>
        <div class="flw-flex flw-flex-col">
          <atom-paragraph fText="Highlight Cell" fSize="flw-text-body-large" ></atom-paragraph>
          <span>With Image</span>
  </div>
</div> 
`,
                },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
                { fClass: '', fContent: 'Body Cell' },
            ],
        },
    ],
};
export const fCountDefault = '18 items';
export const fTitleDefault = 'Table Title';
export const fSubTitleDefault = 'Table Sub Title';
export const tableHeadIconSize = 16;

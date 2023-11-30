import { MoleculeToastPositionEnum, MoleculeToastTypeEnum, } from 'fstp-ui/src/models/molecules';
import { generateUUID } from 'fstp-ui/src/utils';
export function toast(properties) {
    const toast = document.createElement('molecule-toast');
    toast.fDescription = properties.fDescription ?? '';
    toast.fTitle = properties.fTitle ?? '';
    toast.fHasTitle = properties.fHasTitle ?? false;
    toast.fType = properties.fType ?? MoleculeToastTypeEnum.INFO;
    toast.fAutoClose = properties.fAutoClose ?? 3000;
    toast.fHasCloseButton = properties.fHasCloseButton ?? false;
    toast.fClass = properties.fClass ?? '';
    toast.fId = properties.fId ?? generateUUID();
    toast.fPosition = properties.fPosition ?? MoleculeToastPositionEnum.TOP_RIGHT;
    toast.fTrigger = 1;
    document.body.appendChild(toast);
}

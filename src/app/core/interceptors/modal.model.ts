export enum ModalAction {
  CANCEL = 'cancel',
  CONFIRM = 'confirm',
  SUBMIT = 'submit',
  ACTIVATE = 'activate',
  DEACTIVATE = 'deactivate'
}

export interface ModalButton {
  label: string;
  action: ModalAction;
  cssClass: string;
}

export interface ModalConfig {
  title: string;
  message: string;
  buttons: ModalButton[];
}
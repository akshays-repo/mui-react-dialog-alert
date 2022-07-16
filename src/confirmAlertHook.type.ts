export type State = {
  show: boolean;
  buttonCancelLabel: string;
  buttonConfirmLabel: string;
  title: string;
  subtitle?: string;
  handleClose: () => void;
  onConfirmation: () => void;
  onCancel: () => void;
  showConfirmarion: (rops: THandleOpen) => void;
};

export type THandleOpen = {
  buttonCancelLabel: string;
  buttonConfirmLabel: string;
  title: string;
  onConfirmation: () => void;
  onCancel?: () => void;
  subtitle?: string;
};

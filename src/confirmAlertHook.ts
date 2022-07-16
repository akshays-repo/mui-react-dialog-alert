import create from "zustand";
export type State = {
  show: boolean;
  cancelLabel: string;
  confirmLabel: string;
  title: string;
  subtitle?: string;
  handleClose: () => void;
  onConfirmation: () => void;
  onCancel: () => void;
  showConfirmarion: (props: THandleOpen) => void;
};

export type THandleOpen = {
  cancelLabel: string;
  confirmLabel: string;
  title: string;
  onConfirmation: () => void;
  onCancel?: () => void;
  subtitle: string;
};

export const useConfirmationStore = create<State>()((set) => ({
  show: false,
  confirmLabel: "Agree",
  cancelLabel: "Disagree",
  title: "Use Google's location service ?",
  subtitle:
    "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
  onCancel: () => null,
  onConfirmation: () => null,
  handleClose: () =>
    set(() => ({
      show: false,
      confirmLabel: "Agree",
      cancelLabel: "Disagree",
      title: "Use Google's location service ?",
      subtitle:
        "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
      onCancel: () => null,
      onConfirmation: () => null,
    })),
  showConfirmarion: (props: THandleOpen) =>
    set(() => ({
      show: true,
      ...props,
    })),
}));

export const showAlertConfirmarion =
  useConfirmationStore.getState().showConfirmarion;

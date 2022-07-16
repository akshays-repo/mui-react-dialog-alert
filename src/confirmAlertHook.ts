import create from "zustand";
import { State, THandleOpen } from "./confirmAlertHook.type";

export const useConfirmationStore = create<State>()((set) => ({
  show: false,
  buttonConfirmLabel: "Yes",
  buttonCancelLabel: "No",
  title: "",
  subtitle: "",
  onCancel: () => null,
  onConfirmation: () => null,
  handleClose: () =>
    set(() => ({
      show: false,
      buttonConfirmLabel: "Yes",
      buttonCancelLabel: "No",
      title: "",
      subtitle: "",
      onCancel: () => null,
      onConfirmation: () => null,
    })),
  showConfirmarion: (props: THandleOpen) =>
    set(() => ({
      show: true,
      onConfirmation: props.onConfirmation,
      onCancel: props.onCancel,
      title: props.title,
      subtitle: props.subtitle,
    })),
}));

export const showAlertConfirmarion =
  useConfirmationStore.getState().showConfirmarion;

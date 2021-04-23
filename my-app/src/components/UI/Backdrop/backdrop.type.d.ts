import { IUiAction } from "../../../store/ui/ui.action";
export interface IBackdropProps {
  variant: "light" | "dark";
  onClick?: IBackdropProps.onClick;
}

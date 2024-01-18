export interface IProps {
  name: string;
  renderOptions: { id: number; value: string }[];
  control: any;
  onInputValueChange: (value: string) => void;
  selectOption: (value: string) => void;
  rules?: any;
  defaultText?: string;
  disabled?: boolean;
}

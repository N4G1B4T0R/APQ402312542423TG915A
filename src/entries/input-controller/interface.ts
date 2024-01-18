export interface IProps {
  name: string;
  control: any;
  rules?: any;
  defaultText?: string;
  placeholder?: string;
  type?: string;
  label?: string;
  fullWidth?: boolean;
  hiddenLabel?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'standard' | 'outlined';
  onKeyDown?: (e: any) => void;
  onInputChange?: (e: any) => void;
}

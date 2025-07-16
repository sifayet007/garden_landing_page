export interface IButton {
    label?: string;
    onclick?: () => void;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    children?: React.ReactNode;
    iconPosition?: "left" | "right";

}
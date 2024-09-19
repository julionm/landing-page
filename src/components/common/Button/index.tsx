import { ReactNode, useMemo } from "react";
import './styles.css';

export enum ButtonType {
    PRIMARY = 'primary',
    OUTLINED = 'outlined'
};

type ButtonProps = {
    type?: ButtonType,
    customClass?: string,
    children: ReactNode
};

export function Button ({
    type = ButtonType.OUTLINED,
    customClass,
    children,
    ...rest
}: ButtonProps) {

    const className = useMemo(() => {
        return 'button--' + type;
    }, [type]);

    return (
        <button
            className={`button ${className} ${customClass}`}
            {...rest}>
            {children}
        </button>
    )

}
import { HTMLAttributes, ReactNode, useMemo } from "react";
import './styles.css';

export enum ButtonStyle {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    TEXT = 'text'
};

interface ButtonProps extends HTMLAttributes<HTMLElement> {
    btnStyle?: ButtonStyle,
    customClass?: string,
    href?: string,
    children: ReactNode
};

export function Button ({
    btnStyle = ButtonStyle.OUTLINED,
    customClass,
    children,
    href,
    ...rest
}: ButtonProps) {

    const className = useMemo(() => {
        return 'button--' + btnStyle;
    }, [btnStyle]);

    return (
        <>
            {
                href ? (
                    <a
                        href={href}
                        target="_blank"
                        className={`button ${className} ${customClass || ''}`}
                        {...rest}>
                        {children}
                    </a>
                ) : (
                    <button
                        type="button"
                        className={`button ${className} ${customClass || ''}`}
                        {...rest}>
                        {children}
                    </button>
                )
            }
        </>
    );

}
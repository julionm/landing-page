import { ReactNode, useMemo } from "react";
import './styles.css';

export enum ButtonType {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
};

type ButtonProps = {
    type?: ButtonType,
    customClass?: string,
    isLink?: boolean,
    children: ReactNode
};

/**
 * TODO: check with Morais if there's any way to do it better 
 */

export function Button ({
    type = ButtonType.OUTLINED,
    customClass,
    isLink = false,
    children,
    ...rest
}: ButtonProps) {

    const className = useMemo(() => {
        return 'button--' + type;
    }, [type]);

    return (
        <>
            {
                isLink ? (
                    <a
                        className={`button ${className} ${customClass}`}
                        {...rest}>
                        {children}
                    </a>            
                ) : (
                    <button
                        className={`button ${className} ${customClass}`}
                        {...rest}>
                        {children}
                    </button>
                )
            }
        </>
    )

}
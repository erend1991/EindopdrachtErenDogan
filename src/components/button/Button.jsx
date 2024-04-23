import './Button.css';

function Button({ children, type, clickHandler, disabled = false, variant}) {
    return (
        <button
            type={type}
            className={variant === 'primary' ? 'button button-primary' : 'button button-invisible'}
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
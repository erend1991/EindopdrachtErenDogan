import './TextArea.css';


function TextArea({ label, name, value, onChange, placeholder, rows, cols, disabled,minLength, maxLength }) {
    return (
        <div className="text-area-container">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                disabled={disabled}
                minLength={minLength}
                maxLength={maxLength}
                className="text-area"
            ></textarea>
        </div>
    );
}

export default TextArea;


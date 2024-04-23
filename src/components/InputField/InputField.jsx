
function InputField ({type, value, placeholder, onChange, className})
{

    return (
        <div>
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={className}
            >
        </input>
        </div>
    )
}

export default InputField


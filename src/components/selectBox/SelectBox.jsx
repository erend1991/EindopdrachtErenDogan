
function SelectBox ({ label, name, options, register })  {
    return (
        <label>
            {label}:
            <select {...register(name)}>
                <option value="">-- Selecteer een categorie --</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default SelectBox;

export const InputField = ({ label, defaultValue, register, errors, name, validation, handleValue }) => (
  <div>
    <label>{label}</label>
    <input defaultValue={defaultValue} {...register(name, {
      ...validation,
      onChange: (e) => handleValue(e.target.value)
    })} />
    {errors[name] && <span>{errors[name].message}</span>}
  </div>
);

export const SelectField = ({ label, options, defaultValue, register, errors, name, validation, handleValue }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <select value={defaultValue} {...register(name, {
      ...validation,
      onChange: (e) => handleValue(e.target.value)
    })}>
      <option value="">Selecciona una opción</option>
      {options.map((option, index) => (
        <option key={index} value={option} >
          {option}
        </option>
      ))}
    </select>
    {errors[name] && <span>{errors[name].message}</span>}
  </div>
);
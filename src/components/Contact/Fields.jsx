export const InputField = ({ label, defaultValue, register, errors, name, validation }) => (
  <div>
    <label>{label}</label>
    <input defaultValue={defaultValue} {...register(name, validation)} />
    {errors[name] && <span>{errors[name].message}</span>}
  </div>
);

export const SelectField = ({ label, options, defaultValue, register, errors, name, validation }) => (
  <div>
    <label>{label}</label>
    <select value={defaultValue} {...register(name, validation)}>
      <option value="">Selecciona una opción</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && <span>{errors[name].message}</span>}
  </div>
);
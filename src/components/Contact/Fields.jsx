export const InputField = ({ label, defaultValue, register, name }) => (
  <div>
    <label>{label}</label>
    <input defaultValue={defaultValue} {...register(name)} />
  </div>
);

export const SelectField = ({ label, options, defaultValue, register, name }) => (
  <div>
    <label>{label}</label>
    <select value={defaultValue} {...register(name)}>
      <option value="">Selecciona una opción</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
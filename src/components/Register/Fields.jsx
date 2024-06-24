export const InputField = ({
  className = '',
  label,
  defaultValue,
  register,
  errors,
  name,
  validation,
  handleValue,
}) => (
  <div className={`w-full md:w-[49%] ${className}`}>
    <label className="text-white" htmlFor={name}>{label}</label>
    <input
      id={name}
      className="w-full my-1 border border-gray-200 rounded-md py-2 px-3 box-border"
      style={{'backgroundColor': 'rgba(255, 255, 255, 0.8)'}} 
      autoComplete='given-name'
      defaultValue={defaultValue}
      {...register(name, {
        ...validation,
        onChange: (e) => handleValue(e.target.value),
      })}
    />
    {errors[name] && <span className="text-error text-base font-bold mb-1">{errors[name].message}</span>}
  </div>
)

export const SelectField = ({
  className = '',
  label,
  placeholder,
  options,
  defaultValue,
  register,
  errors,
  name,
  validation,
  handleValue,
}) => (
  <div className={`w-full md:w-[49%] ${className}`}>
    <label className="text-white" htmlFor={name}>{label}</label>
    <select
      id={name}
      className="w-full my-1 border border-gray-200 rounded-md py-2 px-3 box-border"
      style={{'backgroundColor': 'rgba(255, 255, 255, 0.8)'}} 
      autoComplete='given-option'
      value={defaultValue}
      {...register(name, {
        ...validation,
        onChange: (e) => handleValue(e.target.value),
      })}
    >
      <option value='' disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {errors[name] && <span className="text-error text-base font-bold mb-1">{errors[name].message}</span>}
  </div>
)

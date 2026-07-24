function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={name}
        className="text-gray-700 font-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          px-5
          py-4
          rounded-2xl
          border
          border-pink-200
          bg-white/80
          backdrop-blur-sm
          text-gray-700
          placeholder-gray-400
          outline-none
          transition-all
          duration-300
          focus:border-pink-400
          focus:ring-4
          focus:ring-pink-200
          hover:border-pink-300
        "
      />
    </div>
  );
}

export default InputField;

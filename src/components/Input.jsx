export default function Input({
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  required = true,
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    />
  )
}

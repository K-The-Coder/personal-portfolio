export default function TextArea({
  name = "",
  id = "",
  placeholder = "",
  required = true,
}) {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      required={required}
    ></textarea>
  )
}

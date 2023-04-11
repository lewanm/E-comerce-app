export function Input({
  value,
  type = "text",
  name,
  func = () => {},
  className = "input-container",
  labelText,
}) {
  return (
    <div className={className}>
      <label htmlFor={name}>{labelText}</label>
      {type === "text" ? (
        <input type={type} name={name} onChange={func} value={value}></input>
      ) : (
        <input type={type} name={name} onChange={func} checked={value}></input>
      )}
    </div>
  );
}

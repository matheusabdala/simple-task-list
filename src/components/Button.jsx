export function Button(props) {
  return (
    <button
      {...props}
      className="bg-purple-600 text-white px-4 py-2 rounded-md cursor-pointer"
    >
      {props.children}
    </button>
  );
}

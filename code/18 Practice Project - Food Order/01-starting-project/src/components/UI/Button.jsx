export default function Button({ children, textOnly, className, ...props }) {
  const cssClasses = textOnly ? `text-button ${className}` : 'button';
  // cssClasses += '' + className (an alt) 

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
}
export default function Button({ children, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center gap-2 py-[13px] px-6 text-[14px] font-semibold rounded-lg transition-colors";
  const styles = {
    primary: "bg-teal text-white hover:bg-teal-dark",
    ghost: "bg-white text-ink border border-line hover:border-teal",
    pill: "bg-teal text-white rounded-pill px-6 py-3 hover:bg-teal-dark",
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

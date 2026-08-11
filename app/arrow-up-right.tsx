type ArrowUpRightProps = {
  className?: string;
};

export function ArrowUpRight({ className = "arrow-up-right" }: ArrowUpRightProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

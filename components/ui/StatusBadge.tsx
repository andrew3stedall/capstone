export function StatusBadge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "warning" | "success" | "info" }) {
  return <span className={`status-badge ${tone}`}>{children}</span>;
}

export function ProgressBar({ value, label }: { value: number; label?: string }) {
  const safeValue = Math.min(100, Math.max(0, value));
  return (
    <div className="progress-control">
      {label ? <span className="sr-only">{label}: {safeValue}%</span> : null}
      <div className="progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={safeValue} aria-label={label}>
        <span style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}

export function SourceNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`source-notice${compact ? " compact" : ""}`} aria-label="Source and currency notice">
      <span className="source-notice-icon" aria-hidden="true">i</span>
      <div>
        <strong>Independent learning content</strong>
        <p>Use current authorised standards, legislation, regulator guidance and your RTO&apos;s approved procedures for exact requirements.</p>
      </div>
    </aside>
  );
}

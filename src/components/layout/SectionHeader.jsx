export default function SectionHeader({ eyebrow, title, action }) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      {eyebrow && (
        <div className="flex items-center gap-4">
          <span className="w-5 h-10 bg-primary rounded-sm" />
          <span className="text-primary font-semibold">{eyebrow}</span>
        </div>
      )}

      {(title || action) && (
        <div className="flex items-end justify-between">
          {title && <h2 className="text-3xl font-semibold text-text-primary">{title}</h2>}
          {action}
        </div>
      )}
    </div>
  );
}


export default function BrandSwatches() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
      {/* neutrals */}
      <Box cls="bg-background text-foreground" name="background" />
      <Box cls="bg-foreground text-background" name="foreground" />

      {/* brand */}
      <Box cls="bg-primary text-primary-foreground" name="primary" />
      <Box cls="bg-accent text-accent-foreground" name="accent" />
      <Box cls="bg-yellow text-foreground" name="yellow" />
      <Box cls="bg-yellow-light text-foreground" name="yellow-light" />
      <Box cls="bg-red text-white" name="red" />
      <Box cls="bg-red-light text-foreground" name="red-light" />

      {/* ui */}
      <Box cls="bg-muted text-muted-foreground" name="muted" />
      <Box cls="bg-card text-card-foreground" name="card" />
      <Box cls="bg-popover text-popover-foreground" name="popover" />
      <Box cls="bg-secondary text-secondary-foreground" name="secondary" />
      <Box cls="bg-gray text-foreground" name="gray" />
      <Box cls="bg-offwhite text-foreground" name="offwhite" />

      {/* borders / rings */}
      <div className="p-4 border border-border rounded-lg">
        <button className="bg-primary text-primary-foreground px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
          border-border / ring-ring
        </button>
      </div>
    </div>
  );
}

function Box({ cls, name }: { cls: string; name: string }) {
  return (
    <div className={`h-20 rounded-md flex items-center justify-center border border-border ${cls}`}>
      <span className="text-sm">{name}</span>
    </div>
  );
}

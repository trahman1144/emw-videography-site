export default function EmwMonogram() {
  return (
    <div className="flex items-center gap-2">
      <span className="emw" aria-label="EMW logo">
        <span>E</span>
        <span>M</span>
        <span>W</span>
      </span>
      <div className="w-2 h-2 bg-emw-deep-green rounded-full animate-pulse" />
    </div>
  )
}

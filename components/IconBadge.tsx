import { Icon, type IconName } from './Icon'

export default function IconBadge({ name }: { name: IconName }) {
  return (
    <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/15 bg-[rgba(18,63,47,0.15)] text-white/80 group-hover:text-[#0D4D37] transition-colors">
      <Icon name={name} size={22} />
    </div>
  )
}


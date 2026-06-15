/** Ícone de mãos em oração (arte colorida em public/pray.svg). */
export default function PrayIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <img
      className={className}
      src={`${import.meta.env.BASE_URL}pray.svg`}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      style={{ display: 'block' }}
    />
  )
}

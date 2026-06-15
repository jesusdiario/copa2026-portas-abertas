/** Ícone de mãos em oração (mãos pressionadas, dedos para cima). */
export default function PrayIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* mão esquerda (topo em ponta, borda interna vertical = vinco central) */}
      <path d="M11.8 3.4 8.5 12.4c-.5 1.3.2 2.7 1.5 3.1l1.8.5Z" />
      {/* mão direita */}
      <path d="M12.2 3.4 15.5 12.4c.5 1.3-.2 2.7-1.5 3.1l-1.8.5Z" />
      {/* punhos / mangas */}
      <path d="M9.5 15.4 8.3 19c-.2.6.2 1.2.8 1.2h5.8c.6 0 1-.6.8-1.2l-1.2-3.6c-.7.4-1.5.6-2.5.6s-1.8-.2-2.5-.6Z" />
    </svg>
  )
}

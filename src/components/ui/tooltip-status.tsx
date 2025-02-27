interface TooltipStatusProps {
    icon: React.ReactNode | string
    text: string
}
export default function TooltipStatus({ icon, text }: TooltipStatusProps) {
    return (
        <div className="group relative text-xs">
            {icon}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-44 border text-xs transition-all scale-0 rounded bg-background  text-slate-300 group-hover:scale-100 text-center p-1">
                {text}
            </span>
        </div>
    )
}

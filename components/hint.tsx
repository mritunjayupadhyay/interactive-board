import {
    Tooltip,
    TooltipTrigger,
    TooltipProvider,
    TooltipContent,
} from '@/components/ui/tooltip'

interface HintProps {
    children: React.ReactNode
    label: string
    side: 'top' | 'right' | 'bottom' | 'left'
    align: 'start' | 'center' | 'end'
    sideOffset: number
    alignOffset: number
}
const Hint = ({
    children,
    label,
    side = 'top',
    align = 'center',
    sideOffset = 0,
    alignOffset = 0,
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                    className='bg-gray-800 text-white p-2 rounded-lg shadow-lg'
                >
                    <p className='font-semibold capitalize'>
                    {label}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default Hint

'use client'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Hint from '@/components/hint'

interface ItemProps {
    id: string
    name: string
    imageUrl: string
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
    const { organization } = useOrganization()
    const { setActive } = useOrganizationList()
    const isActive = organization?.id === id
    const onClick = () => {
        if (!setActive) {
            return
        }
        setActive({ organization: id })
    }
    return (
        <li className="aspect-square relative mb-2">
            <Hint
                label="Create a new organization"
                side="right"
                align="center"
                sideOffset={5}
                alignOffset={5}
            >
                <Image
                    src={imageUrl}
                    alt={name}
                    width={30}
                    height={30}
                    onClick={onClick}
                    className={cn(
                        'cursor-pointer rounded-md opacity-75 hover:opacity-100 transition',
                        isActive && 'opacity-100'
                    )}
                />
            </Hint>
        </li>
    )
}

export default Item

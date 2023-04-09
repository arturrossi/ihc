import { HomeIcon, MagnifyingGlassIcon, ClipboardDocumentListIcon, UserIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

const items = [
    {
        name: 'Início',
        href: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Busca',
        href: 'asklda',
        icon: <MagnifyingGlassIcon />
    },
    {
        name: 'Ingressos',
        href: '/tickets',
        icon: <ClipboardDocumentListIcon />
    },
    {
        name: 'Perfil',
        href: 'asklda',
        icon: <UserIcon />
    }
]

export default function Navbar() {
    const router = useRouter()

    return (
        <div className='xl:hidden fixed bottom-0 bg-white w-full border border-gray-200'>
            <div className='p-6 w-full flex space-x-2'>
                {items.map(item => (
                    <div key={item.name} onClick={() => router.push(item.href)} className='text-xs w-full flex flex-col items-center'>
                        <div className='h-6 w-6 text-purple-900'>
                            {item.icon}
                        </div>
                        <label className="text-gray-800">
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
import { useRouter } from "next/router"
import Head from 'next/head'
import SearchInput from '@/components/SearchInput'
import { sellers } from '@/data/sellers'
import Navbar from '@/components/Navbar'
import AvailableTickets from '@/components/AvailableTickets'
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import BackHeader from "@/components/BackHeader"

export default function EventPage() {
    const router = useRouter()
    const { id } = router.query

    const seller = sellers.find(seller => seller.id.toString() === id)

    if (!seller) {
        return <>Vendedor não encontrado</>
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="pb-16 h-full">
                    <BackHeader />
                    <div className='bg-white p-8 xl:px-24 flex flex-col space-y-6 h-full'>
                        <div className="text-gray-800 flex flex-col space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label className="font-semibold text-sm text-gray-500">Perfil do vendedor</label>
                                <div className="flex items-center">
                                    <label className="font-bold text-2xl text-purple-900">{seller.name}</label>
                                    {seller.verified &&
                                        <CheckBadgeIcon className="w-6 h-6 text-purple-900 ml-2" />
                                    }
                                </div>
                                {seller.verified &&
                                    <label className="text-xs text-purple-900 font-semibold mb-2">Perfil verificado</label>
                                }
                                <img src={seller.photo} className='rounded-full w-36 h-36'></img>
                            </div>
                            {seller.phone &&
                                <div>
                                    <label className="text-gray-800 font-semibold">Telefone</label>
                                    <p className="text-gray-500 mt-1">{seller.phone}</p>
                                </div>
                            }
                            <div>
                                <label className="text-gray-800 font-semibold">Biografia</label>
                                <p className="text-gray-500 mt-1">{seller.bio}</p>
                            </div>
                            <div>
                                <label className="text-gray-800 font-semibold">Última venda realizada</label>
                                <p className="text-gray-500 mt-1">{seller.lastSell}</p>
                            </div>
                            <div className="mt-4">
                                <label className="text-gray-800 font-semibold">Avaliações</label>
                                <div className="ml-auto flex items-center">
                                    <label>Média</label>
                                    <StarIcon className="ml-2 w-6 h-6 text-yellow-500 mr-2" />
                                    {seller.reviewStars}
                                </div>
                                {seller.reviews?.map(review => (
                                    <div className="mt-4 bg-gray-100 space-y-3 shadow-sm p-4 rounded-xl border border-gray-100 flex flex-col">
                                        <div className="flex flex-col">
                                            <label className="text-gray-500 text-sm">Avaliador</label>
                                            <label className="text-gray-800 font-medium">{review.name}</label>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-500 text-sm">Nota</label>
                                            <div className="flex items-center">
                                                <StarIcon className="mr-2 w-6 h-6 text-yellow-500" />
                                                <label className="text-gray-800 font-medium">{review.stars}</label>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-gray-500 text-sm">Availação</label>
                                            <label className="text-gray-800">{review.text}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar />
            </main>
        </>
    )
}
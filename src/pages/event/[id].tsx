import { useRouter } from "next/router"
import Head from 'next/head'
import SearchInput from '@/components/SearchInput'
import { popularEvents } from '@/data/events'
import Navbar from '@/components/Navbar'
import AvailableTickets from '@/components/AvailableTickets'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/solid'
import BackHeader from "@/components/BackHeader"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function EventPage() {
    const [showContent, setShowContent] = useState(false);

    const router = useRouter()
    const { id } = router.query

    const event = popularEvents.find(event => event.id.toString() === id)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 6000); // 6 seconds in milliseconds

        // Clean up the timer on component unmount
        return () => {
            clearTimeout(timer);
        };
    }, []);

     if (!event) {
        return <>Evento não encontrado</>
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="pb-16">
                    <BackHeader />
                    <div className='bg-white p-8 xl:px-24 flex flex-col space-y-6'>
                        {!showContent ?
                            <>Carregando...</>
                            :
                            <>
                                <SearchInput />
                                <img
                                    src={event.imageSrc}
                                    alt={event.description ?? ''}
                                    className="rounded-xl w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                                <div className="text-gray-800 flex flex-col space-y-3">
                                    <label className="font-bold text-2xl text-purple-900">{event.name}</label>
                                    <div className="flex items-center">
                                        <CalendarIcon className="w-6 h-6 text-purple-900" />
                                        <p className="ml-3 font-semibold">{event.date}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <ClockIcon className="w-6 h-6 text-purple-900" />
                                        <p className="ml-3 font-semibold">{event.hour}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <MapPinIcon className="w-6 h-6 text-purple-900" />
                                        <p className="ml-3 font-semibold">{event.location}</p>
                                    </div>
                                    <div>
                                        <label className="text-gray-800 font-semibold">Descrição</label>
                                        <p className="text-gray-500 mt-3">{event.description}</p>
                                    </div>
                                </div>
                                <div className="text-gray-800 flex flex-col space-y-3">
                                    <label className="font-bold text-2xl text-gray-900">Ingressos</label>
                                    <AvailableTickets eventId={event.id} />
                                </div>
                            </>
                        }
                    </div>
                </div>
                <Navbar />
            </main>
        </>
    )
}
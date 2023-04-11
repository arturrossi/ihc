import BackHeader from "@/components/BackHeader"
import Navbar from "@/components/Navbar"
import { popularEvents } from "@/data/events"
import { availableTickets } from "@/data/tickets"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function CheckoutPage() {
    const [showContent, setShowContent] = useState(true);

    const router = useRouter()

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowContent(true);
    //     }, 6000); // 6 seconds in milliseconds

    //     // Clean up the timer on component unmount
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);

    if (!router.query.tickets || !router.query.eventId) {
        return (
            <div>Nenhum ingresso escolhido</div>
        )
    }

    const tickets = availableTickets.find(tickets => tickets.eventId === Number(router.query.eventId))

    if (!tickets) {
        return (
            <div>
                Nenhum ticket foi encontrado
            </div>
        )
    }

    const parsedTickets = JSON.parse(router.query.tickets as string)

    const ticketIds = Object.keys(parsedTickets)

    const allTickets = ticketIds.map(ticketId => tickets.tickets.find(ticket => ticket.id === Number(ticketId))!)

    const event = popularEvents.find(event => event.id === Number(router.query.eventId))

    if (!event) {
        return (
            <div>Evento não encontrado</div>
        )
    }

    if (!allTickets.length) {
        return (
            <div>
                Carregando...
            </div>
        )
    }

    const goToFinishCheckoutPage = () => {
        let boughtTickets = JSON.parse(localStorage.getItem('boughtTickets') ?? '[]')

        boughtTickets.push({ tickets: allTickets.map(ticket => ({ ...ticket, quantity: parsedTickets[ticket.id] })), event })

        localStorage.setItem('boughtTickets', JSON.stringify(boughtTickets))

        router.push('/success')
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
                                <label className="font-bold text-2xl text-purple-900">Ingressos escolhidos</label>
                                {allTickets.map(ticket => (
                                    <div key={ticket.id} className="flex flex-col space-y-2 border-separate border-b pb-4">
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-500 font-semibold">Setor</label>
                                            <label className="font-semibold text-gray-800 capitalize">{ticket.sector}</label>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-500 font-semibold">Quantidade</label>
                                            <label className="font-semibold text-gray-800 capitalize">{parsedTickets[ticket.id]}</label>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-500 font-semibold">Preço</label>
                                            <label className="font-semibold text-gray-800 capitalize">R$ {ticket.price}</label>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-500 font-semibold">Vendedor</label>
                                            <label className="font-semibold text-gray-800 capitalize">{ticket.seller.name}</label>
                                        </div>
                                    </div>
                                ))}
                                <label className="font-bold text-2xl text-purple-900">Dados do evento</label>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Evento</label>
                                    <label className="font-semibold text-gray-800 capitalize">{event.name}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Local</label>
                                    <label className="font-semibold text-gray-800 capitalize">{event.location}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Data</label>
                                    <label className="font-semibold text-gray-800 capitalize">{event.date}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Horário</label>
                                    <label className="font-semibold text-gray-800 capitalize">{event.hour}</label>
                                </div>
                                <label className="font-bold text-2xl text-purple-900">Forma de pagamento</label>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Método</label>
                                    <label className="font-semibold text-gray-800 capitalize">{event.name}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Cartão</label>
                                    <label className="font-semibold text-gray-800 capitalize">**** **** **** 4444</label>
                                </div>
                                <label className="text-purple-900">Editar</label>
                                <div onClick={() => goToFinishCheckoutPage()} className="cursor-pointer bg-purple-900 text-white rounded-xl p-4 flex items-center justify-center">
                                    <label className="cursor-pointer">Concluir compra</label>
                                </div>
                            </>
                        }
                    </div>
                    <Navbar />
                </div>
            </main>
        </>
    )
}
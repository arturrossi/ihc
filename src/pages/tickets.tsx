import BackHeader from "@/components/BackHeader"
import Navbar from "@/components/Navbar"
import { popularEvents } from "@/data/events"
import { availableTickets } from "@/data/tickets"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function TicketsPage() {
    const [boughtTickets, setBoughtTickets] = useState([])

    const router = useRouter()

    const goToFinishCheckoutPage = () => {
        let boughtTickets = JSON.parse(localStorage.getItem('boughtTickets') ?? '[]')

        boughtTickets.push({ tickets: router.query.tickets, eventId: router.query.eventId })

        localStorage.setItem('boughtTickets', JSON.stringify(boughtTickets))

        router.push('/success')
    }

    useEffect(() => {
        setBoughtTickets(JSON.parse(localStorage.getItem('boughtTickets') ?? '[]'))
    }, [])

    console.log(boughtTickets)

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
                        <label className="font-bold text-2xl text-purple-900">Ingressos comprados</label>
                        {boughtTickets.map((boughtTicket: any) =>
                            <div className="border-b space-y-4">
                                <label className="font-bold text-2xl text-purple-900">Dados do evento</label>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Evento</label>
                                    <label className="font-semibold text-gray-800 capitalize">{boughtTicket.event.name}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Local</label>
                                    <label className="font-semibold text-gray-800 capitalize">{boughtTicket.event.location}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Data</label>
                                    <label className="font-semibold text-gray-800 capitalize">{boughtTicket.event.date}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Horário</label>
                                    <label className="font-semibold text-gray-800 capitalize">{boughtTicket.event.hour}</label>
                                </div>
                                <label className="font-bold text-2xl text-purple-900">Forma de pagamento</label>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Método</label>
                                    <label className="font-semibold text-gray-800 capitalize">{boughtTicket.event.name}</label>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm text-gray-500 font-semibold">Cartão</label>
                                    <label className="font-semibold text-gray-800 capitalize">**** **** **** 4444</label>
                                </div>
                                <label className="font-bold text-2xl text-purple-900">Ingressos</label>
                                {boughtTicket.tickets.map((ticket: any) => ((
                                    <div className="flex flex-col space-y-2 pb-4">
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-500 font-semibold">Setor</label>
                                            <label className="font-semibold text-gray-800 capitalize">{ticket.sector}</label>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-sm text-gray-500 font-semibold">Quantidade</label>
                                            <label className="font-semibold text-gray-800 capitalize">{ticket.quantity}</label>
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
                                )))}
                            </div>
                        )}
                    </div>
                    <Navbar />
                </div>
            </main>
        </>
    )
}
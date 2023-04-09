import { availableTickets } from "@/data/tickets";
import { StarIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useRouter } from "next/router";
import { useState } from "react";

export default function AvailableTickets({ eventId }: { eventId: number }) {
    const router = useRouter()

    const [quantity, setQuantity] = useState<{ [id: number]: number }>({})

    const eventTickets = availableTickets.find(tickets => tickets.eventId === eventId)?.tickets

    if (!eventTickets) {
        return (
            <div className="text-black">Nenhum ingresso foi encontrado para esse evento</div>
        )
    }

    const groupedData = eventTickets.reduce((grouped: any, obj) => {
        const sector = obj.sector;
        if (!grouped[sector]) {
            grouped[sector] = [];
        }
        grouped[sector].push(obj);
        return grouped;
    }, {});

    const increaseQuantity = (ticketId: number) => {
        setQuantity({ ...quantity, [ticketId]: (quantity[ticketId] ?? 0) + 1 })
    }

    const decreaseQuantity = (ticketId: number) => {
        const quantityToAdd = !quantity[ticketId] ? 0 : quantity[ticketId] - 1

        setQuantity({ ...quantity, [ticketId]: quantityToAdd })
    }

    const getTotalTicketsQuantity = () => {
        return Object.keys(quantity).reduce((sum: number, key: string) => {
            return sum + quantity[Number(key)]
        }, 0)
    }

    const goToBuyPage = () => {
        router.push(`/checkout?tickets=${JSON.stringify(quantity)}&eventId=${eventId}`)
    }

    return (
        <div>
            {Object.keys(groupedData).map(key =>
                <div className="my-4 text-black flex flex-col">
                    <label className="text-gray-500">Setor</label>
                    <label className="capitalize text-black text-lg font-semibold mb-2">{key}</label>
                    <div className="flex flex-col space-y-4">
                        {groupedData[key].map((ticket: any) => (
                            <div className="p-4 border rounded-xl flex flex-col space-y-2">
                                <div>
                                    <div className="flex mb-2">
                                        <label className="mr-auto font-semibold text-gray-400 text-sm">Vendedor</label>
                                        <label className="ml-auto text-purple-900 text-sm">Ver detalhes</label>
                                    </div>
                                    <div className="flex">
                                        <label>{ticket.seller.name}</label>
                                        <div className="ml-auto flex items-center">
                                            <StarIcon className="w-6 h-6 text-yellow-500 mr-2" />
                                            {ticket.seller.reviewStars}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-gray-400 text-sm">Preço</label>
                                    <div className="flex">
                                        <label>R$ {ticket.price}</label>
                                    </div>
                                </div>
                                <div>
                                    <label className="font-semibold text-gray-400 text-sm">Quantidade</label>
                                    <div className="flex justify-around mt-2">
                                        <PlusIcon onClick={() => increaseQuantity(ticket.id)} className="cursor-pointer w-6 h-6" />
                                        {quantity[ticket.id] ?? 0}
                                        <MinusIcon onClick={() => decreaseQuantity(ticket.id)} className="cursor-pointer w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {getTotalTicketsQuantity() > 0 &&
                <div onClick={() => goToBuyPage()} className="cursor-pointer bg-purple-900 text-white rounded-xl p-4 flex items-center justify-center">
                    <label className="cursor-pointer">Comprar {getTotalTicketsQuantity()} ingressos</label>
                </div>
            }
        </div>
    )
}
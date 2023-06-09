import Image from "next/image";

export default function EventList({ events }: { events: any[] }) {
    return (
        <div>
            <div className="max-w-2xl mx-auto px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {events.map((event) => (
                        <a key={event.id} href={'/event/' + event.id} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={event.imageSrc}
                                    alt={event.imageAlt}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{event.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{event.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
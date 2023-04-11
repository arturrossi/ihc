import Head from 'next/head'
import SearchInput from '@/components/SearchInput'
import { eventsNearMe, popularEvents } from '@/data/events'
import EventList from '@/components/EventList'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import BackHeader from '@/components/BackHeader'
import { useState } from 'react'

export default function Home() {
    const [showError, setShowError] = useState(false)

    const router = useRouter()

    const fields = ['name', 'email', 'phone', 'about', 'event', 'price', 'sector', 'file-upload']

    const validateFields = () => {
        if (!!fields.some(field => {
            let input = document.getElementById(field) as HTMLInputElement

            return !input.value
        })) return setShowError(true)

        router.push('/sell/success')

        return setShowError(false)
    }

    const goBack = () => {
        router.back()
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="pb-16">
                <BackHeader />
                <div className='bg-white p-8 xl:px-24 flex flex-col space-y-6'>
                    <form className="space-y-8 divide-y divide-gray-200">
                        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                            <div>
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Perfil</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                        Essas informações serão mostradas publicamente.
                                    </p>
                                </div>
                                <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Nome
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="max-w-lg flex rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    autoComplete="name"
                                                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Telefone
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="max-w-lg flex rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Email
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="max-w-lg flex rounded-md shadow-sm">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="phone"
                                                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Biografia
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                                                defaultValue={''}
                                            />
                                            <p className="mt-2 text-sm text-gray-500">Escreva algumas frases sobre si mesmo.</p>
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                            Foto
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="flex items-center">
                                                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                    </svg>
                                                </span>
                                                <button
                                                    type="button"
                                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                >
                                                    Mudar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                                <div>
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Ingresso</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Informe mais detalhes sobre o ingresso</p>
                                </div>
                                <div className="space-y-6 sm:space-y-5">
                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="event" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Evento
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <input
                                                type="text"
                                                name="event"
                                                id="event"
                                                autoComplete="given-name"
                                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Preço
                                        </label>
                                        <div className="flex mt-1 sm:mt-0 sm:col-span-2">
                                            <input
                                                type="text"
                                                name="price"
                                                id="price"
                                                autoComplete="family-name"
                                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="sector" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Setor do ingresso
                                        </label>
                                        <div className="flex mt-1 sm:mt-0 sm:col-span-2">
                                            <input
                                                type="text"
                                                name="sector"
                                                id="sector"
                                                autoComplete="family-name"
                                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                        <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                            Comprovantes de compra
                                        </label>
                                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                                            <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                        >
                                                            <span>Carregue um documento</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF de até 10MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-5">
                            {showError && <p className='mb-4 text-red-500'>Todos os campos são obrigatórios!</p>}
                            <div className="flex justify-end">
                                <button
                                    onClick={goBack}
                                    type="button"
                                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={validateFields}
                                    type="button"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import SearchInput from '@/components/SearchInput'
import { eventsNearMe, popularEvents } from '@/data/events'
import EventList from '@/components/EventList'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const goToSellTicket = () => {
    router.push('/sell')
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-white p-8 xl:px-24 flex flex-col space-y-6'>
          <div className='flex items-center'>
            <h3 className='text-3xl font-bold text-violet-900'>Bem-vindo!</h3>
            <div onClick={() => goToSellTicket()} className="ml-auto cursor-pointer bg-purple-900 text-white rounded-xl p-4 flex items-center justify-center">
              <label className="cursor-pointer">Vender ingresso</label>
            </div>
          </div>
          <SearchInput />
          <div>
            <h4 className='font-bold text-gray-800 mb-8'>Eventos populares</h4>
            <EventList events={popularEvents} />
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-8'>Eventos por perto</h4>
            <EventList events={eventsNearMe} />
          </div>
        </div>
        <Navbar />
      </main>
    </>
  )
}

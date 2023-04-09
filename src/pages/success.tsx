import BackHeader from "@/components/BackHeader"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function SuccessPage() {
    const [showContent, setShowContent] = useState(false);

    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 10000); // 6 seconds in milliseconds

        // Clean up the timer on component unmount
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen">
                <div className="pb-16 h-full">
                    <BackHeader />
                    <div className='bg-white h-full p-8 xl:px-24 flex flex-col space-y-6'>
                        {!showContent ?
                            <>
                                Concluindo compra...
                            </>
                            :
                            <>
                                <label className="font-bold text-2xl text-purple-900">Parabéns!</label>
                                <label className="font-bold text-2xl text-purple-900">Sua compra foi realizada com sucesso</label>
                                <div onClick={() => router.push('/tickets')} className="cursor-pointer bg-purple-900 text-white rounded-xl p-4 flex items-center justify-center">
                                    <label className="cursor-pointer">Visualizar meus ingressos</label>
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
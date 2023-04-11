import BackHeader from "@/components/BackHeader"
import Navbar from "@/components/Navbar"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function SuccessPage() {
    const [showContent, setShowContent] = useState(true);

    const router = useRouter()

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowContent(true);
    //     }, 50); // 6 seconds in milliseconds

    //     // Clean up the timer on component unmount
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, []);

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
                                <label className="font-bold text-2xl text-purple-900">Seu ingresso foi enviado para análise</label>
                                <label className="text-lg text-gray-600">Você será avisado quando tivermos um parecer sobre o ingresso.</label>
                                <div onClick={() => router.push('/')} className="cursor-pointer bg-purple-900 text-white rounded-xl p-4 flex items-center justify-center">
                                    <label className="cursor-pointer">Voltar para o começo</label>
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
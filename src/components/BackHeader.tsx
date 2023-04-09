import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export default function BackHeader() {
    const router = useRouter()

    return (
        <div className="p-4 bg-white flex items-center">
            <div onClick={() => router.back()} className='flex font-semibold items-center text-gray-500 hover:text-black'>
                <ArrowLongLeftIcon className="w-4 h-4" />
                <label className="text-sm ml-4">Voltar</label>
            </div>
        </div>
    )
}
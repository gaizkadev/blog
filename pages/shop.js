import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Meta from '../components/meta'
import { Alert } from '../components/alert'


export default function Shop() {
    return (
        <>
            <Head>
                <title>gaizka | Shop</title>
            </Head>
            <Meta />
            <Alert />
            <Header />
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 sm:gap-0 items-center sm:grid-col border-t-4 border-gray-800">
                <div className="flex-col">
                    <div className="flex-1">
                        <h1 className='text-center font-black uppercase sm:pt-6 sm:text-4xl lg:text-3xl'>Camisetas</h1>
                        <h1 className='text-center font-black uppercase sm:text-2xl lg:text-3xl'>●</h1>
                        <h1 className='text-center font-black uppercase sm:text-2xl lg:text-3xl'>●</h1>
                        <h1 className='text-center font-light uppercase sm:text-2xl sm:pb-6 lg:text-3xl'>unisex</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex-1">
                        <Image src="/products/cami-5.jpeg" alt="" width={496} height={800} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex-1">
                        <Image src="/products/cami-5.jpeg" alt="" width={496} height={800} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex-1">
                        <Image src="/products/cami-5.jpeg" alt="" width={496} height={800} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex-1">
                        <Image src="/products/cami-5.jpeg" alt="" width={496} height={800} />
                    </div>
                </div>                
            </div>
        </>
    )
}

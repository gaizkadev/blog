import Image from 'next/image';
import Container from './container';

export default function SubHero() {
    return (
        <Container>
        <div className='grid grid-cols-3 gap-6'>
            <div className='drop-shadow-2xl'>
                <Image
                    className='rounded-lg'
                    src="/assets/itx/itx_1R.png"
                    alt="Itxina"
                    width={450}
                    height={600}
                />
            </div>
            <div className='drop-shadow-2xl'>
                <Image
                    className='rounded-lg'
                    src="/assets/itx/itx_1G.png"
                    alt="Itxina"
                    width={450}
                    height={600}
                />
            </div>
            <div className='drop-shadow-2xl'>
                <Image
                    className='rounded-lg'
                    src="/assets/itx/itx_1B.png"
                    alt="Itxina"
                    width={450}
                    height={600}
                />
            </div>
        </div>
        </Container>
    )
}
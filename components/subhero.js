import Image from 'next/image';
import Container from './container';
import Red from '../public/assets/itx/itx_1R.png'
import Green from '../public/assets/itx/itx_1G.png'
import Blue from '../public/assets/itx/itx_1B.png'


export default function SubHero() {
    return (
        <Container>
        <div className='grid grid-cols-3 gap-6 my-10'>
            <div className='drop-shadow-2xl'>
                <Image
                    className='rounded-lg'
                    alt="Itxina"
                    src={Red}
                    layout="responsive"
                    width={450}
                    height={600}
                />
            </div>
            <div className='drop-shadow-2xl'>
                <Image
                    className='rounded-lg'
                    alt="Itxina"
                    src={Green}
                    layout="responsive"
                    width={450}
                    height={600}
                />
            </div>
            <div className='drop-shadow-2xl'>
                <Image
                    className='rounded-lg'
                    alt="Itxina"
                    src={Blue}
                    layout="responsive"
                    width={450}
                    height={600}
                />
            </div>
        </div>
        </Container>
    )
}
import Image from 'next/image'
import ContactForm from './components/contact'

export default function Home() {
	return (
		<div className='w-full h-screen border-2 mx-auto max-2xl:px-6 '>
			<div className='w-full flex items-center justify-center pt-20'>
				<Image src={'/logo.png'} width='600' height='600' alt='Logo' />
			</div>

			{/* <h1 className='text-center pt-28 text-white/60 lg:text-4xl text-2xl'>
				Samarqandda joylashgan{' '}
				<span className='text-green-400'>Cambridge Unit</span> xususiy maktabi
				uchun So&apos;rovnoma
			</h1> */}
			<div className='flex  w-full items-center justify-center lg:pt-10 pt-6'>
				<ContactForm />
			</div>
		</div>
	)
}
// bg-[url(https://themewagon.github.io/edu-meeting/assets/images/meetings-bg.jpg)] bg-no-repeat bg-cover

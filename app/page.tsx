import ContactForm from './components/contact'

export default function Home() {
	return (
		<div className='2xl:w-[1400px] h-screen border-2 mx-auto max-2xl:px-6 bg-[url(https://themewagon.github.io/edu-meeting/assets/images/meetings-bg.jpg)] bg-no-repeat bg-cover'>
			<h1 className='text-center pt-28 text-white/60 lg:text-6xl text-2xl'>
				Samarqandda joylashgan{' '}
				<span className='text-green-400'>Cambridge Unit</span> xususiy maktabi
				uchun So&apos;rovnoma
			</h1>
			<div className='flex  w-full items-center justify-center lg:pt-20 pt-10'>
				<ContactForm />
			</div>
		</div>
	)
}

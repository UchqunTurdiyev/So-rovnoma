'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formValid } from '@/lib/valid'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function ContactForm() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof formValid>>({
		resolver: zodResolver(formValid),
		defaultValues: {
			name: '',
			surName: '',
			num: '',
			degri: '',
		},
	})

	function onSubmit(values: z.infer<typeof formValid>) {
		setIsLoading(true)
		const telegramBotId = '7984755076:AAEAdHyIxnGWNeX8Kd8QjFGH17AxzIZBz34'
		const telegramChatId = 1041963785

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: `
                    Ism:   ${values.name}: 
Familya:   ${values.surName}:
Tell:   ${values.num}
Sinf:    ${values.degri}
`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Loading',
			success: 'Successfully',
			error: 'Error',
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Ism' disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='surName'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Familya' disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='num'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Tell nomer' disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='degri'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Sinf' disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className='w-fit bg-blue-600 text-white'
					size={'lg'}
					type='submit'
					disabled={isLoading}
				>
					<span>Send</span>
					<Send className='ml-2 size-4' />
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
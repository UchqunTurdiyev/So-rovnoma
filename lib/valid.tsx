import { z } from 'zod'

export const formValid = z.object({
	name: z.string().min(3),
	surName: z.string().min(3),
	num: z.string().min(9),
	degri: z.string(),
})

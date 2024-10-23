
<svelte:head>
	<title>Innovation digital</title>
	<meta name="Innovation digital" content="Innovation digital test project. My first svelte app" />
</svelte:head>

<script lang="ts">
	import Form from '../components/Form.svelte'
    import Button from '../components/Button.svelte'
	import Input from '../components/Input.svelte'
	import PhoneInput from '../components/PhoneInput.svelte'
	import CheckboxInput from '../components/CheckboxInput.svelte'
	import { formSchema } from '../lib/validation-schemas/form-schema'

	let name: string = ''
	let company: string = ''
	let email: string = ''
	let phone: string = ''
	let subject: string = ''
	let message: string = ''
	let agreement: boolean = false

	let errors: Record<string, string> = {}
	
	const handleSubmit = (event: Event) => {
		event.preventDefault()
		errors = {}

		const result = formSchema.safeParse({
			name,
			company,
			email,
			phone,
			subject,
			message,
			agreement,
		})

		if (!result.success) {
			result.error.errors.forEach(error => errors[error.path[0]] = error.message)
			return
		}

		console.log(result.data)
	}
</script>

<section class="py-[87px] px-4 w-full origin-top">
	<div class="flex flex-col items-center gap-7">
		<h2 class="text-[55px] font-medium text-white">Hello</h2>
		<Form onSubmit={handleSubmit}>
			
			<Input id="name" type='text' label="Name" bind:value={name} error={errors.name} required={true} />
			<Input id="company" type='text' label="Company" bind:value={company} error={errors.company} required={true} />
			<Input id="email" type='email' label="Email" bind:value={email} error={errors.email} required={true} />
			<PhoneInput label="Phone" bind:value={phone} error={errors.phone} required={true} />
			<Input id="subject" type='text' label="Subject" bind:value={subject} error={errors.subject} required={true} />
			<Input id="message" type='text' label="Message" bind:value={message} error={errors.message} required={true} />
			<CheckboxInput bind:checked={agreement} error={errors.agreement} required={true} />

            <Button type="submit" />
		</Form>
	</div>
</section>

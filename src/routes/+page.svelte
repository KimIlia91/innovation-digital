
<svelte:head>
	<title>Дом</title>
	<meta name="Innovation digital" content="Innovation digital test project. My first svelte app" />
</svelte:head>

<script lang="ts">
	import Form from '../components/Form.svelte'
    import SubmitButton from '../components/SubmitButton.svelte'
	import TextInput from '../components/TextInput.svelte'
	import PhoneInput from '../components/PhoneInput.svelte'
	import EmailInput from '../components/EmailInput.svelte'
	import FormCheckbox from '../components/FormCheckbox.svelte'
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
			result.error.errors.forEach(error => errors[error.path[0]] = error.message);
			return
		}

		console.log(result.data)
	};
</script>

<section class="py-[87px] px-4 w-full origin-top">
	<div class="flex flex-col items-center gap-7">
		<h2 class="text-[55px] font-medium text-white">Hello</h2>
		<Form onSubmit={handleSubmit}>
			
			<TextInput id="name" label="Name" bind:value={name} error={errors.name} required={true} />
			<TextInput id="company" label="Company" bind:value={company} error={errors.company} required={true} />
			<EmailInput label="Email" bind:value={email} error={errors.email} required={true} />
			<PhoneInput label="Phone" bind:value={phone} error={errors.phone} required={true} />
			<TextInput id="subject" label="Subject" bind:value={subject} error={errors.subject} required={true} />
			<TextInput id="message" label="Message" bind:value={message} error={errors.message} required={true} />
			<FormCheckbox bind:checked={agreement} error={errors.agreement} required={true} />

            <SubmitButton type="submit" />
		</Form>
	</div>
</section>

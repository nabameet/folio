<script lang="ts">
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
</script>

<form
	name="contact"
	method="POST"
	data-netlify="true"
	class="flex flex-col w-full min-h-screen bg-black"
>
	<input type="hidden" name="form-name" value="contact" />
	<Input type="text" name="name" label="name" />
	<Input type="email" name="email" label="email" />
	<TextArea name="message" label="your message" />
	<Button text="send" />
</form>

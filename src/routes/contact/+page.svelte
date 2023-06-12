<script lang="ts">
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
</script>

<div class="flex flex-col items-center bg-black">
	<form
		name="contact"
		method="POST"
		data-netlify="true"
		class="max-w-screen-xl flex flex-col w-full"
	>
		<Input type="text" name="name" label="name" />
		<Input type="email" name="email" label="email" />
		<TextArea name="message" label="your message" />
		<Button text="send" />
	</form>
</div>

<input type="hidden" name="form-name" value="contact" />

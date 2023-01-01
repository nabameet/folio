<script lang="ts">
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import TextArea from './TextArea.svelte';
</script>

<form class="flex flex-col w-full min-h-screen bg-black" action="" method="post">
	<Input type="text" name="name" label="name" />
	<Input type="email" name="email" label="email" />
	<TextArea name="message" label="your message" />
	<Button text="let's talk " />
</form>

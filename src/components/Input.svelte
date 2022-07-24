<script>
    export let label;
    export let id;
    export let help;
    export let value = '';
</script>

<div>
    <label for={id} class="block text-sm font-medium text-gray-900">{label}</label>
    <div class="mt-1">
        <input 
            type='text' 
            name={id} 
            id={id}
            bind:value={value}
            class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
    </div>
    <small class="text-gray-400">{help}</small>
</div>
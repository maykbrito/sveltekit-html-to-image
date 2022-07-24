<script>
  import Input from "./Input.svelte";
  import { BASE_URL } from '../lib/Env';

  let baseURL;

  if (process.env.NODE_ENV === 'production') {
      // For production
      baseURL = process.env.BASE_URL;
  } else {
      // For development
      baseURL = BASE_URL;
  }

  $:  options = {
    screenWidth: "1440",
    screenHeight: "",
    deviceScaleFactor: "2",
    waitUntil: "load",
    waitForElement: "",
    waitTime: "2000",
    quality: "100",
    url: "",
  }

  const handleSubmit = () => {
    if(options.url === '') {
        alert("url é obrigatória")
        return
    }

    const searchParams = new URLSearchParams(options);
    const url = `${baseURL}/create?${searchParams.toString()}`

    window.open(url, '_blank')
  }
</script>

<div class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="relative bg-white shadow-xl">
        <h2 class="sr-only">Options</h2>
  
        <div class="grid grid-cols-1 lg:grid-cols-3">
          <!-- Contact information -->
          <div class="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
          
            <h3 class="text-lg font-medium text-white">HTML TO JPG</h3>
            <p class="mt-6 text-base text-indigo-50 max-w-3xl">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
            <dl class="mt-8 space-y-6">
              <dt><span class="sr-only">Email</span></dt>
              <dd class="flex text-base text-indigo-50">
                <!-- Heroicon name: outline/mail -->
                <svg class="flex-shrink-0 w-6 h-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3">oi@maykbrito.dev</span>
              </dd>
            </dl>
            <ul class="mt-8 flex space-x-12">
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="https://github.com/maykbrito">
                  <span class="sr-only">GitHub</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <path d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.545-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.303.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a class="text-indigo-200 hover:text-indigo-100" href="https://twitter.com/maykbrito">
                  <span class="sr-only">Twitter</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <path d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209" fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
  
          <!-- Contact form -->
          <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 class="text-lg font-medium text-gray-900">Options</h3>
            <form on:submit|preventDefault={handleSubmit} class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <Input bind:value={options.screenWidth} id="screenWidth" label="Screen Width" help="Screen width in px."/>
              <Input bind:value={options.screenHeight} id="screenHeight" label="Screen Height" help="Screen height in px. If not set, the full height of the website will be used." />
              <Input bind:value={options.deviceScaleFactor} id="deviceScaleFactor" label="Device Scale Factor" help="Specify device scale factor. To mimic a retina screen, set it to 2. Defaults to 2."/>
              <Input bind:value={options.waitUntil} id="waitUntil" label="Wait Until" help="load: consider navigation to be finished when the load event is fired. domcontentloaded: consider navigation to be finished when the DOMContentLoaded event is fired. networkidle0: consider navigation to be finished when there are no more than 0 network connections for at least 500 ms. networkidle2: consider navigation to be finished when there are no more than 2 network connections for at least 500 ms." />
              <Input bind:value={options.waitForElement} id="waitForElement" label="Wait For Element" help="CSS selector for element to wait for (e.g. 'body' or '#element')."/>
              <Input bind:value={options.waitTime} id="waitTime" label="Wait Time" help="Additional time in ms to wait after the page load."/>
              <Input bind:value={options.quality} id="quality" label="Quality" help="JPEG compression level from 1 (lowest image quality and highest compression) to 100 (best quality but least effective compression)." />
              <Input bind:value={options.url} id="url" label="URL" help="The page URL eg.: https://www.maykbrito.dev" />
        
              <div class="sm:col-span-2 sm:flex sm:justify-end">
                <button 
                    type="submit" 
                    class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
                        Create JPG
                    </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  
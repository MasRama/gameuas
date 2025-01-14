<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  
  export let showBackButton = true;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    
    gsap.from('.content-animate', {
      duration: 0.5,
      y: 20,
      opacity: 0,
      ease: 'back.out(1.4)'
    });
  });
</script>

{#if !mounted}
  <div class="fixed inset-0 flex items-center justify-center bg-[#1a1b2b]">
    <div class="text-white text-xl font-pixel animate-bounce">
      Loading...
    </div>
  </div>
{:else}
  <div class="fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-[#2a2f4c] to-[#1a1b2b]">
    <!-- Subtle pixel pattern overlay -->
    <div class="absolute inset-0 opacity-5 bg-pixel-pattern"></div>
    
    <div class="relative flex flex-col items-center gap-8 p-8 max-w-4xl w-full">
      <h1 class="text-5xl font-pixel text-white mb-4 tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        UNIKAMA ADVENTURE
      </h1>
      
      <div class="content-animate w-full">
        <slot />
      </div>

      {#if showBackButton}
        <button 
          class="content-animate mb-8 menu-button flex items-center justify-center gap-2 w-48"
          on:click={() => window.history.back()}
        >
          <span class="menu-icon">🔙</span>
          <span>Back</span>
        </button>
      {/if}
    </div>
  </div>
{/if}

<style>
  @font-face {
    font-family: 'PixelFont';
    src: url('/assets/fonts/Minecraft.ttf') format('truetype');
  }

  .font-pixel {
    font-family: 'PixelFont', system-ui, sans-serif;
  }

  .bg-pixel-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  .menu-button {
    padding: 0.75rem 1.5rem;
    background: linear-gradient(to right, #4a5568, #2d3748);
    border: 2px solid #1a1b2b;
    color: white;
    font-family: 'PixelFont', system-ui, sans-serif;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.2s;
    position: relative;
  }

  .menu-button:hover {
    transform: translateX(8px);
    background: linear-gradient(to right, #9f7aea, #805ad5);
    border-color: #b794f4;
  }

  .menu-icon {
    font-size: 1.5rem;
    filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.5));
  }
</style> 
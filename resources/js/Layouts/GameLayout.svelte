<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    
    gsap.from('.content-animate', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power4.out'
    });
  });
</script>

{#if !mounted}
  <div class="fixed inset-0 flex items-center justify-center bg-black">
    <div class="text-white text-2xl font-bold [text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
      Loading...
    </div>
  </div>
{:else}
  <div class="fixed inset-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] [perspective:1000px]">
    <div class="flex flex-col items-center gap-12 p-8 [transform-style:preserve-3d]">
      <h1 class="text-6xl font-bold text-white mb-8 tracking-[4px] [text-shadow:0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(255,255,255,0.2)]">
        UNIKAMA ADVENTURE
      </h1>
      
      <div class="content-animate">
        <slot />
      </div>

      <button 
        class="content-animate mt-8 relative w-64 h-16 bg-transparent border-2 border-white/30 
               text-white text-xl font-bold uppercase tracking-wider
               transition-all duration-300 overflow-hidden
               hover:border-white/60 hover:scale-105
               hover:[text-shadow:0_0_20px_rgba(255,255,255,0.5)]
               before:content-[''] before:absolute before:inset-0
               before:bg-white/10 before:scale-x-0 before:origin-left
               before:transition-transform before:duration-300
               hover:before:scale-x-100"
        on:click={() => window.history.back()}
      >
        <span class="relative z-10">Back</span>
      </button>
    </div>
  </div>
{/if} 
<script lang="ts">
  import GameLayout from '../Layouts/GameLayout.svelte';
  import { router } from '@inertiajs/svelte';
  
  function startGame() {
    // Add your game start logic here
  }
  
  function showAbout() {
    router.visit('/about');
  }

  function showTechStack() {
    router.visit('/tech-stack');
  }
</script>

<GameLayout showBackButton={false}>
  <div class="flex flex-col items-center gap-4">
    <div class="menu-container space-y-4">
      <button 
        class="w-64 h-16 bg-gradient-to-br from-[#4a5568] to-[#2d3748] 
               border-t-2 border-l border-r border-b-4 border-[#1a202c]
               text-white font-pixel text-lg uppercase tracking-wide
               transform transition-all duration-200 active:translate-y-1 active:border-b-2
               hover:from-[#4a5568] hover:to-[#3a4556] focus:outline-none
               shadow-lg hover:shadow-xl"
        on:click={startGame}
      >
        Play
      </button>
      
      <button 
        class="w-64 h-16 bg-gradient-to-br from-[#4a5568] to-[#2d3748] 
               border-t-2 border-l border-r border-b-4 border-[#1a202c]
               text-white font-pixel text-lg uppercase tracking-wide
               transform transition-all duration-200 active:translate-y-1 active:border-b-2
               hover:from-[#4a5568] hover:to-[#3a4556] focus:outline-none
               shadow-lg hover:shadow-xl"
        on:click={showAbout}
      >
        About
      </button>

      <button 
        class="w-64 h-16 bg-gradient-to-br from-[#4a5568] to-[#2d3748] 
               border-t-2 border-l border-r border-b-4 border-[#1a202c]
               text-white font-pixel text-lg uppercase tracking-wide
               transform transition-all duration-200 active:translate-y-1 active:border-b-2
               hover:from-[#4a5568] hover:to-[#3a4556] focus:outline-none
               shadow-lg hover:shadow-xl"
        on:click={showTechStack}
      >
        Tech Stack
      </button>
    </div>
  </div>
</GameLayout>

<style>
  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
</style>

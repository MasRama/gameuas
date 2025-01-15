<script lang="ts">
  import GameLayout from './GameLayout.svelte';
  
  export let currentLevel: number;
  export let maxLevel: number;
  export let levelInstructions: string = "Complete the level objectives to proceed.";
  
  let showQuestModal = false;
  let showControlsModal = false;
  
  function toggleQuestModal() {
    showQuestModal = !showQuestModal;
  }

  function toggleControlsModal() {
    showControlsModal = !showControlsModal;
  }
</script>

<GameLayout showBackButton={false}>
  <div class="menu-container">
    <!-- Decorative Elements -->
    <div class="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-64 h-64 pixel-decoration">
      <img src="/assets/images/tree-pixel.png" alt="" class="w-full h-full object-contain" />
    </div>
    <div class="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-64 h-64 pixel-decoration">
      <img src="/assets/images/tree-pixel.png" alt="" class="w-full h-full object-contain transform scale-x-[-1]" />
    </div>

    <div class="pixel-window bg-[#2d3748]/90 p-8 backdrop-blur-sm">
      <div class="max-w-3xl mx-auto text-center">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-3xl font-pixel text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Level {currentLevel}
          </h2>
          <button 
            class="quest-button flex items-center gap-2 font-pixel text-white px-4 py-2"
            on:click={toggleQuestModal}
          >
            <span class="text-[#9f7aea]">?</span> 
            <span>Quest Info</span>
          </button>
        </div>

        <!-- Game Content Slot -->
        <slot />

        <!-- Controls -->
        <div class="flex justify-center gap-4 mt-6">
          <button 
            class="menu-button flex items-center justify-center gap-2 w-40"
            on:click={toggleControlsModal}
          >
            <span class="menu-icon">🎮</span>
            <span>Controls</span>
          </button>
          <button 
            class="menu-button flex items-center justify-center gap-2 w-40"
            on:click={() => window.history.back()}
          >
            <span class="menu-icon">🚪</span>
            <span>Exit</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</GameLayout>

<!-- Quest Modal -->
{#if showQuestModal}
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" on:click={toggleQuestModal}></div>
    
    <!-- Modal Content -->
    <div class="relative z-10 pixel-window bg-[#2d3748]/95 p-8 max-w-lg w-full mx-4">
      <div class="text-center">
        <h3 class="text-2xl font-pixel text-white mb-4">Level {currentLevel} Quest</h3>
        
        <div class="instructions-box p-4 mb-6">
          <p class="text-white font-pixel text-lg leading-relaxed">
            {levelInstructions}
          </p>
        </div>
        
        <button 
          class="menu-button inline-flex items-center gap-2 px-6 py-2"
          on:click={toggleQuestModal}
        >
          <span class="menu-icon">✕</span>
          <span>Close</span>
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- Controls Modal -->
{#if showControlsModal}
  <div class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" on:click={toggleControlsModal}></div>
    
    <!-- Modal Content -->
    <div class="relative z-10 pixel-window bg-[#2d3748]/95 p-8 max-w-lg w-full mx-4">
      <div class="text-center">
        <h3 class="text-2xl font-pixel text-white mb-4">Game Controls</h3>
        
        <div class="instructions-box p-4 mb-6">
          <div class="grid grid-cols-2 gap-4 text-white font-pixel">
            <div class="text-right">
              <p class="text-[#9f7aea]">Movement</p>
              <p class="text-[#9f7aea] mt-4">Alternative</p>
              <p class="text-[#9f7aea] mt-4">Action</p>
              <p class="text-[#9f7aea] mt-4">Menu</p>
            </div>
            <div class="text-left">
              <p>WASD Keys</p>
              <p class="mt-4">Arrow Keys</p>
              <p class="mt-4">Space / Enter</p>
              <p class="mt-4">Esc</p>
            </div>
          </div>
        </div>
        
        <button 
          class="menu-button inline-flex items-center gap-2 px-6 py-2"
          on:click={toggleControlsModal}
        >
          <span class="menu-icon">✕</span>
          <span>Close</span>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .menu-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: float 3s ease-in-out infinite;
    padding: 2rem;
  }

  .pixel-window {
    border: 4px solid #1a1b2b;
    position: relative;
    min-width: 320px;
  }

  .pixel-window::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid #4a5568;
    pointer-events: none;
  }

  .menu-button, .quest-button {
    background: linear-gradient(to right, #4a5568, #2d3748);
    border: 2px solid #1a1b2b;
    color: white;
    font-family: 'PixelFont', system-ui, sans-serif;
    transition: all 0.2s;
    position: relative;
  }

  .menu-button:hover, .quest-button:hover {
    transform: translateY(-2px);
    border-color: #b794f4;
    background: linear-gradient(to right, #9f7aea, #805ad5);
  }

  .quest-button {
    position: relative;
    overflow: hidden;
  }

  .quest-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .pixel-decoration {
    image-rendering: pixelated;
    pointer-events: none;
    animation: sway 4s ease-in-out infinite alternate;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes sway {
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }
  }

  .instructions-box {
    background: linear-gradient(to right, #4a5568, #2d3748);
    border: 2px solid #1a1b2b;
    color: white;
    font-family: 'PixelFont', system-ui, sans-serif;
    position: relative;
  }
</style> 
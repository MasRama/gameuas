<script lang="ts">
  import GameLayout from '../../Layouts/GameLayout.svelte';
  import { onMount } from 'svelte';
  
  export let currentLevel: number;
  export let maxLevel: number;

  let mapPreview: HTMLCanvasElement;
  
  onMount(() => {
    const ctx = mapPreview.getContext('2d');
    if (ctx) {
      // Draw simple map preview (placeholder)
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(0, 0, 400, 300);
      
      // Draw some placeholder elements
      ctx.fillStyle = '#9f7aea';
      ctx.fillRect(50, 50, 30, 30); // Player
      
      ctx.fillStyle = '#48bb78';
      ctx.fillRect(100, 100, 20, 20); // Item
      
      ctx.fillStyle = '#f56565';
      ctx.fillRect(200, 150, 25, 25); // Enemy
    }
  });
</script>

<GameLayout>
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
          <div class="flex items-center gap-2 font-pixel text-white">
            <span class="text-[#9f7aea]">►</span> 
            Progress: {currentLevel}/{maxLevel}
          </div>
        </div>

        <!-- Map Preview -->
        <div class="relative">
          <canvas 
            bind:this={mapPreview}
            width="400"
            height="300"
            class="pixel-border w-full bg-[#1a1b2b] image-rendering-pixel"
          ></canvas>

          <!-- Level Info Overlay -->
          <div class="absolute bottom-4 left-4 right-4 menu-button py-3 px-4 bg-gradient-to-r from-[#2d3748]/95 to-[#1a1b2b]/95">
            <div class="flex justify-between items-center text-white font-pixel">
              <div class="flex items-center gap-2">
                <span class="text-[#48bb78]">♦</span>
                <span>Collectibles: 0/3</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#f56565]">☠</span>
                <span>Enemies: 2</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="grid grid-cols-2 gap-4 mt-6">
          <button class="menu-button flex items-center justify-center gap-2">
            <span class="menu-icon">⚔️</span>
            <span>Start Level</span>
          </button>
          <button class="menu-button flex items-center justify-center gap-2">
            <span class="menu-icon">🎮</span>
            <span>Controls</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</GameLayout>

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

  .menu-button {
    background: linear-gradient(to right, #4a5568, #2d3748);
    border: 2px solid #1a1b2b;
    color: white;
    font-family: 'PixelFont', system-ui, sans-serif;
    transition: all 0.2s;
    position: relative;
  }

  .menu-button:hover {
    transform: translateY(-2px);
    border-color: #b794f4;
    background: linear-gradient(to right, #9f7aea, #805ad5);
  }

  .pixel-decoration {
    image-rendering: pixelated;
    pointer-events: none;
    animation: sway 4s ease-in-out infinite alternate;
  }

  .image-rendering-pixel {
    image-rendering: pixelated;
  }

  .pixel-border {
    border: 4px solid #1a1b2b;
    position: relative;
  }

  .pixel-border::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid #4a5568;
    pointer-events: none;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes sway {
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }
  }
</style> 
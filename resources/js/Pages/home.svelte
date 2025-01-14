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

  let selectedButton = 0;
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      selectedButton = (selectedButton - 1 + 3) % 3;
    } else if (event.key === 'ArrowDown') {
      selectedButton = (selectedButton + 1) % 3;
    } else if (event.key === 'Enter') {
      if (selectedButton === 0) startGame();
      else if (selectedButton === 1) showAbout();
      else showTechStack();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<GameLayout showBackButton={false}>
  <div class="menu-container">
    <!-- Decorative Elements -->
    <div class="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-64 h-64 pixel-decoration">
      <img src="/assets/images/tree-pixel.png" alt="" class="w-full h-full object-contain" />
    </div>
    <div class="absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-64 h-64 pixel-decoration">
      <img src="/assets/images/tree-pixel.png" alt="" class="w-full h-full object-contain transform scale-x-[-1]" />
    </div>

    <!-- Menu Window -->
    <div class="pixel-window bg-[#2d3748]/90 p-8 backdrop-blur-sm">
      <div class="space-y-4">
        <button 
          class="menu-button {selectedButton === 0 ? 'selected' : ''}"
          on:click={startGame}
        >
          <span class="menu-icon">⚔️</span>
          <span>Play</span>
        </button>
        
        <button 
          class="menu-button {selectedButton === 1 ? 'selected' : ''}"
          on:click={showAbout}
        >
          <span class="menu-icon">📜</span>
          <span>About</span>
        </button>

        <button 
          class="menu-button {selectedButton === 2 ? 'selected' : ''}"
          on:click={showTechStack}
        >
          <span class="menu-icon">🛠️</span>
          <span>Tech Stack</span>
        </button>
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
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0 1.5rem;
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

  .menu-button:hover,
  .menu-button.selected {
    transform: translateX(8px);
    background: linear-gradient(to right, #9f7aea, #805ad5);
    border-color: #b794f4;
  }

  .menu-button.selected::before {
    content: '►';
    position: absolute;
    left: -1.5rem;
    color: #9f7aea;
    animation: bounce 0.5s infinite alternate;
  }

  .menu-icon {
    font-size: 1.5rem;
    filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.5));
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

  @keyframes bounce {
    from { transform: translateX(0); }
    to { transform: translateX(4px); }
  }

  @keyframes sway {
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }
  }
</style>

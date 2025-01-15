<script lang="ts">
  import GameLayout from '../Layouts/GameLayout.svelte';
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
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-pixel text-white mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          Tech Stack
        </h2>
        
        <div class="grid grid-cols-2 gap-6">
          <div class="menu-button">
            <h3 class="font-pixel text-[#9f7aea] mb-4 text-lg">Frontend</h3>
            <ul class="space-y-3 text-gray-100 font-pixel text-lg">
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> Svelte
              </li>
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> TypeScript
              </li>
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> Tailwind CSS
              </li>
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> GSAP
              </li>
            </ul>
          </div>
          
          <div class="menu-button">
            <h3 class="font-pixel text-[#9f7aea] mb-4 text-lg">Game Engine</h3>
            <ul class="space-y-3 text-gray-100 font-pixel text-lg">
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> LAJU
              </li>
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> Canvas API
              </li>
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> Sprite System
              </li>
              <li class="flex items-center justify-center gap-2">
                <span class="text-[#9f7aea]">►</span> State Manager
              </li>
            </ul>
          </div>
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
    width: 100%;
    padding: 1.5rem;
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
</style> 
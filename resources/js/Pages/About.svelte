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

    <div class="pixel-window bg-[#2d3748]/90 p-6 backdrop-blur-sm">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-pixel text-white mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          About The Game
        </h2>
        
        <div class="space-y-3 text-gray-100 font-pixel">
          <div class="menu-button py-2">
            <p class="text-sm">
              UNIKAMA ADVENTURE adalah game petualangan yang mengajak pemain menjelajahi dunia kampus Universitas PGRI Kanjuruhan Malang.
            </p>
          </div>

          <div class="menu-button py-2">
            <p class="text-sm">
              Dalam game ini, pemain akan menghadapi berbagai tantangan dan puzzle sambil mengenal lebih dekat tentang kehidupan kampus UNIKAMA.
            </p>
          </div>

          <div class="menu-button py-2">
            <p class="text-sm">
              Game ini dibuat sebagai pemenuhan tugas akhir mata kuliah Pemrograman Game Dasar di Program Studi Pendidikan Teknik Informatika, Universitas PGRI Kanjuruhan Malang.
            </p>
          </div>

          <div class="menu-button py-2 bg-gradient-to-r from-[#9f7aea] to-[#805ad5]">
            <p class="text-sm italic">
              ~ Dibuat dengan ❤️ dan penuh dedikasi oleh Rama & Rezal ~
            </p>
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
    padding-left: 1.5rem;
    padding-right: 1.5rem;
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
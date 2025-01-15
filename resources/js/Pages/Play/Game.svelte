<script lang="ts">
  import GameStageLayout from '../../Layouts/GameStageLayout.svelte';
  import { onMount } from 'svelte';
  
  export let currentLevel: number;
  export let maxLevel: number;

  const levelInstructions = `
    <h3 class="text-[#9f7aea] text-lg mb-3">🎯 Mission: Document Hunter</h3>
    
    <p class="mb-3 text-sm">Selamat datang calon mahasiswa baru! Sebelum memulai petualangan di UNIKAMA, kamu harus mengumpulkan dokumen penting untuk pendaftaran.</p>

    <h4 class="text-[#9f7aea] text-sm mb-2">📜 Objectives:</h4>
    <ul class="mb-3 text-sm">
      <li>• Temukan Ijazah tersembunyi di lemari</li>
      <li>• Cari KTP yang terjatuh di sekitar rumah</li>
      <li>• Kumpulkan 3 lembar pas foto terbaru</li>
      <li>• Dapatkan dokumen pendukung lainnya</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">⚠️ Challenges:</h4>
    <ul class="mb-3 text-sm">
      <li>• Hindari tumpukan barang yang menghalangi</li>
      <li>• Waktu terbatas sebelum pendaftaran ditutup</li>
      <li>• Beberapa dokumen mungkin tersembunyi di tempat tak terduga</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">💡 Tips:</h4>
    <p class="text-sm">Periksa setiap sudut rumah dengan teliti. Dokumen bisa berada di mana saja!</p>
  `;

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

<GameStageLayout {currentLevel} {maxLevel} {levelInstructions}>
  <!-- Map Preview -->
  <div class="relative">
    <canvas 
      bind:this={mapPreview}
      width="400"
      height="300"
      class="pixel-border w-full bg-[#1a1b2b] image-rendering-pixel"
    ></canvas>

    <!-- Level Info Overlay -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 info-button py-3 px-8 bg-gradient-to-r from-[#2d3748]/95 to-[#1a1b2b]/95">
      <div class="flex justify-center items-center text-white font-pixel">
        <div class="flex items-center gap-2">
          <span class="text-[#48bb78]">📜</span>
          <span>Documents: 0/4</span>
        </div>
      </div>
    </div>
  </div>
</GameStageLayout>

<style>
  :global(ul) {
    list-style-type: none;
    padding-left: 0;
  }

  :global(li) {
    margin-bottom: 0.5rem;
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

  .info-button {
    background: linear-gradient(to right, #4a5568, #2d3748);
    border: 2px solid #1a1b2b;
    color: white;
    font-family: 'PixelFont', system-ui, sans-serif;
    transition: all 0.2s;
    position: relative;
  }

  .info-button:hover {
    border-color: #b794f4;
    background: linear-gradient(to right, #9f7aea, #805ad5);
  }
</style> 
<script lang="ts">
  import GameStageLayout from '../../Layouts/GameStageLayout.svelte';
  import { onMount } from 'svelte';
  
  export let currentLevel: number = 5;
  export let maxLevel: number;

  const levelInstructions = `
    <h3 class="text-[#9f7aea] text-lg mb-3">🎯 Mission: Campus Tour</h3>
    
    <p class="mb-3 text-sm">Selamat! Kamu telah resmi menjadi mahasiswa UNIKAMA. Sekarang saatnya mengenal lebih dekat kampus barumu dengan menjelajahi setiap sudutnya!</p>

    <h4 class="text-[#9f7aea] text-sm mb-2">📜 Objectives:</h4>
    <ul class="mb-3 text-sm">
      <li>• Kunjungi Perpustakaan Pusat</li>
      <li>• Temukan Lab Komputer</li>
      <li>• Cari Kantin dan Area Istirahat</li>
      <li>• Eksplorasi Lapangan Olahraga</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">⚠️ Challenges:</h4>
    <ul class="mb-3 text-sm">
      <li>• Peta kampus yang luas</li>
      <li>• Banyak gedung yang mirip</li>
      <li>• Temukan jalan pintas antar gedung</li>
      <li>• Kenali semua area penting</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">💡 Tips:</h4>
    <p class="text-sm">Manfaatkan papan petunjuk di setiap gedung dan jangan ragu bertanya pada mahasiswa senior!</p>
  `;

  let mapPreview: HTMLCanvasElement;
  let locationsFound = 0;
  
  onMount(() => {
    const ctx = mapPreview.getContext('2d');
    if (ctx) {
      // Draw campus background
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(0, 0, 400, 300);
      
      // Draw main buildings
      ctx.fillStyle = '#805ad5';
      // Library
      ctx.fillRect(50, 50, 80, 60);
      // Computer Lab
      ctx.fillRect(270, 50, 80, 60);
      // Cafeteria
      ctx.fillRect(50, 180, 80, 60);
      // Sports Field
      ctx.fillRect(200, 180, 150, 80);
      
      // Draw paths
      ctx.fillStyle = '#4a5568';
      ctx.fillRect(130, 70, 140, 20); // Horizontal path
      ctx.fillRect(160, 70, 20, 140); // Vertical path
      
      // Draw decorative elements
      ctx.fillStyle = '#48bb78';
      // Trees
      ctx.fillRect(20, 20, 20, 20);
      ctx.fillRect(360, 20, 20, 20);
      ctx.fillRect(20, 260, 20, 20);
      ctx.fillRect(360, 260, 20, 20);
      
      // Draw player
      ctx.fillStyle = '#9f7aea';
      ctx.fillRect(180, 130, 30, 30);
      
      // Draw location markers
      ctx.fillStyle = '#f56565';
      ctx.fillRect(80, 80, 15, 15);    // Library marker
      ctx.fillRect(300, 80, 15, 15);   // Lab marker
      ctx.fillRect(80, 200, 15, 15);   // Canteen marker
      ctx.fillRect(270, 210, 15, 15);  // Sports marker
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
          <span class="text-[#48bb78]">🏫</span>
          <span>Locations: {locationsFound}/4</span>
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
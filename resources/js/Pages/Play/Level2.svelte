<script lang="ts">
  import GameStageLayout from '../../Layouts/GameStageLayout.svelte';
  import { onMount } from 'svelte';
  
  export let currentLevel: number = 2;
  export let maxLevel: number;

  const levelInstructions = `
    <h3 class="text-[#9f7aea] text-lg mb-3">🎯 Mission: Registration Challenge</h3>
    
    <p class="mb-3 text-sm">Selamat datang di Gedung Administrasi UNIKAMA! Sekarang saatnya mengisi formulir pendaftaran dengan teliti dan benar.</p>

    <h4 class="text-[#9f7aea] text-sm mb-2">📜 Objectives:</h4>
    <ul class="mb-3 text-sm">
      <li>• Temukan ruang pendaftaran mahasiswa baru</li>
      <li>• Kumpulkan formulir yang diperlukan</li>
      <li>• Isi data diri dengan lengkap dan benar</li>
      <li>• Serahkan berkas ke petugas pendaftaran</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">⚠️ Challenges:</h4>
    <ul class="mb-3 text-sm">
      <li>• Waktu terbatas untuk pengisian formulir</li>
      <li>• Hindari kesalahan penulisan data</li>
      <li>• Pastikan tidak ada dokumen yang terlewat</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">💡 Tips:</h4>
    <p class="text-sm">Baca setiap pertanyaan dengan teliti dan periksa kembali sebelum menyerahkan formulir!</p>
  `;

  let mapPreview: HTMLCanvasElement;
  
  onMount(() => {
    const ctx = mapPreview.getContext('2d');
    if (ctx) {
      // Draw building background
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(0, 0, 400, 300);
      
      // Draw registration desk
      ctx.fillStyle = '#805ad5';
      ctx.fillRect(50, 200, 100, 30);
      
      // Draw forms/documents
      ctx.fillStyle = '#48bb78';
      ctx.fillRect(180, 100, 15, 20); // Form 1
      ctx.fillRect(220, 150, 15, 20); // Form 2
      ctx.fillRect(260, 120, 15, 20); // Form 3
      
      // Draw player
      ctx.fillStyle = '#9f7aea';
      ctx.fillRect(50, 50, 30, 30);
      
      // Draw NPCs (staff)
      ctx.fillStyle = '#f56565';
      ctx.fillRect(300, 200, 25, 25); // Staff 1
      ctx.fillRect(350, 200, 25, 25); // Staff 2
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
          <span class="text-[#48bb78]">📝</span>
          <span>Forms: 0/4</span>
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
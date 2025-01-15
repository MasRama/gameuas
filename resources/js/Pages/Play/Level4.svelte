<script lang="ts">
  import GameStageLayout from '../../Layouts/GameStageLayout.svelte';
  import { onMount } from 'svelte';
  
  export let currentLevel: number = 4;
  export let maxLevel: number;

  const levelInstructions = `
    <h3 class="text-[#9f7aea] text-lg mb-3">🎯 Mission: Final Interview</h3>
    
    <p class="mb-3 text-sm">Selamat datang di Fakultas Teknik Informatika UNIKAMA! Ini adalah tahap terakhir - wawancara dengan Kaprodi. Tunjukkan motivasi dan minatmu yang terbaik!</p>

    <h4 class="text-[#9f7aea] text-sm mb-2">📜 Objectives:</h4>
    <ul class="mb-3 text-sm">
      <li>• Temui Kaprodi di ruangannya</li>
      <li>• Jawab pertanyaan tentang motivasi</li>
      <li>• Jelaskan minat di bidang IT</li>
      <li>• Yakinkan Kaprodi dengan jawabanmu</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">⚠️ Challenges:</h4>
    <ul class="mb-3 text-sm">
      <li>• Pertanyaan yang tidak terduga</li>
      <li>• Waktu jawaban yang terbatas</li>
      <li>• Harus menjawab dengan percaya diri</li>
      <li>• Kaprodi menilai setiap jawabanmu</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">💡 Tips:</h4>
    <p class="text-sm">Berikan jawaban yang jujur dan tunjukkan antusiasme yang tinggi terhadap jurusan Teknik Informatika!</p>
  `;

  let mapPreview: HTMLCanvasElement;
  let answeredQuestions = 0;
  
  onMount(() => {
    const ctx = mapPreview.getContext('2d');
    if (ctx) {
      // Draw office background
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(0, 0, 400, 300);
      
      // Draw office desk
      ctx.fillStyle = '#805ad5';
      ctx.fillRect(200, 180, 150, 40); // Main desk
      ctx.fillRect(180, 180, 40, 40);  // Side desk
      
      // Draw chairs
      ctx.fillStyle = '#4a5568';
      ctx.fillRect(220, 230, 40, 20); // Kaprodi chair
      ctx.fillRect(220, 150, 40, 20); // Student chair
      
      // Draw decorative elements
      ctx.fillStyle = '#48bb78';
      // Certificates on wall
      ctx.fillRect(50, 50, 30, 40);
      ctx.fillRect(100, 50, 30, 40);
      ctx.fillRect(150, 50, 30, 40);
      
      // Draw computer
      ctx.fillStyle = '#e53e3e';
      ctx.fillRect(250, 160, 40, 30);
      
      // Draw player
      ctx.fillStyle = '#9f7aea';
      ctx.fillRect(220, 120, 30, 30);
      
      // Draw Kaprodi
      ctx.fillStyle = '#f56565';
      ctx.fillRect(220, 260, 35, 35);
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
          <span class="text-[#48bb78]">💬</span>
          <span>Questions: {answeredQuestions}/8</span>
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
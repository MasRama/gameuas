<script lang="ts">
  import GameStageLayout from '../../Layouts/GameStageLayout.svelte';
  import { onMount } from 'svelte';
  
  export let currentLevel: number = 3;
  export let maxLevel: number;

  const levelInstructions = `
    <h3 class="text-[#9f7aea] text-lg mb-3">🎯 Mission: Academic Test</h3>
    
    <p class="mb-3 text-sm">Selamat datang di Ruang Ujian UNIKAMA! Ini adalah tantangan terakhir sebelum resmi menjadi mahasiswa. Buktikan kemampuanmu dalam tes masuk ini!</p>

    <h4 class="text-[#9f7aea] text-sm mb-2">📜 Objectives:</h4>
    <ul class="mb-3 text-sm">
      <li>• Selesaikan soal Matematika Dasar</li>
      <li>• Pecahkan teka-teki Logika</li>
      <li>• Jawab pertanyaan Bahasa</li>
      <li>• Kumpulkan lembar jawaban tepat waktu</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">⚠️ Challenges:</h4>
    <ul class="mb-3 text-sm">
      <li>• Waktu ujian terbatas</li>
      <li>• Soal semakin sulit di setiap bagian</li>
      <li>• Hindari kesalahan dalam menjawab</li>
      <li>• Jangan terjebak soal yang rumit</li>
    </ul>

    <h4 class="text-[#9f7aea] text-sm mb-2">💡 Tips:</h4>
    <p class="text-sm">Kerjakan soal yang mudah terlebih dahulu. Jangan lupa periksa kembali jawabanmu sebelum waktu habis!</p>
  `;

  let mapPreview: HTMLCanvasElement;
  let answeredQuestions = 0;
  
  onMount(() => {
    const ctx = mapPreview.getContext('2d');
    if (ctx) {
      // Draw classroom background
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(0, 0, 400, 300);
      
      // Draw desks (3x3 grid)
      ctx.fillStyle = '#805ad5';
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
          ctx.fillRect(100 + (i * 80), 80 + (j * 70), 50, 30);
        }
      }
      
      // Draw question papers (floating items to collect)
      ctx.fillStyle = '#48bb78';
      // Math questions
      ctx.fillRect(120, 50, 20, 20);
      // Logic questions
      ctx.fillRect(200, 150, 20, 20);
      // Language questions
      ctx.fillRect(280, 250, 20, 20);
      
      // Draw player
      ctx.fillStyle = '#9f7aea';
      ctx.fillRect(50, 50, 30, 30);
      
      // Draw teacher/supervisor
      ctx.fillStyle = '#f56565';
      ctx.fillRect(350, 40, 25, 25);
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
          <span class="text-[#48bb78]">✍️</span>
          <span>Questions: {answeredQuestions}/12</span>
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
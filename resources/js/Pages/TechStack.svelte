<script lang="ts">
  import GameLayout from '../Layouts/GameLayout.svelte';
</script>

<GameLayout>
  <div class="bg-[#2d3748]/80 backdrop-blur-sm rounded-lg border-2 border-[#4a5568] p-8 shadow-xl">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl font-pixel text-white mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        Tech Stack
      </h2>
      
      <div class="grid grid-cols-2 gap-6">
        <div class="bg-[#1a202c]/50 p-6 rounded-lg border border-[#4a5568] hover:border-[#9f7aea] transition-colors">
          <h3 class="font-pixel text-[#9f7aea] mb-4 text-lg">Frontend</h3>
          <ul class="space-y-3 text-gray-100 font-pixel text-sm">
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> Svelte
            </li>
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> TypeScript
            </li>
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> Tailwind CSS
            </li>
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> GSAP
            </li>
          </ul>
        </div>
        
        <div class="bg-[#1a202c]/50 p-6 rounded-lg border border-[#4a5568] hover:border-[#9f7aea] transition-colors">
          <h3 class="font-pixel text-[#9f7aea] mb-4 text-lg">Game Engine</h3>
          <ul class="space-y-3 text-gray-100 font-pixel text-sm">
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> Custom Engine
            </li>
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> Canvas API
            </li>
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> Sprite System
            </li>
            <li class="flex items-center justify-center gap-2">
              <span class="text-[#9f7aea]">></span> State Manager
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</GameLayout> 
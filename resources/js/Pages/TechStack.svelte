<script lang="ts">
  import GameLayout from '../Layouts/GameLayout.svelte';
</script>

<GameLayout>
  <div class="max-w-2xl text-white text-center">
    <h2 class="text-3xl font-bold mb-8">Tech Stack</h2>
    
    <div class="grid grid-cols-2 gap-6 text-lg">
      <div class="p-4 border-2 border-white/20 rounded-lg hover:border-white/40 transition-colors">
        <h3 class="font-bold mb-2">Frontend</h3>
        <ul class="space-y-2 opacity-80">
          <li>Svelte</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>GSAP Animations</li>
        </ul>
      </div>
      
      <div class="p-4 border-2 border-white/20 rounded-lg hover:border-white/40 transition-colors">
        <h3 class="font-bold mb-2">Game Engine</h3>
        <ul class="space-y-2 opacity-80">
          <li>Custom Engine</li>
          <li>Canvas API</li>
          <li>Sprite Animations</li>
          <li>State Management</li>
        </ul>
      </div>
    </div>
  </div>
</GameLayout> 
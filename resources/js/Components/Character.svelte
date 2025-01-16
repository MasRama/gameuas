<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Character position in grid coordinates
  export let x = 1;
  export let y = 1;
  
  // Grid settings
  const GRID_SIZE = 32;
  const GRID_COLS = 12;
  const GRID_ROWS = 8;
  
  // Movement and animation settings
  const MOVE_SPEED = 150; // Slightly slower for more consistent movement
  
  // Character state
  let direction = 'bawah';
  let frame = 1;
  let isMoving = false;
  let moveInterval: ReturnType<typeof setInterval>;
  
  // Key state
  let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  };

  // Track the last pressed key
  let lastPressedKey: string | null = null;
  let isKeyHandled = false;

  function handleKeyDown(event: KeyboardEvent) {
    if (keys.hasOwnProperty(event.key)) {
      event.preventDefault();
      
      // Ignore keyboard repeat events
      if (event.repeat) return;
      
      keys[event.key] = true;
      lastPressedKey = event.key;
      
      if (!isKeyHandled) {
        isKeyHandled = true;
        startMoving();
      }
    }
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (keys.hasOwnProperty(event.key)) {
      keys[event.key] = false;
      isKeyHandled = false;
      
      // If this was the key we were moving with, find another pressed key
      if (event.key === lastPressedKey) {
        const stillPressedKeys = Object.entries(keys).filter(([_, pressed]) => pressed);
        if (stillPressedKeys.length > 0) {
          // Continue moving with the last pressed key
          lastPressedKey = stillPressedKeys[stillPressedKeys.length - 1][0];
          startMoving();
        } else {
          // No keys pressed, stop moving
          lastPressedKey = null;
          stopMoving();
        }
      }
    }
  }

  function startMoving() {
    isMoving = true;
    
    // Clear existing interval
    if (moveInterval) clearInterval(moveInterval);
    
    // Initial move
    if (lastPressedKey) moveCharacter(lastPressedKey);
    
    // Set up continuous movement with the current key
    moveInterval = setInterval(() => {
      if (lastPressedKey) moveCharacter(lastPressedKey);
    }, MOVE_SPEED);
  }

  function stopMoving() {
    isMoving = false;
    if (moveInterval) {
      clearInterval(moveInterval);
      moveInterval = null;
    }
    frame = 2; // Reset to standing frame
  }

  function moveCharacter(key: string) {
    let newX = x;
    let newY = y;

    switch(key) {
      case 'ArrowUp':
        direction = 'atas';
        newY = Math.max(0, y - 1);
        break;
      case 'ArrowDown':
        direction = 'bawah';
        newY = Math.min(GRID_ROWS - 1, y + 1);
        break;
      case 'ArrowLeft':
        direction = 'kiri';
        newX = Math.max(0, x - 1);
        break;
      case 'ArrowRight':
        direction = 'kanan';
        newX = Math.min(GRID_COLS - 1, x + 1);
        break;
    }

    // Only update position if we can actually move
    if (newX !== x || newY !== y) {
      x = newX;
      y = newY;
      // Update frame on each successful move
      frame = frame % 3 + 1;
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
    if (moveInterval) clearInterval(moveInterval);
  });

  $: characterImage = `/assets/images/karakter/${direction}${frame}.png`;
  $: pixelX = x * GRID_SIZE;
  $: pixelY = y * GRID_SIZE;
</script>

<div 
  class="character"
  style="transform: translate({pixelX}px, {pixelY}px)"
>
  <img
    src={characterImage}
    alt="character"
    class="w-10 h-10 image-rendering-pixel"
  />
</div>

<style>
  .character {
    position: absolute;
    transition: transform 0.1s linear;
    z-index: 10;
    pointer-events: none;
  }
  
  .image-rendering-pixel {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
</style> 
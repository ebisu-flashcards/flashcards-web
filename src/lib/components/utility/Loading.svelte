<script lang="ts">
    import { faFish } from "@fortawesome/free-solid-svg-icons/faFish.js";
    import Fa from "svelte-fa";
</script>

<div class="flex flex-col items-center text-gray-700">
    <!-- TODO: Let's take this fish out for a swimming -->
    <Fa icon={faFish} style="animate-swim" />
    <span class="text-2xl">
        <slot />
    </span>
</div>
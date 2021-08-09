<script lang="ts">
    import { faFish } from "@fortawesome/free-solid-svg-icons/faFish.js";
    import FaIcon from "./FaIcon.svelte";
</script>

<div class="flex flex-col items-center text-gray-700">
    <!--Let's take this fish out for a swimming -->
    <FaIcon class="animate-swim" icon={faFish} size="75px" />
    <span class="text-2xl">
        <slot />
    </span>
</div>
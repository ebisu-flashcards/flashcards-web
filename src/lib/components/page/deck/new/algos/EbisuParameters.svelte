<script lang="ts">
import ParameterSlider from "./utility/ParameterSlider.svelte";
import ExplanationBox from "./utility/ExplanationBox.svelte";

let initialAlpha = 3.0;
let initialBeta = 3.0;
let initialTime = 3.0;
let initialHalfLife = 30;
</script>

<div class="flex-col-container justify-start gap-y-6 px-4">
  <div class="flex flex-col gap-y-2">
    <ParameterSlider
      bind:value="{initialHalfLife}"
      id="parameter-t"
      max="{3600}"
      min="{10}"
      name="Initial half-life"
      step="{5}"
      unit=" minutes" />
    <ExplanationBox>
      <span slot="title">What is half-life?</span>
      <span slot="explanation"> It's magical! </span>
    </ExplanationBox>
  </div>

  <!-- Parameter Alpha -->
  <div class="flex flex-col gap-y-2">
    <ParameterSlider
      bind:value="{initialAlpha}"
      id="parameter-alpha"
      max="{30.0}"
      min="{1.0}"
      name="Initial &alpha;"
      step="{0.1}" />
    <ExplanationBox>
      <span slot="title">What is &alpha;?</span>
      <span slot="explanation"> It's magical! </span>
    </ExplanationBox>
  </div>

  <div class="flex flex-col gap-y-2">
    <ParameterSlider
      bind:value="{initialBeta}"
      id="parameter-beta"
      max="{30.0}"
      min="{1.0}"
      name="Initial &beta;"
      step="{0.1}" />
    <ExplanationBox>
      <span slot="title">What is &beta;?</span>
      <span slot="explanation"> It's magical! </span>
    </ExplanationBox>
  </div>

  <div class="flex flex-col gap-y-2">
    <ParameterSlider
      bind:value="{initialTime}"
      id="parameter-t"
      max="{30.0}"
      min="{1.0}"
      name="Initial t"
      step="{0.1}" />
    <ExplanationBox>
      <span slot="title">What is initial t?</span>
      <span slot="explanation"> It's magical! </span>
    </ExplanationBox>
  </div>
</div>

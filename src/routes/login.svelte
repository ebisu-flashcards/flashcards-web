<script lang="ts">
import Page from "../lib/components/Page.svelte";
import SectionHeader from "$lib/components/utility/SectionHeader.svelte";
import FlatButton from "$lib/components/inputs/buttons/FlatButton.svelte";
</script>

<div class="flex-col-container justify-center">
  <div>
    <Page small>
      <!-- Breadcrumb slot -->
      <div class="breadcrumbs" slot="breadcrumbs">
        <span>LOGIN</span>
      </div>

      <form class="flex-col-container content-center">
        <div class="flex flex-col my-8 mx-8">
          <!-- Username -->
          <div class="flex flex-col gap-y-6">
            <div class="flex flex-col">
              <SectionHeader centered style="font-bold text-xl">
                USERNAME
              </SectionHeader>
              <input
                id="username"
                type="text"
                placeholder="Your username here" />
            </div>

            <!-- Password -->
            <div class="flex flex-col">
              <SectionHeader centered style="font-bold text-xl">
                PASSWORD
              </SectionHeader>
              <input
                id="password"
                type="password"
                placeholder="Your password here" />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <!-- Login button -->
          <FlatButton color="green" style="w-full">Login</FlatButton>
        </div>
      </form>
    </Page>
  </div>
</div>

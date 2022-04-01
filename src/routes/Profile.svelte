<script>
  export let usr;
  import Wizard from "../lib/Wizard.svelte";
  import { user } from "../store";
  import { auth } from "../auth";
  import { signOut } from "firebase/auth";
  async function handleLogout() {
    await signOut(auth);
    $user = null;
  }
  let view = false;
  function handleView() {
    view = !view;
  }
</script>

<div class="flex flex-col items-center m-8">
  <h1
    class="card bg-blue-700 shadow-xl p-4 hover:underline cursor-pointer m-8 text-2xl font-bold text-content hover:text-black border-t-4 border-white glow hover:border-blue-300 font-script"
    on:click={handleView}
  >
    Customize your profile
  </h1>
  <div class="avatar online">
    <figure class="w-24 rounded-full">
      <img src={usr.photoURL} alt={usr.fullname} />
    </figure>
  </div>
  <button class="btn btn-outline btn-error" on:click={handleLogout}
    >Logout</button
  >
{#if view}
<Wizard />
{/if}
</div>

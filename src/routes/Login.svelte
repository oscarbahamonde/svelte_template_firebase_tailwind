<script>
  // @ts-ignore
  import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../store";
  import { auth } from "../auth";
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
  } from "firebase/auth";

  const navigate = useNavigate();
  const location = useLocation();

  let signup = false;
  let email = "";
  let password = "";

  function toggleSignup() {
    signup = !signup;
  }

  async function handleSubmit() {
    if (signup) {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async () => {
          const usr = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          user.set(usr);
        }
      );
    } else {
      const usr = await signInWithEmailAndPassword(auth, email, password);
      user.set(usr);
    }
    const from = ($location.state && $location.state.from) || "/";
    navigate(from, { replace: true });
  }

  let handleGoogle = async () => {
    try {
      const usr = await signInWithPopup(auth, new GoogleAuthProvider());
      $user = usr;
      const from = ($location.state && $location.state.from) || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  let handleGithub = async () => {
    try {
      const usr = await signInWithPopup(auth, new GithubAuthProvider());
      $user = usr;
      const from = ($location.state && $location.state.from) || "/";
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
</script>

<h3>Login</h3>
<form on:submit={handleSubmit}>
  <input
    type="text"
    name="username"
    placeholder="Username"
    bind:value={email}
  />
  <br />
  <input
    type="password"
    name="password"
    placeholder="Password"
    bind:value={password}
  />
  {#if signup}
    <span on:click={toggleSignup}>Already have an account?</span>
  {:else}
    <span on:click={toggleSignup}>Don't have an account?</span>
  {/if}
  <br />
  <i class="mdi-google" on:click={handleGoogle} /><i
    class="mdi-github"
    on:click={handleGithub}
  />
  <button type="submit">{signup ? "Sign Up" : "Sign In"}</button>
</form>
<div class="p-8 bg-black text-white font-bold">
  {JSON.stringify($user)}
</div>
<h1>{password}</h1>
<h2>{email}</h2>

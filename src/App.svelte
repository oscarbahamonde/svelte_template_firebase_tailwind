<script>
  // @ts-ignore
import { Router, Route, Link } from "svelte-navigator";
  import Tailwindcss from "./Tailwindcss.svelte";
  import Login from "./routes/Login.svelte";
  import Profile from './routes/Profile.svelte';
  import PrivateRoute from "./routes/PrivateRoute.svelte";
  import { user } from "./store";

</script>
<Tailwindcss/>
<Router>
  <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="profile">Profile</Link>
    </nav>
  </header>

  <main>
    <Route path="login">
      <Login />
    </Route>

    <Route path="/">
      <h3>Home</h3>
      <p>Home sweet home...</p>
    </Route>

    <Route path="about">
      <h3>About</h3>
      <p>That's what it's all about!</p>
    </Route>

    <PrivateRoute path="profile" let:location>
      <Profile usr={$user}  />
    </PrivateRoute>
  </main>
</Router>

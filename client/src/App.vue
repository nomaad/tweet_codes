<template>
  <div id="app" class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav float-right">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </nav>
        <h5 class="text-muted">Tweet Coder</h5>
      </div>
    <router-view />
  </div>
</template>

<style>

/* Space out content a bit */
body {
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  background-color:#fff;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-right: 1rem;
  padding-left: 1rem;
}

/* Custom page header */
.header {
  border-bottom: .05rem solid #e5e5e5;
}
/* Make the masthead heading the same height as the navigation */
.header h5 {
  margin-top: 0;
  margin-bottom: 0;
  padding-top:0.5rem;
}

/* Custom page footer */
.footer {
  padding-top: 1.5rem;
  color: #777;
  border-top: .05rem solid #e5e5e5;
}

</style>

<template>
  <div id="app" class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills float-right">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </nav>
        <h3 class="text-muted">Tweet Coder</h3>
      </div>
    <router-view />

  </div>
</template>

<style>

/* Space out content a bit */
body {
  padding-top: 1.5rem;
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
  padding-bottom: 1rem;
  border-bottom: .05rem solid #e5e5e5;
}
/* Make the masthead heading the same height as the navigation */
.header h3 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 3rem;
}

/* Custom page footer */
.footer {
  padding-top: 1.5rem;
  color: #777;
  border-top: .05rem solid #e5e5e5;
}

</style>

<template>


<div class="semantikHtml">
 <header class="header">
   <blockquote>Tile</blockquote> 
  </header>

  <nav class="nav">
    <header>
      navigation
    </header>
    <ul>
      <li> <a href="/js/">JavaScript 1</a></li>
      <li> <a href="/js/">JavaScript 2</a></li>
      <li> <a href="/js/">JavaScript 3</a></li>
    </ul>
  </nav>

  <section class="code">
    <label for="city"><mark>select sity</mark></label>
    <input id="sity" list="sities" name="sity">

    <datalist id="sities">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="number">3</option>
          <option value="moscow">moscow</option>
          <option value="3">america</option>
          <option value="3">paris</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="number">3</option>
          <option value="moscow">moscow</option>
          <option value="3">america</option>
          <option value="3">paris</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="number">3</option>
          <option value="moscow">moscow</option>
          <option value="3">america</option>
          <option value="3">paris</option>
    </datalist>
  </section>

  <section class="exampel">
    <header>
      example block
    </header>
    <div>
      <span>laboriosam illum, nemo quaerat eos non recusandae.</span>
      <aside>Lorem, ipsum dolor.</aside>
    </div>
    <article>
      exclysive text
    </article>
  </section>

  <main class="main">

    <header>main block</header>

    <section class="fone">
      <figure>
        <img src="#" alt="">
        <figcaption>this is 1 figure</figcaption>
      </figure>
    </section>

    <section class="details">
       text <mark>marck</mark> Lorem, ipsum dolor.
       <hr/>
       <details>
         <summary>hello</summary>
       </details>
    </section>

  </main>

  <section class="code">
      <code>
       html html <abbr title="javaScript">js</abbr> css
      </code>
  </section>

  <footer class="footer">
    <address>123@mail.ru</address>
  </footer>
</div>

</template>

<script>

export default {
  
}
</script>


<style lang="css">
body{
  background: rgb(12, 12, 25);
  color: rgb(180, 200, 202);
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
    color: rgb(76, 191, 80);
}
.container{
  margin: 0 3rem;
  padding: 7rem 0;
  max-width: 62rem;
}
.prlimary{
  background: rgb(16, 140, 66);
}
.danger{
  background: rgb(18, 101, 120);
}
.btn{
  padding: 1em 5rem;
  margin: 1rem;
  border-radius: 5px;
  color: aliceblue;
}
.relax{
  background: rgb(100, 120, 140);
}
.text{
  margin: 0 0 4rem 0;
  color: rgb(100, 120, 140);
}
</style>



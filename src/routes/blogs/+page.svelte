<script>
  import {blogs} from '$lib/constants/index.js'
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: left;
    padding-top: 10px;
    max-width: 800px;
  }

  /* Blog post card */
  .blog-card {
    text-align: left;
  }

  /* Blog post title */
  .blog-title {
    font-size: 24px;
    margin: 0;
    color: #333;
  }

  .blog-description {
    font-size: 14px;
    color: #888;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #555;
  }


  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }

    .blog-title {
      font-size: 20px;
    }

    .blog-description {
      font-size: 12px;
    }
  }
</style>

<section>
  <div class="container" >
  </div>
  <div class="container">
    {#each blogs as post (post.link)}
    <div class="blog-card">
      <a href={`${post.link}`} class="blog-title">{post.title}</a>
      <p class="blog-description">{post.date}</p>
    </div>
    {/each}
  </div>
</section>

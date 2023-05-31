export function SearchCard(props) {
  let {id, title, slug, _embedded} = props;
  let imgEmbed = _embedded.self[0]["yoast_head_json"]
    ? _embedded.self[0]["yoast_head_json"].og_image[0].url
    : "/app/assets/favicon.png";

  return `
    <article class="post-card" style="background-image: url('${imgEmbed}'); color:#fff;">
      <h2 style="background-color: rgba(0,0,0,0.5);">${title}</h2>
      <p>
        <a href="#/${slug}" data-id="${id}" style="background-color: rgba(0,0,0,0.7);">Ver publicación</a>
      </p>
    </article>
  `
}
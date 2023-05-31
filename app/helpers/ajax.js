export async function ajax(props) {
  let { url, callbackSuccess} = props;

  await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => callbackSuccess(data))
    .catch(err => {
      let message  = err.statusText || "Ocurrió un error"
      document.getElementById("main").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${message}</p>
      </div>
      `;
      document.querySelector(".loader").style.display = "none";
    })
}
function getData() {
  return fetch(
    "https://cdn.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=R0xhbEL0Ahlh81y60QK3Me6gqMvwB2tUMpl2J9pXI-U&&content_type=nicosStock"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const searchButtonEl = document.querySelector(".button");

      searchButtonEl.addEventListener("submit", (e) => {
        e.preventDefault();

        // ELIMINA LA BÚSQUEDA ANTERIOR
        const cardWrapperEl = document.querySelector(".form");
        while (cardWrapperEl.firstChild) {
          cardWrapperEl.firstChild.remove();
        }

        // FILTRA LOS PRODUCTOS BUSCADOS
        const search = e.target.search.value;

        const searchProduct = data["items"].filter((p) => {
          const filterResults = p.fields.title;
          const results = filterResults.includes(search);
          return results;
        });

        // CREA EL OBJETO
        for (let i = 0; i < data["items"].length; i++) {
          const product = {
            title: searchProduct[i].fields.title,
            pic: data.includes.Asset[i].fields.file.url,
            price: searchProduct[i].fields.price,
          };
          getProducts(product);
        }
      });
    });
}

function getProducts(product = {}) {
  const templateEl = document.querySelector("#template-results");
  const cardWrapperEl = document.querySelector(".card-wrapper");

  templateEl.content.querySelector(".card-title").textContent = product.title;
  templateEl.content.querySelector(".card-img").src = product.pic;
  templateEl.content.querySelector(".card-price").textContent =
    "$" + product.price;

  // AÑADE LOS NUEVOS ELEMENTOS DENTRO DEL CONTENEDOR
  const clone = document.importNode(templateEl.content, true);
  cardWrapperEl.appendChild(clone);

  // INDICA LA CANTIDAD DE RESULTADOS
  const resultsEl = document.querySelector(".general-title");
  resultsEl.textContent = "Resultados: " + cardWrapperEl.childElementCount;
}

export function main() {
  getData();
}

main();

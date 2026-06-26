const availableWorks = [
  {
    title: "Topografia 3316 I",
    technique: "Tinta sobre papel",
    size: "Medidas por confirmar",
    year: "Ano por confirmar",
    status: "Disponible",
    note: "Composicion de lineas, tramas y estructuras organicas en tension.",
    image: "assets/images/watermarked/1.jpg"
  },
  {
    title: "Plano fragmentado",
    technique: "Tinta sobre papel",
    size: "Medidas por confirmar",
    year: "Ano por confirmar",
    status: "Disponible",
    note: "Arquitectura imaginaria construida desde cruces, sombras y ritmo.",
    image: "assets/images/watermarked/2.jpg"
  },
  {
    title: "Campo de lineas",
    technique: "Tinta sobre papel",
    size: "Medidas por confirmar",
    year: "Ano por confirmar",
    status: "Disponible",
    note: "Una pieza expansiva donde la trama se vuelve paisaje interior.",
    image: "assets/images/watermarked/3.jpg"
  },
  {
    title: "Estructura contenida",
    technique: "Tinta sobre papel",
    size: "Medidas por confirmar",
    year: "Ano por confirmar",
    status: "Disponible",
    note: "Formas curvas y geometricas conviven en una superficie compacta.",
    image: "assets/images/watermarked/4.jpg"
  },
  {
    title: "Mapa suspendido",
    technique: "Tinta sobre soporte textil o papel",
    size: "Medidas por confirmar",
    year: "Ano por confirmar",
    status: "Disponible",
    note: "Una forma central parece flotar entre borde, red y gesto.",
    image: "assets/images/watermarked/6.jpg"
  }
];

const archiveWorks = [
  {
    title: "Orden y caos",
    technique: "Tinta sobre papel",
    size: "Medidas por confirmar",
    year: "Ano por confirmar",
    status: "No disponible",
    note: "Dos campos graficos dialogan como variaciones de un mismo sistema.",
    image: "assets/images/watermarked/5.jpg"
  },
  {
    title: "Estudios de trama",
    technique: "Dibujo sobre papel",
    size: "Varias medidas",
    year: "Por confirmar",
    status: "Archivo"
  }
];

const contactEmail = "hola@3316atelier.com";

function inquiryHref(workTitle) {
  const subject = encodeURIComponent(`Consulta de obra - ${workTitle}`);
  const body = encodeURIComponent(
    `Hola, me interesa recibir informacion sobre la obra "${workTitle}".`
  );
  return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

function renderAvailableWorks() {
  const container = document.querySelector("#availableWorks");
  container.innerHTML = availableWorks
    .map(
      (work) => `
        <article class="work-card">
          <a class="art-frame image-frame" href="${work.image}" target="_blank" rel="noreferrer" aria-label="Ver ${work.title} en grande">
            <img src="${work.image}" alt="${work.title}" loading="lazy" />
          </a>
          <div class="work-meta">
            <div class="work-title-line">
              <h3>${work.title}</h3>
              <span class="status">${work.status}</span>
            </div>
            <div class="details">
              <span>${work.technique}</span>
              <span>${work.size} · ${work.year}</span>
              <span>${work.note}</span>
            </div>
            <a class="inquiry-link" href="${inquiryHref(work.title)}">Consultar adquisicion</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderArchiveWorks() {
  const container = document.querySelector("#archiveWorks");
  container.innerHTML = archiveWorks
    .map(
      (work) => `
        <article class="archive-item ${work.image ? "archive-featured" : ""}">
          ${
            work.image
              ? `<a class="archive-image" href="${work.image}" target="_blank" rel="noreferrer" aria-label="Ver ${work.title} en grande">
                  <img src="${work.image}" alt="${work.title}" loading="lazy" />
                </a>`
              : ""
          }
          <div class="archive-copy">
            <strong>${work.title}</strong>
            <span>${work.technique}</span>
            <span>${work.size} · ${work.year}</span>
            ${work.note ? `<span>${work.note}</span>` : ""}
          </div>
          <span class="status">${work.status}</span>
        </article>
      `
    )
    .join("");
}

renderAvailableWorks();
renderArchiveWorks();

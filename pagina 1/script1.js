document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab_btn");
  const contents = document.querySelectorAll(".content");

  // Funzione per mostrare una scheda
  const showTab = (year) => {
      // Nascondi tutti i contenuti
      contents.forEach((content) => content.classList.remove("active"));
      buttons.forEach((button) => button.classList.remove("active"));

      // Mostra il contenuto corrispondente
      const targetContent = document.querySelector(`#content-${year}`);
      const targetButton = document.querySelector(`.tab_btn[data-year="${year}"]`);

      if (targetContent) targetContent.classList.add("active");
      if (targetButton) targetButton.classList.add("active");
  };

  // Imposta la scheda iniziale (es. 2021)
  showTab("2024");

  // Gestisci il clic sui bottoni
  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          const year = button.getAttribute("data-year");
          showTab(year);
      });
  });
});

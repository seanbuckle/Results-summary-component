type DataType = {
  icon: string;
  category: string;
  score: number;
};

window.addEventListener("load", async () => {
  try {
    const response = await fetch("data.json");
    const data: DataType[] = await response.json();

    const ids = ["r", "m", "v", "vi"];

    for (let i = 0; i < data.length; i++) {
      const { icon, category, score } = data[i];
      const imgId = `${ids[i]}Img`;
      const txtId = `${ids[i]}Txt`;
      const scoreId = `${ids[i]}Score`;

      const imgElement = document.getElementById(imgId) as HTMLImageElement;
      imgElement.src = icon;
      document.getElementById(txtId)!.textContent = category;
      document.getElementById(scoreId)!.textContent = score.toString();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

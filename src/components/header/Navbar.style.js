const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
};

export const styles = {
  container: {
    display: viewport.width > 900 ? "flex" : "none",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  imagenes: {
    height: "90%",
  },
  categorias: {
    margin: 10,
    color: "red",
  },
};

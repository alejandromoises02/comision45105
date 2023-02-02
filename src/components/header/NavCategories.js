import React from "react";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "categoria 2" },
    { id: 2, name: "categoria 3" },
    { id: 3, name: "categoria 4" },
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (
          <a key={category.id} style={styles.categorias} href="">
            {category.name}
          </a>
        );
      })}
    </nav>
  );
};

export const styles = {
  categorias: {
    margin: 10,
    color: "red",
  },
};

export default NavCategories;

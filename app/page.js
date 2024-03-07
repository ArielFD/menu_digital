"use client";
import React, { useState } from "react";
import styles from "./page.module.css"; // Importa tus estilos CSS
import Image from "next/image";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([
    {
      name: "Hamburguesa",
      price: 8.99,
      description: "Una deliciosa hamburguesa con queso, lechuga y tomate.",
      image: "/hamburgueza.jpeg",
    },
    {
      name: "Pizza",
      price: 10.99,
      description: "Pizza recién horneada con tus ingredientes favoritos.",
      image: "/descarga.jpeg",
    },
    {
      name: "Ensalada",
      price: 6.99,
      description: "Ensalada fresca con una variedad de vegetales y aderezos.",
      image: "/ensalada.jpeg",
    },
    {
      name: "Sándwich",
      price: 7.99,
      description: "Sándwich clásico con jamón, queso, lechuga y tomate.",
      image: "/sandwish.jpeg",
    },
    // Agrega el resto de elementos del menú aquí...
  ]);

  const toggleItemDetails = (index) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].showDetails = !newMenuItems[index].showDetails;
    setMenuItems(newMenuItems);
  };

  return (
    <div className={styles.menu}>
      <h1>Nuestro Menú</h1>
      <div id="items-container">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => toggleItemDetails(index)}
          >
            <h3>{item.name}</h3>
            <p>Precio: ${item.price.toFixed(2)}</p>
            {item.showDetails && (
              <div className={`${styles["item-details"]}`}>
                <h4>{item.name}</h4>
                <Image src={item.image} width={300} height={300} alt={item.name} />
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

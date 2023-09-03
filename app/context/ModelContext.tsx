"use client";

import { useGLTF } from "@react-three/drei";
import { createContext, useCallback, useState } from "react";

type Color = {
  color: string;
  text: string;
  rgbColor: string;
};

export const colors = {
  SierraBlue: {
    color: "#9BB5CE",
    text: "Sierra Blue",
    rgbColor: "155, 181, 206",
  },
  Gold: {
    color: "#F9E5C9",
    text: "Gold",
    rgbColor: "249, 229, 201",
  },
  AlpineGreen: {
    color: "#505F4E",
    text: "Alpine Green",
    rgbColor: "80, 95, 78",
  },
  DeepPurple: {
    color: "#574f6f",
    text: "Deep Purple",
    rgbColor: "87, 79, 111",
  },
  Red: {
    color: "#A50011",
    text: "Red",
    rgbColor: "165, 0, 17",
  },
  Blue: {
    color: "#215E7C",
    text: "Blue",
    rgbColor: "33, 94, 124",
  },
};

type ChangeColorFunc = (colorTheme: string) => void;

export const ModelContext = createContext<{
  currentColor: Color;
  changeColorFunc: ChangeColorFunc;
  nodes: any;
  materials: [any];
}>({
  currentColor: {
    color: "#9BB5CE",
    text: "Sierra Blue",
    rgbColor: "155, 181, 206",
  },
  changeColorFunc: (colortheme: string) => {},
  nodes: null,
  materials: [null],
});

export const ModelProvider = ({ children }: { children: React.ReactNode }) => {
  //@ts-ignore
  const { nodes, materials } = useGLTF("/3D-Model/scene.gltf");
  const [currentColor, setCurrentColor] = useState(colors["SierraBlue"]);

  const changeColorFunc = useCallback(
    (colorTheme: string) => {
      //@ts-ignore
      materials.Body.color.set(colors[colorTheme].color);
      //@ts-ignore
      setCurrentColor(colors[colorTheme]);
    },
    [materials.Body.color],
  );

  return (
    <ModelContext.Provider
      value={{ currentColor, changeColorFunc, nodes, materials }}
    >
      {children}
    </ModelContext.Provider>
  );
};

useGLTF.preload("/3D-Model/scene.gltf");

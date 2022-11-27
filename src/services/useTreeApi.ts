import { RowModal } from "../interfaces/RowModal";

export const useTreeApi = () => {
  const getTreeData = async () => {
    const response = await fetch("./data/tree.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data: RowModal[] = await response.json();
    return data;
  };

  return { getTreeData };
};

import create from "zustand";

export const useStore = create((set) => ({
  cats: 0,
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  increasePopulationCats: () => set((state: any) => ({ cats: state.cats + 1 })),
}));

import {StateCreator, create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PantryStoreState {
  myPantryList: number[];
  setMyPantryList: (value: number[]) => void;
  addItemToPantry: (item: number) => void;
  removeItemFromPantry: (item: number) => void;
  togglePantryItem: (item: number) => void;
  isItemInPantry: (item: number) => boolean;
}

const initialState: PantryStoreState = {
  myPantryList: [],
  setMyPantryList: () => {},
  addItemToPantry: () => {},
  removeItemFromPantry: () => {},
  togglePantryItem: () => {},
  isItemInPantry: () => false,
};

const usePantryStore = create<PantryStoreState>(
  persist(
    (set, get) => ({
      ...initialState,
      setMyPantryList: (myPantryList: number[]) => {
        set({myPantryList});
      },
      addItemToPantry: (item: number) => {
        set(state => ({myPantryList: [...state.myPantryList, item]}));
      },
      removeItemFromPantry: (item: number) => {
        set(state => ({
          myPantryList: state.myPantryList.filter(i => i !== item),
        }));
      },
      togglePantryItem: (item: number) => {
        set((state: PantryStoreState) => ({
          myPantryList: state.myPantryList.includes(item)
            ? state.myPantryList.filter(i => i !== item)
            : [...state.myPantryList, item],
        }));
      },
      isItemInPantry: (item: number) => {
        return get().myPantryList.includes(item);
      },
    }),
    {
      name: 'myPantry-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ) as StateCreator<PantryStoreState>,
);

export default usePantryStore;

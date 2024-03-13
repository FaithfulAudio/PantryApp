import {StateCreator, create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PantryStoreState {
  myPantryList: number[];
  groceryList: number[];
  setMyPantryList: (value: number[]) => void;
  setMyGroceryList: (value: number[]) => void;
  addItemToPantry: (item: number) => void;
  addItemToGroceryList: (item: number) => void;
  removeItemFromPantry: (item: number) => void;
  removeItemFromGroceryList: (item: number) => void;
  togglePantryItem: (item: number) => void;
  toggleGroceryItem: (item: number) => void;
  isItemInPantry: (item: number) => boolean;
  isItemInGroceryList: (item: number) => boolean;
  moveGroceryItemToPantry: (item: number) => void;
}

const initialState: PantryStoreState = {
  myPantryList: [],
  groceryList: [],
  setMyPantryList: () => {},
  setMyGroceryList: () => {},
  addItemToPantry: () => {},
  addItemToGroceryList: () => {},
  removeItemFromPantry: () => {},
  removeItemFromGroceryList: () => {},
  togglePantryItem: () => {},
  toggleGroceryItem: () => {},
  isItemInPantry: () => false,
  isItemInGroceryList: () => false,
  moveGroceryItemToPantry: () => {},
};

const usePantryStore = create<PantryStoreState>(
  persist(
    (set, get) => ({
      ...initialState,
      setMyPantryList: (myPantryList: number[]) => {
        set({myPantryList});
      },
      setMyGroceryList: (groceryList: number[]) => {
        set({groceryList});
      },
      addItemToGroceryList: (item: number) => {
        set(state => ({groceryList: [...state.groceryList, item]}));
      },
      removeItemFromGroceryList: (item: number) => {
        set(state => ({
          groceryList: state.groceryList.filter(i => i !== item),
        }));
      },
      moveGroceryItemToPantry: (item: number) => {
        set(state => {
          const newGroceryList = state.groceryList.filter(i => i !== item);

          const isAlreadyInPantry = state.myPantryList.includes(item);
          const newPantryList = isAlreadyInPantry
            ? state.myPantryList
            : [...state.myPantryList, item];

          return {
            groceryList: newGroceryList,
            myPantryList: newPantryList,
          };
        });
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
      toggleGroceryItem: (item: number) => {
        set((state: PantryStoreState) => ({
          groceryList: state.groceryList.includes(item)
            ? state.groceryList.filter(i => i !== item)
            : [...state.groceryList, item],
        }));
      },
      isItemInPantry: (item: number) => {
        return get().myPantryList.includes(item);
      },
      isItemInGroceryList: (item: number) => {
        return get().groceryList.includes(item);
      },
    }),
    {
      name: 'myPantry-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ) as StateCreator<PantryStoreState>,
);

export default usePantryStore;

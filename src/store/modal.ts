import { defineStore } from 'pinia';

interface ModalState {
  isShown: boolean;
  product_id: number;
}

export const useModalWindow = defineStore({
  id: 'modal',

  state: (): ModalState => ({
    isShown: false,
    product_id: 0,
  }),

  getters: {
    getProductId(): number {
        return this.product_id
    },

    getShownStatus(): boolean { 
        return this.isShown
    }
  },

  actions: {
    updateState() {
        this.isShown = !this.isShown;
    },

    updateProductId(id: number) {
        this.product_id = id;
    }
  },
});

<template>
    <div class="window">
        <div class="card md:card-side bordered">
            <figure class="p-8 image-field">
                <img
                    :src="product.image"
                    alt="Card Image"
                    class="object-contain w-full h-48"
                />
            </figure> 
            <div class="card-body">
                <h2 class="card-title">
                    <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
                </h2>
                <p>{{ toCurrency(product.cost) }}</p>
                <div class="card-actions">
                    <div class="btn-group">
                        <button class="btn btn-primary" @click="cartStore.remove(product.id)">-</button>
                        <button class="btn btn-ghost no-animation">{{ product.quantity }}</button>
                        <button class="btn btn-primary" @click="cartStore.add(product.id); ModalWindow.updateProductId(product.id)">+</button>
                    </div>
                </div>
            </div>
        </div>  
        <button class="btn" @click="modalWindow.updateState">Close</button> 
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useCartStore } from "../store/cart"
import { useModalWindow } from "../store/modal"
import Search from './Search.vue'
import { useProductStore } from '../store/products';
import { toCurrency } from '../shared/utils'
const ModalWindow = useModalWindow();

const modalWindow = useModalWindow();
const productStore = useProductStore();
const cartStore = useCartStore()

const count = computed(() => cartStore.count)

const product = computed(() => cartStore.getCart);
</script>

<style scoped>
.window {
    position: fixed;
    width: 50%;
    top: 10%;
    height: 80%;
    background-color: white;
    z-index: 100;
    left: 25%;
    border-radius: 12px;
    text-align: center;
    border: 2px solid cyan;
}

/* .btn {
    position: absolute;
    bottom: 10%;
    margin: 0 auto;
} */
</style>

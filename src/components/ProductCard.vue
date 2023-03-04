<template>
    <div class="card bordered product-card">
        <figure class="px-8 pt-10">
            <img
                :src="product.image"
                alt="Card Image"
                class="object-contain w-full h-64"
            />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                <router-link class="link link-hover" :to="`/product/${product.id}`">{{ product.title }}</router-link>
            </h2>
            <p>{{ toCurrency(product.price) }}</p>
            <div class="justify-end card-actions">
                <button class="btn btn-primary" @click="cartStore.add(product.id); modalWindow.updateProductId(product.id); modalWindow.updateState();">Add to Cart</button>
            </div>
        </div>
    </div>   
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cart';
import type { Product } from '../store/products'
import { toCurrency } from '../shared/utils'
import { useModalWindow } from '../store/modal';

const cartStore = useCartStore();
const modalWindow = useModalWindow();

defineProps<{
    product: Product
}>();
</script>

<style>
.product-card {
    background-color: white;
}
</style>
<template>
    <div class="mx-auto max-w-md prose">
        <h1>Modifier le lien</h1>
        <GoBack />
        
        <form>
            <label>
                <div>
                    Lein Court
                </div>
                <input type="text">
            </label>
            <label>
                <div>
                    Lien Complet
                </div>
                <input type="text">
            </label>
            <button>Soumettre</button>
        </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>
    label {
        @apply block mb-2 text-sm font-medium text-gray-900;
    }

    input{
        @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
    }
  
  </style>
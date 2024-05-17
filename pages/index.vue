<template>
    <div>
        <nav class="flex justify-between items-center prose mb-4">
      <h1 class="mb-0">Mes liens</h1>
            <Searchinput :model-value="search"></Searchinput>
            <NuxtLink to="/links/create" class="no-underline px-4 py-2 text-white bg-gray-600  hover:bg-gray-800 rounded-md transition"></NuxtLink>
        </nav>

      <table class="w-full border text-sm text-left text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th>Lien Complet</th>
                <th>Lien Court</th>
                <th>Nbr. Vues</th>
                <th>Supprimer</th>
                <th>Editer</th>
                <th aria-label="Rafraichir">
                    <Icon name="mdi:refreshs"></Icon>
                </th>
            </tr>
        </thead>

        <tbody>
            <tr c v-for="link in links" :key="link.id"> 
                <td>
                    <a :href="link.full_links" target="_blank" >
                        {{link.full_links}}
                    </a>
                </td>
                <td>
                    <a :href="`${useRuntimeConfig().public.appUrl}/${link.short_links}`" target="_blank">
                        {{ `${useRuntimeConfig().public.appUrl.replace(/^http(s?):\/\//, "")}/${link.short_links}` }}
                    </a>
                </td>
                <td>
                    <a href="#">
                        {{link.views}}
                    </a>
                </td>
                <td>
                    <a href="#">
                       <button>
                           <Icon name="mdi:trash"></Icon>
                       </button>
                    </a>
                </td>
                <td>
                    <NuxtLink :to="`/links/${link.id}`">
                        <Icon name="pepicons-pencil:pen"></Icon>
                    </NuxtLink>
                </td>
                <td>
                    <a href="#">
                        {{link.full_links}}
                    </a>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  const links = [
   {
    'full_links' : 'qsdkfmqs',
    'id': 1,
    'short_links':'sdfqdfqsdf',
    'views':'dfsdqfsdf',
   },
   {
    'full_links' : 'qsdkfmqs',
    'id': 2,
    'short_links':'sdfqdfqsdf',
    'views':'dfsdqfsdf',
   },
   {
    'full_links' : 'qsdkfmqs',
    'id': 3,
    'short_links':'sdfqdfqsdf',
    'views':'dfsdqfsdf',
   },
   {
    'full_links' : 'qsdkfmqs',
    'id': 4,
    'short_links':'sdfqdfqsdf',
    'views':'dfsdqfsdf',
   },
  ]

  let search = ref();
  </script>
  
  <style scoped>
  th{
    @apply px-6 py-3
  }
  </style>
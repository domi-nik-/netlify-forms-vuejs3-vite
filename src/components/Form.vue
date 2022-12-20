<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const formData = ref({
    firstname: "First Name",
    lastname: "Last Name" 
});

function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

async function handleSubmit(data) {
    //await wait(3000);
    console.log(data);
    fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode ({
        "form-name": "main-form",
        "firstname": data.firstname,
        "lastname": data.lastname
    }),
    })
    .then(() => router.replace({ path: '/success' })) // forward to another page
    .catch((error) => alert(error));
} 

</script>

<template>
<FormKit type="form" 
    name="main-form"   
    :value="formData" 
    @submit="handleSubmit"
    submit-label="Submit">
    <FormKit
      type="text"
      name="firstname"
      label="First Name"
    />
    <FormKit
    type="text"
    name="lastname"
    label="Last Name"
    />
</FormKit>    
</template>

<style>

</style>
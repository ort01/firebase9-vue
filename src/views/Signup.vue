<template>
  <form @submit.prevent="handleSubmit">
    <h2>Sign up</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Sign up</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSignUp from "@/composables/useSignUp"

export default {
  setup() {

    //variables
    const email = ref('')
    const password = ref('')

    //composables
    const { signUp, error } = useSignUp()

    //router
    const router = useRouter()

    //functions
    const handleSubmit = async () => {
      await signUp(email.value, password.value)

      if (!error.value) {
        router.push('/')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>
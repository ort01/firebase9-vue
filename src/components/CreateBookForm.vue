<template>
  <form @submit.prevent="handleSubmit">
    <h3>Add a New Book</h3>

    <label for="title">Book title:</label>
    <input type="text" name="title" v-model="title" required>

    <label for="author">Book author:</label>
    <input type="text" name="author" v-model="author" required>

    <button>Add Book</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useCollection from '@/composables/useCollection'
import getUser from '../composables/getUser'

export default {
  setup() {
    const title = ref('')
    const author = ref('')

    const { addDocument } = useCollection("books")
    const { user } = getUser()

    const handleSubmit = async () => {
      await addDocument({
        title: title.value,
        author: author.value,
        isFav: false,
        userID: user.value.uid
      })

      title.value = ""
      author.value = ""
    }

    return { handleSubmit, title, author }
  }
}
</script>

<style>
form {
  padding: 10px;
  margin-top: 10px;
  border: 1px dashed #c3c8ce;
}
</style>
<template>
  <div id="note-editor">
    <textarea :value="activeNoteText" @input="editNote" class="form-control">
    </textarea>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
      ...mapGetters({
        activeNoteText: 'text'
      })
    },
    methods:{
     editNote(e) {
        this.$store.dispatch('editNote', e.target.value)
        }
    }  
}
</script>

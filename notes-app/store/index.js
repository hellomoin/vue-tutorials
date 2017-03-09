import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {}
}

const mutations = {
    ADD_NOTE(state){
        const newNote = {
            text: 'My new note',
            favorite: false
        }
    },
    EDIT_NOTE(state, text){
        state.activeNote.text = text
    },
    DELETE_NOTE (state) {
        state.notes.$remove(state.activeNote)
        state.activeNote = state.notes[0]
    },
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },
    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note
    }
}

export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}

export default new Vuex.Store({
    state,
    mutations
})
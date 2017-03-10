import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {
        text: '',
        favorite: false
    }
}

const mutations = {
    ADD_NOTE(state){
        const newNote = {
            text: 'My new note',
            favorite: true
        }
    state.notes.push(newNote)
    state.activeNote = newNote        
    },
    EDIT_NOTE(state, text){
        state.activeNote.text = text
    },
    DELETE_NOTE (state) {
        const index = state.notes.indexOf(state.activeNote)
        state.notes.splice(index,1)
        state.activeNote = state.notes[index > 0 ? index - 1 : 0]
    },
    TOGGLE_FAVORITE (state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },
    SET_ACTIVE_NOTE (state, note) {
        state.activeNote = note
    }
}

const getters = {
        favorite(state) {
            return state.activeNote.favorite
        },
        notes(state){
            return state.notes
        },
        activeNote(state){
            return state.activeNote
        },
        text(state){
            return state.activeNote.text
        }
    }

const actions = {
    addNote(context){
        context.commit('ADD_NOTE')
    },
    editNote(context,text){
        context.commit('EDIT_NOTE', text)
    },
    deleteNote(context){
        context.commit('DELETE_NOTE')
    },
    toggleFavorite(context){
        context.commit('TOGGLE_FAVORITE')
    },
    setActiveNote(context, note){
        context.commit('SET_ACTIVE_NOTE', note)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
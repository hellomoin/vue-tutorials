<template>
    <div id="preview" class="col-xs-12 col-md-6">
        <div class="panel panel-default">
            <div class="panel-body">
                <article class="markdown-body">
                    <div v-html="previewData"></div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Preview',
    props:{
        previewData: ''
    },
    data(){
        return {
        }
    }

}
</script>
<style>
#preview {
    height: 500px;
    max-height: 500px;
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>
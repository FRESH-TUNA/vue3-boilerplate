<template>
    <BasicTemplate>
        <template v-slot:main>
            <QuillEditor v-model:content="content" v-model:contentType="contentType" :modules="modules" :options="options" theme="snow" toolbar="full" />
            <p></p>
            {{ content }}
            <v-btn @click="submit">제출하기</v-btn>
            <br>
                {{ resData }}
            <div v-html="resData"></div>
        </template>
    </BasicTemplate>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import BlotFormatter from 'quill-blot-formatter'
import ImageUploader from "quill-image-uploader"
import axios from 'axios'

import BasicTemplate from '@/templates/BasicTemplate.vue';

export default {
  name: 'EditorExample',
  components: {
    QuillEditor,
    BasicTemplate
  },
  methods: {
    submit: function () {
      axios.post("http://localhost:8081/posts", {'content': this.content})
      .then(res => {
        this.resData = res.data
      })
    },
    test: function () {
      axios.get("http://localhost:8081/")
      .then(res => {
        console.log(res.data);
      })
    }
  },
  setup: () => {
    const modules = [
      {
        name: 'blotFormatter',  
        module: BlotFormatter, 
        options: {/* options */}
      },
      {
        name: 'imageUploader',
        module: ImageUploader,
        options: {
          upload: file => {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append("file", file);
              axios.post('http://localhost:8081/files', formData)
              .then(res => {
                resolve(res.data)
              })
              .catch(err => {
                  reject("upload failed")
                  console.error("error: ", err)
                }
              )
            });
          }
        }
      }
    ]
    const contentType = 'html'
    return { modules, contentType }
  },
  data: () => ({
    resData: 'init',
    content: '',
    // type: 'html',
    options: {
        debug: 'warn',
        modules: {
          toolbar: [],
        },
        placeholder: 'Insert here.',
        theme: 'snow',
      }
  }),
}
</script>

<style>

</style>
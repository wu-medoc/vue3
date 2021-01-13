<template>
    <div id="blog-posts-events-demo">
        <div>
            <blog-post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            v-on:enlarge-text="postFontSize += $event"
            >
                <div class="blog-post">
                    <h3 :style="{ fontSize: postFontSize + 'em' }">{{ post.title }}</h3>
                    <button v-on:click="onEnlargeText(0.1)">
                        Enlarge text
                    </button>
                    <div v-html="post.content"></div>
                </div>
            </blog-post>
        </div>

    </div>
</template>
<script>
export default {
  name: 'Blog',
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      postFontSize: 0.5
    }
  },
  props: ['post'],
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>

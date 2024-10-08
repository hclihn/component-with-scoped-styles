/*global Vue */
var set_style_mixin = {
  mounted() {
    if (this.$options.styles) {
      console.log(`Added styles to Component ${this.$options.name}`);
      this.$el.insertAdjacentHTML(
        "beforebegin",
        `<style scoped>${this.$options.styles}</style>`
      );
    }
  }
};

Vue.component("tab-posts", {
  mixins: [set_style_mixin],
  data: function () {
    return {
      posts: [
        {
          id: 1,
          title: "Cat Ipsum",
          content:
            "<p>Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around</p>"
        },
        {
          id: 2,
          title: "Hipster Ipsum",
          content:
            "<p>Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang.</p>"
        },
        {
          id: 3,
          title: "Cupcake Ipsum",
          content:
            "<p>Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan.</p>"
        }
      ],
      selectedPost: null
    };
  },
  template: `
  	<div class="posts-tab">
      <ul class="posts-sidebar">
        <li
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:class="{ selected: post === selectedPost }"
					v-on:click="selectedPost = post"
        >
          {{ post.title }}
        </li>
      </ul>
      <div class="selected-post-container">
      	<div 
        	v-if="selectedPost"
          class="selected-post"
        >
          <h3>{{ selectedPost.title }}</h3>
          <div v-html="selectedPost.content"></div>
        </div>
        <strong v-else>
          Click on a blog title to the left to view it.
        </strong>
      </div>
    </div>
  `,
  styles: `
  .posts-sidebar {
    max-width: 40vw;
    margin: 0;
    padding: 0 10px 0 0;
    list-style-type: none;
    border-right: 1px solid #ccc;
  }
  .posts-sidebar li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
  }
  .posts-sidebar li:hover {
    background: #fff0f0;
  }
  .posts-sidebar li.selected {
    background: lightblue;
  }
  .selected-post-container {
    padding-left: 10px;
  }
  .selected-post > :first-child {
    margin-top: 0;
    padding-top: 0;
  }
  `
});

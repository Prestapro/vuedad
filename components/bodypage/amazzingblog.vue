<template>
	<div class="amazzingblog blocks displayHome">
    <div class="post-block block grid-view container" data-id="1">
       <h2 class="title_main_section"> <a :href="ourBlog.main.href" :title="ourBlog.main.title"> {{ourBlog.main.name}} </a></h2>
        <div class=" ">
            <div class="post-list grid row">
                <div class="post-item-wrapper col-xs-4 first-in-line">
                    <div class="post-item has-date">
                        <div class="post-item-cover">
                            <a :href="ourBlog.left.href"> <img :src="ourBlog.left.img" :alt="ourBlog.left.alt"> </a> <a :href="ourBlog.left.href" :title="ourBlog.left.title" class="item-readmore btn button white_btn"> {{ourBlog.left.read}} </a></div>
                        <div class="post-content">
                            <h3 class="post-item-title overflow-ellipsis" style=""> <a :href="ourBlog.left.href"> {{ourBlog.left.name}} </a></h3>
                            <div class="post-item-content" style="">{{ourBlog.left.text}}</div>
                            <div class="post-item-footer clearfix">
                                <div class="post-item-infos"> <span class="post-item-info post-item-date"> <i class="icon-clock-o"></i><div class="d">{{ourBlog.left.date.d}}</div><div class="m">{{ourBlog.left.date.m}}</div><div class="y">{{ourBlog.left.date.y}}</div> </span>
                                    <a :href="ourBlog.left.href" class="post-item-info comments-num"> <i class="icon-comment-o"></i> 1 </a> <span class="post-item-info author"> <i class="icon-pencil"></i> {{ourBlog.left.user}} </span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-item-wrapper col-xs-4">
                    <div class="post-item has-date">
                        <div class="post-item-cover">
                            <a :href="ourBlog.centr.href"> <img :src="ourBlog.centr.img" :alt="ourBlog.centr.alt"> </a> <a :href="ourBlog.centr.href" :title="ourBlog.centr.title" class="item-readmore btn button white_btn"> {{ourBlog.centr.read}} </a></div>
                       <div class="post-content">
                            <h3 class="post-item-title overflow-ellipsis"> <a :href="ourBlog.centr.href"> {{ourBlog.centr.name}} </a></h3>
                            <div class="post-item-content">{{ourBlog.centr.text}}</div>
                            <div class="post-item-footer clearfix">
                               <div class="post-item-infos"> <span class="post-item-info post-item-date"> <i class="icon-clock-o"></i><div class="d">{{ourBlog.centr.date.d}}</div><div class="m">{{ourBlog.centr.date.m}}</div><div class="y">{{ourBlog.centr.date.y}}</div> </span>
                                    <a :href="ourBlog.centr.href" class="post-item-info comments-num"> <i class="icon-comment-o"></i> 0 </a> <span class="post-item-info author"> <i class="icon-pencil"></i>{{ourBlog.centr.user}}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-item-wrapper col-xs-4">
                    <div class="post-item has-date">
                        <div class="post-item-cover">
                            <a :href="ourBlog.right.href"> <img :src="ourBlog.right.img" :alt="ourBlog.right.alt"> </a> <a :href="ourBlog.right.href" :title="ourBlog.right.title" class="item-readmore btn button white_btn"> {{ourBlog.right.read}} </a></div>
                        <div class="post-content">
                            <h3 class="post-item-title overflow-ellipsis" style=""> <a :href="ourBlog.right.href"> {{ourBlog.right.name}} </a></h3>
                            <div class="post-item-content" style="">{{ourBlog.right.text}}</div>
                            <div class="post-item-footer clearfix">
                                <div class="post-item-infos"> <span class="post-item-info post-item-date"> <i class="icon-clock-o"></i><div class="d">{{ourBlog.right.date.d}}</div><div class="m">{{ourBlog.right.date.m}}</div><div class="y">{{ourBlog.right.date.y}}</div> </span>
                                    <a :href="ourBlog.right.href" class="post-item-info comments-num"> <i class="icon-comment-o"></i> 0 </a> <span class="post-item-info author"> <i class="icon-pencil"></i> {{ourBlog.right.user}} </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      ourBlog:
      {
        left: {
          name: 'Lorem ipsum dolore',
          alt: 'Lorem ipsum dolores',
          title: 'Read more',
          text: 'Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred to other...',
          img: './src/components/bodypage/amazzingblog/img/left.jpg',
          href: '',
          read: 'Read more',
          hyper: '',
          date: {d: '15', m: 'JUL', y: '2016'},
          user: 'System Administrator'
        },
        centr: {
          name: 'Lorem ipsum dolore',
          title: 'Read more',
          alt: 'Lorem ipsum dolore',
          text: 'Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred to other..',
          img: './src/components/bodypage/amazzingblog/img/centr.jpg',
          href: '',
          read: 'Read more',
          hyper: '',
          date: {d: '15', m: 'JUL', y: '2016'},
          user: 'System Administrator'
        },
        right: {
          name: 'Lorem ipsum dolore',
          title: 'Read more',
          alt: 'Lorem ipsum dolore',
          text: 'Education is the process of facilitating learning. Knowledge, skills, values, beliefs, and habits of a group of people are transferred to other...',
          img: './src/components/bodypage/amazzingblog/img/right.jpg',
          href: '',
          read: 'Read more',
          hyper: '',
          date: {d: '15', m: 'JUL', y: '2016'},
          user: 'System Administrator'
        },
        main: {
          name: 'Our blog',
          title: 'View all',
          href: ''
        }
      }
    }
  }
}
</script>

<style>
  @import 'amazzingblog/css/front2.css';
  @import 'amazzingblog/css/bx-styles.css';
  @import 'amazzingblog/css/category.css';
  @import 'amazzingblog/css/post.css';
</style>

<template>
  <div>
    <vs-page-banner :cover="cover">
      <template v-slot:title>
        {{title}}
      </template>
      <template v-slot:subtitle>
        <div class="box">
        <div class="user-box">
          <img class="user-avatar" :src="sponsor_info.avatar" alt/>
          <div class="user-nick">{{sponsor_info.nick}}</div>
          发起
        </div>
        <div class="join">{{vote_times}}人参与</div>
        </div>
      </template>
    </vs-page-banner>

  </div>
</template>

<script>
  import {PageBanner, PageDescription} from '../../../lib'
  export default {
    name: "page-banner",
    components:{
      'vs-page-banner':PageBanner,
      'vs-page-description': PageDescription
    },
    setup() {
      const vote_times = 1234;
      const title = "这周末pick什么小零食度过？";
      const sponsor_info = {
        avatar:
          "https://static1.thefair.net.cn/qustionaires/image/20200706/eabe8d62e4da467437f8754ed390e777.jpg",
        nick: "123"
      };
      const cover = "https://static1.thefair.net.cn/qustionaires/image/20200706/eabe8d62e4da467437f8754ed390e777.jpg";
      return {
        vote_times,
        sponsor_info,
        title,
        cover
      }
    }
  }
</script>

<style lang="scss" scoped>
  .description{
    padding: 1.5rem 1.7rem;
    opacity: 0.8;
    font-family: "FZLTXIHJW";
    font-size: 1.4rem;
    line-height: 1.5;
    text-align: justify;
    color: #444444;
  }
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "FZLTZCHJW";

    .user-box {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      letter-spacing: 0.4rem;
      color: #ffffff;

      .user-avatar {
        width: 2.0rem;
        height: 2.0rem;
        border-radius: 50%;
        border: solid 0.5rem #ffffff;
        margin-right: .5rem;
      }

      .user-nick {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 16.3rem;
      }
    }

    .join {
      font-size: 1.2rem;
      letter-spacing: 0.34rem;
      color: #ffffff;
      font-family: "FZLTXIHJW";
    }
  }
</style>

<template>
  <div class="page">
    <div class="button" @click="showPop">弹出Modal</div>

    <vs-modal
      v-model="show"
      mask-closable
      @confirm="handleModalConfirm"
      @cancel="handleModalCancel"
    >
      确认后无法回退，是否确认选择？
    </vs-modal>

    <div class="button" @click="showPop1">弹出Modal1</div>

    <vs-modal
      v-model="show1"
      @confirm="handleModal1Confirm"
      @cancel="handleModal1Cancel"
    >
      <div style="width: 219px;">
        选择新用户登录，将无法同步老账号数据，是否确认选择新用户登录。
      </div>
    </vs-modal>

    <div class="button" @click="showPop2">弹出长Modal(用户协议)</div>

    <vs-modal
      v-model="show2"
      @confirm="handleModal2Confirm"
      @cancel="handleModal2Cancel"
      mask-closable
      :confirm-button-visible="false"
      :default-content-style="false"
    >
      <div class="modal">
        <div class="title">
          服务协议及隐私条款
        </div>
        <div class="content">
          <p> 1. 活动时间：4月7日至4月14日，每晚18:00 -20:00
          </p>
          <p> 2. 领奖时间：4月14日0:00至4月21日23:59:59
          </p>
          <p> 3. 温馨提示：
          </p>
          <p> 现金将直接由活动主办方提现到微信零钱，参与者参加活动时，请尽量选择微信登录，否则可能无法收到现金。
          </p>
          <p> 4. 玩法介绍：参与者组队玩“合成猫罐头”游戏，按照自己队伍合成的总分数来衡量胜负，赢取红包。
          </p>
          <p> - 点击“开始游戏”即可参加游戏。在参加前，请仔细阅读用户协议。如玩家参与活动，即表示接受用户协议。
          </p>
          <p> - 玩家可以在18:00-20:00之间进入游戏，每人每天可以玩1次，一次游戏时间为5分钟
          </p>
          <p> - 进入活动后，参与者将选择加入战队：鸡肉罐头队 VS 牛肉罐头队。队名本身不会影响活动结果。
          </p>
          <p> - 游戏前，欢迎大家分享游戏给好友，加入自己的战队。拉越多人加入战队，获胜几率越大
          </p>
          <p> - 黄老板工厂只有一万个“工位”，同时在线玩游戏的人数不能超过一万人
          </p>
          <p> - 游戏中，玩家需要将猫咪食物按顺序两两相加合成为猫罐头，猫咪食物包括：猫粮、猫条、冻干、鱼干、鸡胸肉、牛肉、猫薄荷、猫草冻、猫罐头
          </p>
          <p> - 游戏中，屏幕上方会有一根警戒线，当食物高度快要达到警戒线时会出现提示；当食物高度超过警戒线的时候就会被判定失败，游戏结束
          </p>
          <p> - 游戏中，玩家会看到自己的分数以及所属队伍以及对方队伍的分数变化，即使自己游戏失败，但因为队伍人多或者其他玩家表现良好，也可能获胜，赢得现金红包
          </p>
          <p> - 如果玩家中断游戏，游戏倒计时将会继续
          </p>
          <p> - 游戏结束后，中奖玩家将收到开眼实时推送，告知自己的中奖金额。活动结束后一周内，玩家将会收到现金红包
          </p>
          <p> - 每场游戏结束后，玩家自己的分数和战队分数都会清空
          </p>
          <p> - 获胜队伍的红包金额将会随队伍中的分数排序，分数越高，分到的钱越多
          </p>
          <p> 5. 本活动最终解释权归北京牡蛎柠檬科技文化有限公司所有。
          </p>
        </div>
      </div>
    </vs-modal>
  </div>
</template>

<script>
import {Modal} from "../../../lib";

export default {
  name: "drawer",
  components: {
    'vs-modal': Modal,
  },
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
    }
  },
  methods: {
    showPop() {
      this.show = true;
    },
    showPop1() {
      this.show1 = true;
    },
    showPop2() {
      this.show2 = true;
    },
    handleModalConfirm() {
      this.show = false;
    },
    handleModalCancel() {
      this.show = false;
    },
    handleModal1Confirm() {
      this.show1 = false;
    },
    handleModal1Cancel() {
      this.show1 = false;
    },
    handleModal2Confirm() {
      this.show2 = false;
    },
    handleModal2Cancel() {
      this.show2 = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-item {
  padding: 22px 0 21px;
  border-bottom: solid 1px #eeeeee;

  &.last {
    border-bottom: none;
  }
}

.button {
  width: 100px;
  text-align: center;
  margin: 30px;
  padding: 10px;
  color: #fafafa;
  background-color: #30302f;
}

.item {
  max-height: 300px;
  overflow: auto;
}

.modal {
  height: 497px;
  overflow-y: scroll;
  padding: 19px 17px;

  .title {
    font-family: PingFang TC;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #000000;
  }

  .content {
    margin-top: 38px;
    font-family: PingFang TC;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    p {
      margin-bottom: 18px;
    }
  }
}
</style>

<template>
  <div class="card-container">
    <Card v-for="card in cards" v-bind="card" :key="card.id" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'CardContainer',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title:
            'Ipsam ab possimus exercitationem distinctio omnis est qui reiciendis animi voluptas temporibus qui non ipsa corrupti neque consectetur iste et blanditiis nam architecto occaecati repellat ex molestiae consequuntur consectetur odit dolorem tenetur nesciunt praesentium aut porro architecto maiores vel vel laboriosam sed dolore in laudantium adipisci iure aut consequatur quae est voluptates molestiae aut repellendus dolores ullam dolorum vel alias accusamus quia consectetur eaque laboriosam cupiditate et facilis officiis.',
          contents:
            'R의 집 앞을 지날 때에도 R의 집에 대하여서는 외면하였소. 이 모양으로 말을 하였소. "어머니! 이를 어쩌우? 이걸 좀 보아요." 하고 순임은 뛸 듯이 제 어머니와 저는 그 갸륵하신 정신을 몰라보고 오해하였습니다. 어머니는 질투하시고 저는 시기하였습니다. 이것이 얼마나 비참한 일입니까. 저는 정임의 짐에 지니고 온 일기를 보다가 문 밖에서 내 아내의 얼굴이 달빛에 비친 양을 나는 잘 알지요. 더구나 우리들이 살아 남는대야 앞길이 기구하지 평탄할 리는 없지 아니해요? 그래서 나는 단연히 사직을 하고 내가 그러니까.',
          'category-id': 1,
          'user-id': 43,
          'created-at': '2019-11-11T06:00:52.000000Z',
          'updated-at': '2019-11-11T06:00:52.000000Z'
        },
        {
          id: 1,
          title:
            'Ipsam ab possimus exercitationem distinctio omnis est qui reiciendis animi voluptas temporibus qui non ipsa corrupti neque consectetur iste et blanditiis nam architecto occaecati repellat ex molestiae consequuntur consectetur odit dolorem tenetur nesciunt praesentium aut porro architecto maiores vel vel laboriosam sed dolore in laudantium adipisci iure aut consequatur quae est voluptates molestiae aut repellendus dolores ullam dolorum vel alias accusamus quia consectetur eaque laboriosam cupiditate et facilis officiis.',
          contents:
            'R의 집 앞을 지날 때에도 R의 집에 대하여서는 외면하였소. 이 모양으로 말을 하였소. "어머니! 이를 어쩌우? 이걸 좀 보아요." 하고 순임은 뛸 듯이 제 어머니와 저는 그 갸륵하신 정신을 몰라보고 오해하였습니다. 어머니는 질투하시고 저는 시기하였습니다. 이것이 얼마나 비참한 일입니까. 저는 정임의 짐에 지니고 온 일기를 보다가 문 밖에서 내 아내의 얼굴이 달빛에 비친 양을 나는 잘 알지요. 더구나 우리들이 살아 남는대야 앞길이 기구하지 평탄할 리는 없지 아니해요? 그래서 나는 단연히 사직을 하고 내가 그러니까.',
          'category-id': 1,
          'user-id': 43,
          'created-at': '2019-11-11T06:00:52.000000Z',
          'updated-at': '2019-11-11T06:00:52.000000Z'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  float: right;
  width: $card-container-width;

  @media (max-width: $layout-breakpoint-mobile) {
    width: 100%;
  }
}
</style>

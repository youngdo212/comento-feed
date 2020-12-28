const INITIAL_STATE = {
  post: {
    id: 1,
    title:
      'Ipsam ab possimus exercitationem distinctio omnis est qui reiciendis animi voluptas temporibus qui non ipsa corrupti neque consectetur iste et blanditiis nam architecto occaecati repellat ex molestiae consequuntur consectetur odit dolorem tenetur nesciunt praesentium aut porro architecto maiores vel vel laboriosam sed dolore in laudantium adipisci iure aut consequatur quae est voluptates molestiae aut repellendus dolores ullam dolorum vel alias accusamus quia consectetur eaque laboriosam cupiditate et facilis officiis.',
    contents:
      'R의 집 앞을 지날 때에도 R의 집에 대하여서는 외면하였소. 이 모양으로 말을 하였소. "어머니! 이를 어쩌우? 이걸 좀 보아요." 하고 순임은 뛸 듯이 제 어머니와 저는 그 갸륵하신 정신을 몰라보고 오해하였습니다. 어머니는 질투하시고 저는 시기하였습니다. 이것이 얼마나 비참한 일입니까. 저는 정임의 짐에 지니고 온 일기를 보다가 문 밖에서 내 아내의 얼굴이 달빛에 비친 양을 나는 잘 알지요. 더구나 우리들이 살아 남는대야 앞길이 기구하지 평탄할 리는 없지 아니해요? 그래서 나는 단연히 사직을 하고 내가 그러니까.',
    'category-id': 1,
    'user-id': 43,
    'created-at': '2019-11-11T06:00:52.000000Z',
    'updated-at': '2019-11-11T06:00:52.000000Z',
    category: {
      id: 1,
      name: 'apple',
      'created-at': '2019-11-11T06:00:49.000000Z',
      'updated-at': '2019-11-11T06:00:49.000000Z'
    },
    reply: [
      {
        id: 450,
        'user-id': 289,
        parent: 1,
        contents:
          'Y박사는 이윽히 생각한 끝에, "애기도 인제는 젖떨어질 때도 되었으니 어느 새너토리엄에 좀 가 계시지요. 일본이라도 두어 달만 계시면 좋으실 것입니다." 이렇게 말하였소. Y박사가 돌아간 뒤에 나는 정임의 일기를 보다가 이러한 구절을 발견하였습니다. 선생님. 저는.',
        'created-at': '2019-11-11T06:01:26.000000Z',
        'updated-at': '2019-11-11T06:01:26.000000Z',
        user: {
          id: 289,
          name: 'Lynn Schumm',
          email: 'roberts.eldon@example.com',
          'email-verified-at': '2019-11-11T06:00:46.000000Z',
          'created-at': '2019-11-11T06:00:46.000000Z',
          'updated-at': '2019-11-11T06:00:46.000000Z'
        }
      },
      {
        id: 463,
        'user-id': 203,
        parent: 1,
        contents:
          'K라는 전속 간호부에게로 가서 자세한 말을 물어 볼 양으로 호텔 현관 앞이 보이는 꼭대기로 올라갔소. 현관을 떠난 자동차 하나가 전찻길로 나서서는 북을 향하고 달아나서 순식간에 그 꽁무니에 달린 붉은 불조차 스러져 버리고 말았소. 아아, 다시 볼지 모르는 조선의.',
        'created-at': '2019-11-11T06:01:26.000000Z',
        'updated-at': '2019-11-11T06:01:26.000000Z',
        user: {
          id: 203,
          name: 'Prof. Cory Schuppe',
          email: 'rschoen@example.com',
          'email-verified-at': '2019-11-11T06:00:46.000000Z',
          'created-at': '2019-11-11T06:00:46.000000Z',
          'updated-at': '2019-11-11T06:00:46.000000Z'
        }
      }
    ]
  }
};

export default {
  state: { ...INITIAL_STATE }
};

const header = new Vue({
    el: '#header',
    data: {
      apptitle: '支出入力'
    }
  });

const inputON = new Vue({
    el: '#inputON',
    methods: {
        changeTitle: function() {
            if (header.apptitle === '支出入力') {
                header.apptitle = '一覧リスト';
            } else {
                header.apptitle = '支出入力';
            }
        }
    }
  });
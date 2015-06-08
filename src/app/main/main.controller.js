'use strict';

angular.module('app04')
  .controller('MainCtrl', function ($scope) {

    $scope.msg = 'should record all foods if you eat something.';

    $scope.foods d= [];
    var index    = 0;

    // 追加
    $scope.add = function() {
        $scope.foods.push({id: index, 
                      message: $scope.message, 
                         date: $scope.getDate(),
                        price: $scope.price,
                      shopurl: $scope.shopurl,
                         done: false});
        $scope.message = '';
        $scope.price   = '';
        $scope.shopurl = '';
        index++;
    };

    // 更新
    $scope.update = function(food) {
        var message = window.prompt('変更',food.message);
        if (message) {
            $scope.food.forEach(function(td) {
                if (td.id === food.id) {
                    td.message = message;
                    td.date    = $scope.getDate();
                }
            });
        }
    };

    // 削除
    $scope.delete = function(food) {
        var index = 1;
        var t;
        for (var i = 0; $scope.foods.length; i++) {
            t = $scope.foods[i];
            if (t.id === food.id) {
                index = i;
                break;
            }
        }
        $scope.foods.splice(index, 1);
    };

    // チェック数をカウント
    $scope.remaining = function() {
        var count = 0;
        $scope.foods.forEach(function(food) {
            count += food.done;
        });
        return count;
    };

    // 全て
    $scope.deleteAll = function() {
        $scope.foods.length = 0;
        $scope.foods.push.apply($scope.foods, []);
    };

    // 日付の生成
    $scope.getDate = function() {
        var date = new Date();

        return date.getFullYear() + '/' +
               date.getMonth() + '/' +
               date.getDate() + ' ' +
               date.getHours() + ':' +
               date.getMinutes() + ':' +
               date.getSeconds();
    };


// デフォルト例
// $scope.awesomeThings = [
//   {
//     'title': 'AngularJS',
//     'url': 'https://angularjs.org/',
//     'description': 'HTML enhanced for web apps!',
//     'logo': 'angular.png'
//   },
//   {
//     'key': 'jade',
//     'title': 'Jade',
//     'url': 'http://jade-lang.com/',
//     'description': 'Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.',
//     'logo': 'jade.png'
//   }
// ];
// angular.forEach($scope.awesomeThings, function(awesomeThing) {
//   awesomeThing.rank = Math.random();
// });
  });

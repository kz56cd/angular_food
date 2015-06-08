'use strict';

angular.module('app04')
  .controller('MainCtrl', function ($scope) {

    $scope.msg = 'should record all foods if you eat something.';

    $scope.foods = [];
    var index = 0;
    // $scope.num = 0;

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
        // $scope.foods.forEach(function(food) {
        //     // food.done = true;
        //     // $scope.delete(food);
        // });

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

    // $scope.awesomeThings = [
    //   {
    //     'title': 'AngularJS',
    //     'url': 'https://angularjs.org/',
    //     'description': 'HTML enhanced for web apps!',
    //     'logo': 'angular.png'
    //   },
    //   {
    //     'title': 'BrowserSync',
    //     'url': 'http://browsersync.io/',
    //     'description': 'Time-saving synchronised browser testing.',
    //     'logo': 'browsersync.png'
    //   },
    //   {
    //     'title': 'GulpJS',
    //     'url': 'http://gulpjs.com/',
    //     'description': 'The streaming build system.',
    //     'logo': 'gulp.png'
    //   },
    //   {
    //     'title': 'Jasmine',
    //     'url': 'http://jasmine.github.io/',
    //     'description': 'Behavior-Driven JavaScript.',
    //     'logo': 'jasmine.png'
    //   },
    //   {
    //     'title': 'Karma',
    //     'url': 'http://karma-runner.github.io/',
    //     'description': 'Spectacular Test Runner for JavaScript.',
    //     'logo': 'karma.png'
    //   },
    //   {
    //     'title': 'Protractor',
    //     'url': 'https://github.com/angular/protractor',
    //     'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
    //     'logo': 'protractor.png'
    //   },
    //   {
    //     'title': 'Angular Material Design',
    //     'url': 'https://material.angularjs.org/#/',
    //     'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
    //     'logo': 'angular-material.png'
    //   },
    //   {
    //     'title': 'Stylus',
    //     'url': 'http://learnboost.github.io/stylus/',
    //     'description': 'Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS. Supporting both an indented syntax and regular CSS style.',
    //     'logo': 'stylus.png'
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

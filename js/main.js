/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', ['ngRoute', 'ngDialog', 'ngSanitize']);

app.config(['$routeProvider','$locationProvider','ngDialogProvider' ,function ($routeProvider, $locationProvider, ngDialogProvider) {

$routeProvider
  .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
  .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
  .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
  .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
  .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
  .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
  .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
  .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});

  ngDialogProvider.setDefaults({
          className: 'ngdialog-theme-default',
          plain: false,
          showClose: true,
          closeByDocument: true,
          closeByEscape: true,
          appendTo: false,
          preCloseCallback: function () {
              console.log('default pre-close callback');
          }
      });

}]);

app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  $('.carousel').carousel({
    interval: 5000
  });

  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

  app.controller('MainCtrl', function ($scope, $rootScope, ngDialog, $timeout) {
  $rootScope.jsonData = '{"foo": "bar"}';
  $rootScope.theme = 'ngdialog-theme-default';


      $scope.WebDevelopment = function () {
            ngDialog.open({
                template: 'WebDevId',
                controller: 'web_development',
                className: 'ngdialog-theme-default'
            });
        };

      $scope.Ecommerce = function () {
            ngDialog.open({
                template: 'EcommerceId',
                controller: 'ecommerce',
                className: 'ngdialog-theme-default'
            });
        };

       $scope.GraphicDesign = function () {
            ngDialog.open({
                template: 'GraphicId',
                controller: 'graphic_design',
                className: 'ngdialog-theme-default'
            });
        };

       $scope.Seo = function () {
            ngDialog.open({
                template: 'SeoId',
                controller: 'search_engine',
                className: 'ngdialog-theme-default'
            });
        };

       $scope.SocialMedia = function () {
            ngDialog.open({
                template: 'SocialMediaId',
                controller: 'social_media',
                className: 'ngdialog-theme-default'
            });
        };

        $scope.Branding = function () {
            ngDialog.open({
                template: 'BrandingId',
                controller: 'branding',
                className: 'ngdialog-theme-default'
            });
        };
      });


     app.controller('web_development', function ($scope, ngDialog) {
            $scope.dialogModel = {
                message : '<p>The web has been spinning a lot of money pots for online retailers and ecommerce has been ever increasing in its demands. Concern for most, would be a safe site to shop for consumers, checkout system that actually allows a pleasant shopping experience and payment gateways that actually can be trusted. For businesses where that isn’t a possibility, due to products having to be made to order, online catalogue with quotation. That’s the fit you’re looking for. </p><p>Tell us what you want, and we’ll custom the technical parts to get you what you’re looking for to propel your business with the right exposure. more your online presence stands out, the more people get to know what your business represents and meet their wants and needs. They’ll like to engage your services. </p>'
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        });


     app.controller('ecommerce', function ($scope, ngDialog) {
            $scope.dialogModel = {
                message : '<p>The web has been spinning a lot of money pots for online retailers and ecommerce has been ever increasing in its demands. Concern for most, would be a safe site to shop for consumers, checkout system that actually allows a pleasant shopping experience and payment gateways that actually can be trusted. For businesses where that isn’t a possibility, due to products having to be made to order, online catalogue with quotation. That’s the fit you’re looking for. </p><p>Tell us what you want, and we’ll custom the technical parts to get you what you’re looking for to propel your business with the right exposure. more your online presence stands out, the more people get to know what your business represents and meet their wants and needs. They’ll like to engage your services. </p>'
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        });

      app.controller('graphic_design', function ($scope, ngDialog) {
            $scope.dialogModel = {
                message : '<p>One picture is worth ten thousand words. – Chinese Proverb </p><p>Need I say more how your graphic and print designs can cause an impact? How eye catching it is matters. The completed works speaks for itself, reeling in those who are interested, or simply, looking to please. Our range of services offered include logo designing, name cards, brochures, leaflets and posters. Be it as a form of digital art, publicity or advertising. We do accommodate. </p>'
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        });


        app.controller('search_engine', function ($scope, ngDialog) {
            $scope.dialogModel = {
                message : '<p>Does it faze you, just thinking about what does it mean? Here’s a short way of thinking about it – the publisher would be looking into making your site an easier find through the maze of the internet. Better way of directing online traffic to your site using the structure, content and essential keywords. We don’t just create those out of thin air or just generically. We look into what your business does, and what it presents to your potential customer. We look into the psychology of consumers that your business attracts. More people that gets to see what you do, the more they are likely to be interested. </p>'
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        });

       app.controller('social_media', function ($scope, ngDialog) {
            $scope.dialogModel = {
                message : '<p>Singapore. We’re known for how fast we need our internet speed to be. To upload our lives on Facebook, Instagram, Twitter and other social media sites. Our need to share, has become another venue for how people get to know about services available. The like button. The @yourfriends. The share button for photos and sites. Why not let popularity of social media be a venue for awareness of what’s going on for your business? The more your online presence stands out, the more people get to know what your business represents and meet their wants and needs. They’ll like to engage your services. </p>'                  
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        });

        app.controller('branding', function ($scope, ngDialog) {
            $scope.dialogModel = {
                message : '<p>It can be said that every one of us has our own branding. Facebook. Getting through that interview. It’s a great skill to have. Increasing our value and worth. Prettifying our resumes. That’s what branding is. When it’s applied to business.</p><p>We look at it, for you as a provider – an insight to what makes you who you are as a business. Increase your marketability. Refine ways to translate what you do and your values into any medium that acquires your stamp on it. Personalize it, and make it yours. In a market where usually a brand can drown among others, standing out makes a huge difference. Notability is a well worth virtue when it comes to recognition and making choices for consumers. So why not, make your business notable?</p>'
            };
            $scope.openSecond = function () {
                ngDialog.open({
                    template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
                    plain: true,
                    closeByEscape: false,
                    controller: 'SecondModalCtrl'
                });
            };
        });

        app.controller('InsideCtrlAs', function () {
            this.value = 'value from controller';
        });

        app.controller('SecondModalCtrl', function ($scope, ngDialog) {
            $scope.closeSecond = function () {
                ngDialog.close();
            };
        });
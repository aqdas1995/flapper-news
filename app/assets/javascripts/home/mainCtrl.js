myapp.controller('MainCtrl',
    ['$scope', 'posts',
    function ($scope, posts) {
        
        $scope.posts = posts.posts; 
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            comments: [
                { author: 'Joe', body: 'Cool post!', upvotes: 0 },
                { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
            ]
        });

        // adding submit method to save new post
        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') return;
            $scope.posts.push({ title: $scope.title, upvotes: 0 });
            $scope.title = '';
            
        };

        // incrementing upvotes
        $scope.incrementUpvotes = function (post) {
            posts.upvote(post);
        };

        // saving posts to main server
        $scope.addPost = function () {
            if (!$scope.title || $scope.title === '') { return; }
            posts.create({
                title: $scope.title,
                link: $scope.link,
            });
            $scope.title = '';
            $scope.link = '';
        };
    }]);

myapp.factory('posts', ['$resource',
    function ($resource) {
        var o = {
            posts: [],
            post: {}
        };
        var posts = $resource('/posts/:id');
        o.getAll = function () {
            posts.get({}, function(response){
                angular.copy(response.posts, o.posts);
            });
        };
        o.create = function (post) {
            var newPost = new posts(post);
            newPost.$save(function(response){
                o.posts.push(response.saved_post);
            });            
        };
        o.upvote = function (post) {
            var upvote = $resource('/posts/:id/upvote', null, {
                'increment': {method: 'PUT'}
            });
            post.upvotes += 1;
            upvote.increment({id: post.id},post);
        }; 
       
        o.get = function (id) {
            posts.get({id: id}, function(response){
                angular.copy(response.post, o.post);
            });
        };
        return o;
    }
]);

/*myapp.factory('posts', [ '$http',
    function ($http) {
        var o = {
            posts: []
        };
        o.getAll = function(){
            return $http.get('/posts.json').then(function(data){
                console.log(data);
                angular.copy(data, o.posts);
            }, null);
        };
        o.create = function(post){
            return $http.post('/posts.json', post).then(function(data){
                o.posts.push(data);
            });
        };
        o.upvote = function (post) {
            return $http.put('/posts/' + post.id + '/upvote.json')
                .then(function (data) {
                    post.upvotes += 1;
                });
        };
        o.get = function (id) {
            return $http.get('/posts/' + id + '.json').then(function (res) {
                return res.data;
            });
        };
        o.addComment = function (id, comment) {
            return $http.post('/posts/' + id + '/comments.json', comment);
        };
        o.upvoteComment = function (post, comment) {
            return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
                .then(function (data) {
                    comment.upvotes += 1;
                });
        };
        return o;
    }
]);*/

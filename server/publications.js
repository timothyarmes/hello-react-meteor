Meteor.publish('posts', function() {
  const selector = {category: {$ne: 'private'}};
  posts = Posts.find(selector);

  posts.forEach((post) => {
    this.added('posts', post._id, post);
  });

  this.ready();
});

Meteor.publish('singlePost', _id => {
  return Posts.find({_id});
});

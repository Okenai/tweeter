/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = (tweetData) => {
  const $tweet = $("<article>").addClass("tweet")
  let html = `<header>
    <div class="name"> <img class="avatars" src="${tweetData.user.avatars}">${tweetData.user.name}</div>
    <div class="handle">${tweetData.user.handle}</div>
  </header>
  <p class="content">${tweetData.content.text}</p>
  <footer>
    <div class="date-stamp">${timeago.format(tweetData.created_at)}</div>
    <div>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>`
  const newTweet = $tweet.append(html)
  return newTweet;
}

const renderTweets = (tweets) => {
  let tweetsContainer = $('.tweet-container').html('');
  tweets.forEach((tweet) => {
    let newTweet = createTweetElement(tweet);
    tweetsContainer.prepend(newTweet);
  });
}

const loadTweets  = function () {
  $.get('/tweets').then((tweets) => {
    renderTweets(tweets);
  })
}

$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      url: '/tweets',
      data: data,
      method: "POST"
    })
      .then(loadTweets )
  })
})

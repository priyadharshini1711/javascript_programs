let response = fetch("https://www.udemy.com/api-2.0/users/32714016/subscribed-profile-courses/?fields[course]=@default,avg_rating_recent,rating,bestseller_badge_content,badges,content_info,discount,is_recently_published,is_wishlisted,num_published_lectures,num_reviews,num_subscribers,buyable_object_type,free_course_subscribe_url,headline,instructional_level,objectives_summary,content_length_practice_test_questions,num_published_practice_tests,published_time,is_user_subscribed,has_closed_caption,preview_url,context_info,caption_languages&page=2&page_size=12");


if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = response.json();
} else {
  alert("HTTP-Error: " + response.status);
}
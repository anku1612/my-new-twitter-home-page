import React, { Component } from "react";
import { TweetBody } from "./components/tweet.js";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <TweetBody
          name="Dan Merica"
          handle="@karthikkalyan90"
          screen_name="danmericaCNN"
          tweet="@danmericaCNN HOMEWORK?!! this isn't elementary school! #panamapapers Hillary officially worse than Trump"
        />
      </div>
    );
  }
}

export default Feed;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TweetBody } from "./components/tweet.js";
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent
} from "react-js-pull-to-refresh";
import "./Demo.css";
import Navbar from "./Navbar";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      pagenumber: 1,
      search: ""
    };
  }

  componentDidMount() {
    this.getTweets(this.state.pagenumber);
  }

  onChange = e => {
    const value = e.target.value;
    console.log(value);
    this.setState({ [e.target.name]: value }, () => {
      this.search(value);
    });
  };

  search(text) {
    console.log(text);
    fetch("https://mongobhai.com/tweets?text_like=" + text)
      .then(response => response.json())
      .then(data => {
        console.log("getting tweets here ");
        console.log(data);
        this.setState({ tweets: [...data] });
      })
      .catch(error => {
        console.log("OOPS! got an error");
        console.log(error);
      });
  }
  search(name) {
    console.log(name);
    fetch("https://mongobhai.com/tweets?text_like=" + name)
      .then(response => response.json())
      .then(data => {
        console.log("getting tweets here ");
        console.log(data);
        this.setState({ tweets: [...data] });
      })
      .catch(error => {
        console.log("OOPS! got an error");
        console.log(error);
      });
  }

  getTweets(pagenumber) {
    fetch("https://mongobhai.com/tweets?_page=" + pagenumber + "&limit=10")
      .then(response => response.json())
      .then(data => {
        console.log("getting tweets here ");
        console.log(data);
        this.setState({ tweets: [...this.state.tweets, ...data] });
      })
      .catch(error => {
        console.log("OOPS! got an error");
        console.log(error);
      });
  }

  loasdMore(pagenumber) {
    const pg = pagenumber + 1;
    this.setState({ pagenumber: pg }, () => {
      this.getTweets(pg);
    });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <Navbar />
        <center>
          <input
            className="search-input"
            type="text"
            placeholder="search"
            value={this.state.search}
            onChange={e => this.onChange(e)}
            name="search"
          />

          <div
            style={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#e6ecf0"
            }}
          >
            {this.state.tweets.map((tweet, i) => {
              return (
                <TweetBody
                  key={[i]}
                  name={tweet.name}
                  handle={tweet.id}
                  tweet={tweet.text}
                />
              );
            })}
          </div>

          <h2>
            <button
              onClick={() => {
                this.loasdMore(this.state.pagenumber);
              }}
            >
              Load More
            </button>
          </h2>
        </center>
      </div>
    );
  }
}
export default Demo;

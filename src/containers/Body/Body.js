import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import axios from 'axios';
import './Body.scss';
import Post from '../../components/Post/Posts';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Body extends Component {
  state = {
    searchTxt: '',
    resError: false,
    selectCategory: '',
    currentPage: 1,
    postsPerPage: 6
  };

  componentDidMount() {
    axios
      .get('https://newsapi.org/v1/sources')
      .then(res => {
        console.log(res.data.sources);
        this.props.fetchPosts(res.data.sources);
      })
      .catch(err => {
        this.setState({
          resError: true
        });
      });
  }

  searchHadler = event => {
    event.preventDefault();
    this.setState({
      searchTxt: event.target.value
    });
  };

  setCategoryHandler = event => {
    event.preventDefault();
    this.setState({
      selectCategory: event.target.value
    });
  };

  paginate = num => {
    this.setState({
      currentPage: num
    });
  };

  decrementPage = () => {
    const currentPage = this.state.currentPage - 1;
    if (currentPage > 0) {
      this.setState({
        currentPage
      });
    }
  };

  incrementPage = () => {
    const currentPage = this.state.currentPage + 1;
    if (currentPage < this.props.posts.length / this.state.postsPerPage) {
      this.setState({
        currentPage
      });
    }
  };

  moreHandler = () => {
    const postsPerPage = this.state.postsPerPage + 6;

    this.setState({
      postsPerPage
    });
  };

  render() {
    const { currentPage, postsPerPage } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const pageNumber = [];
    const curerntPost = this.props.posts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    for (
      let i = 1;
      i <= Math.ceil(this.props.posts.length / this.state.postsPerPage);
      i++
    ) {
      pageNumber.push(i);
    }

    let posts = (
      <p style={{ textAlign: 'center', width: '100%' }}>
        Ooops Something went wrong
      </p>
    );

    if (!this.state.resError) {
      posts = curerntPost
        .filter(post => {
          return post.name.indexOf(this.state.searchTxt) >= 0;
        })
        .filter(post => {
          return post.category.search(this.state.selectCategory) >= 0;
        })
        .map(post => {
          return (
            <Post
              key={post.id}
              name={post.name}
              description={post.description}
              category={post.category}
            />
          );
        });
    }
    let categoriesSet = new Set();

    this.props.posts.forEach(post => {
      categoriesSet.add(post.category);
    });
    console.log(categoriesSet);

    let categories = [
      <option key="-1" value="\w+">
        Choose category
      </option>
    ];
    if (!this.state.resError) {
      Array.from(categoriesSet).forEach((category, index) => {
        categories.push(
          <option key={index} value={category}>
            {category}
          </option>
        );
      });
    }

    console.log(categories);

    // const checkSize = () => {
    //   let windowSize = window.innerWidth;

    //   if (windowSize >= 500) {
    //     this.setState({
    //       postsPerPage: 6
    //     });
    //   }
    // };

    // checkSize();

    // window.addEventListener('resize', checkSize);

    return (
      <main>
        <section className="filters-section">
          <form>
            <div className="container-search">
              <button className="btn-search">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <input
                type="text"
                placeholder="Search Channels"
                value={this.state.searchTxt}
                onChange={this.searchHadler}
                className="input-search"
              />
            </div>

            <select className="input-select" onChange={this.setCategoryHandler}>
              {categories}
            </select>
          </form>
          <hr />
        </section>
        <section className="post-section">{posts}</section>
        <section className="pagination-section">
          <nav>
            <button className="btn-mobile-more" onClick={this.moreHandler}>
              ...more
            </button>
            <ul className="paginamtion">
              <li onClick={this.decrementPage} className="page-link">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </li>
              {/* {pageNumber.map(num => (
                <li
                  key={num}
                  className="page-link"
                  onClick={() => this.paginate(num)}
                >
                  {num}
                </li>
              ))} */}
              <li>
                displayinh page {this.state.currentPage} of {pageNumber.length}
              </li>
              <li onClick={this.incrementPage} className="page-link">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: posts =>
      dispatch({ type: actionTypes.FETCH_POSTS, payload: posts })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);

import React, { useEffect } from "react";
import "./RightBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThreads } from "../../actions/threadsAction";

// Reusable TopicLink component
const TopicLink = ({ to, theme, label, countThreadsPerTheme }) => (
  <Link to={to} className="topic">
    <div className="topic-container">
      <h4 className="fw-bold">{label}</h4>
      <span className="text-muted">{countThreadsPerTheme(theme)} Tweeds</span>
    </div>
  </Link>
);

function RightBar() {
  const dispatch = useDispatch();

  const {
    getThreadResult,
    getThreadError,
    getThreadLoading
  } = useSelector((state) => state.ThreadsReducer);

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  const countThreadsPerTheme = (theme) => {
    // Check if getThreadResult is an array before using filter
    if (Array.isArray(getThreadResult)) {
      return getThreadResult.filter((thread) => thread.theme === theme).length;
    }
    return 0; // Return 0 if getThreadResult is not an array
  };

  return (
    <>
      <aside>
        <div className="">
          <div className="trending container border-0 shadow mt-3">
            <h2 className="right-bar-title">Topics</h2>
            <div className="topics-list">
              <TopicLink to='/home/mental' theme='loker' label='Loker' countThreadsPerTheme={countThreadsPerTheme} />
              <TopicLink to='/home/politics' theme='sharing' label='Sharing' countThreadsPerTheme={countThreadsPerTheme} />
              <TopicLink to='/home/other' theme='other' label='Other' countThreadsPerTheme={countThreadsPerTheme} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default RightBar;

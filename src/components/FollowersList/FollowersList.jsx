import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FollowersList.css';

const FollowersList = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=5');
    console.log(data);
    setFollowers(data.results);
  };

  return (
    <div className="followerslist-container">
      <div>
        {followers.map((follower, index) => (
          <div
            key={index}
            className="follower-item"
            data-testid={`follower-item-${index}`}
          >
            <img
              src={follower.picture.large}
              alt={`${follower.name.first} ${follower.name.last}`}
            />
            <div className="followers-details">
              <div className="follower-item-name">
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default FollowersList;

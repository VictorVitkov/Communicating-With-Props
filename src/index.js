import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>
          <p> Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Guillaume"
          text="I'm down like a clown charlie brown"
          timeAgo="Just now"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          text="Let's climb Mt. Katahdin?"
          timeAgo="Yesterday at 2:00pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Victor"
          text="Who's down to go hiking?"
          timeAgo="Yesterday at 1:45pm"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))

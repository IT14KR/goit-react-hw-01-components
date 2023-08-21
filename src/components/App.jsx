import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { Transaction } from './Transaction/Transaction';

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics stats={data} />
      <Transaction items={transactions} />
    </div>
  );
}

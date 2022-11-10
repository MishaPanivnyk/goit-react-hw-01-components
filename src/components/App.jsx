// import user from '../json/user';
import user from '../json/user.json';
import Profile from './Profile/Profile';
import data from '../json/data.json';
import Statistic from './Statistic/Statistic';
import Container from './Container/Container';
export const App = () => {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" data={data} />
      <Statistic data={data} />
      {/* <Friends friends={friends} /> */}
      {/* <TransactionHistory items={transactions} /> */}
    </Container>
  );
};

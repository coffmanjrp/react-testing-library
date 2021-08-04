import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  beforeEach(() => {
    console.log('RUNNING BEFORE EACH TEST');
  });

  beforeAll(() => {
    console.log('RUNNING ONCE BEFORE ALL TESTS');
  });

  afterEach(() => {
    console.log('RAN AFTER EACH TEST');
  });

  afterAll(() => {
    console.log('RAN ONCE AFTER ALL TESTS');
  });

  it('should renders follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  // it('should renders multiple follower items', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
});

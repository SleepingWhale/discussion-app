import { combineReducers, createStore } from 'redux';
import posts from './components/posts/Posts.redux';
import search from './components/search/Search.redux';

export const store = createStore(
  combineReducers({
    posts,
    search,
    user: (state = {}) => state
  }),
  {
    posts: [
      {
        id: 1,
        date: Date.now(),
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et pretium risus, eget aliquam massa. Quisque hendrerit, nunc sit amet convallis convallis, nisi felis aliquam nisi, sed convallis enim justo quis libero. Aliquam pretium sapien ac consectetur molestie. Mauris egestas fermentum ex vel ultricies. Proin id finibus libero, ac consequat odio. Suspendisse rhoncus enim sed diam fermentum suscipit. Etiam a semper risus. Aliquam pretium dictum metus, at bibendum metus blandit sit amet. Donec at eros id purus viverra luctus. Vivamus pulvinar vel lacus at consectetur. Phasellus sit amet fermentum ligula. Donec eu convallis dui. Nam tristique aliquet consequat. Donec ac risus non diam lacinia egestas ac ac lorem. In tempor augue ex, et efficitur nisl ultrices vel. Integer rhoncus neque lacinia neque luctus vehicula.',
        author: {
          name: 'Neo',
          nickname: '@neo42',
          pick: 'http://placekitten.com/32/32?image=1'
        },
        likes: 5
      },
      {
        id: 2,
        date: Date.now(),
        content:
          'Donec viverra ex quis risus pharetra tempor et rhoncus nibh. Sed at fermentum quam, nec luctus tellus. Integer molestie libero a dui pretium facilisis. Nullam pellentesque mattis porttitor. Fusce eu pretium arcu, vitae elementum risus. Ut sed lacinia odio, et euismod tortor. Duis id risus odio. Nullam sed sapien lobortis sapien volutpat tincidunt vel non sem. Etiam vestibulum quam eu justo aliquam dictum. Nulla euismod magna tortor, at bibendum dolor pellentesque nec. Sed vel sem hendrerit, cursus massa quis, placerat sem. Phasellus augue neque, tincidunt eu convallis sodales, mattis vitae erat. Cras tortor ipsum, molestie eget vehicula ac, placerat eu odio. Fusce et erat magna. In eu volutpat augue.',
        author: {
          name: 'Agent Smith',
          nickname: '@smithy',
          pick: 'http://placekitten.com/32/32?image=2'
        },
        likes: 1
      }
    ],
    user: {
      name: 'Neo',
      nickname: '@neo42',
      pick: 'http://placekitten.com/32/32?image=1'
    }
  },
  window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

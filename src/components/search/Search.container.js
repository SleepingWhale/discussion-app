import { connect } from 'react-redux';
import { Search } from './Search';
import { getSearch, updateSearch } from './Search.redux';

function mapStateToProps(state) {
  return {
    value: getSearch(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(value) {
      dispatch(updateSearch(value));
    }
  };
}

export const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

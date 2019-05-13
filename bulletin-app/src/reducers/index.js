import login from './loginReducer';
import bulletinData from './bulletinDataReducer';
import publicArticle from './publicArticleReducer';
import replyData from './replyReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  bulletinData,
  login,
  publicArticle,
  replyData,
});

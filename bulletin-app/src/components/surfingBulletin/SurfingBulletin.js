import React from 'react';
import PublicArticle from './PublicArticle';
import ArticleList from './ArticleList';
import useTrueFalse from '../../useHook/useTrueFalse';

const SurfingBulletin = () => {
  const reloadArticleListAPIState = useTrueFalse(true);

  return (
    <div className="surfing_section">
      <div className="surfing_content">
        {sessionStorage.getItem('isLogin') === '1' && <PublicArticle />}
        <ArticleList />
      </div>
    </div>
  );
};

export default SurfingBulletin;

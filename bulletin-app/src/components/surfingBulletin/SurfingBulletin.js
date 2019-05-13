import React from 'react';
import PublicArticle from './PublicArticle';
import ArticleList from './ArticleList';
import useTrueFalse from '../../useHook/useTrueFalse';

const SurfingBulletin = () => {
  const reloadArticleListAPIState = useTrueFalse(true);

  return (
    <div className="surfing_section">
      <div className="surfing_content">
        <PublicArticle />
        <ArticleList />
      </div>
    </div>
  );
};

export default SurfingBulletin;

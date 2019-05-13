import React, { useEffect } from 'react';
import Article from '../surfingBulletin/Article';
import { connect } from 'react-redux';
import { fetchBulletin } from '../../actions/bulletinAction';

const ArticleList = props => {
  useEffect(() => {
    const cardNo = sessionStorage.getItem('card_no');
    props.fetchBulletin(cardNo);
  }, [props.bulletinData.length]);

  function renderArticle(props) {
    const data = props.bulletinData;

    data.forEach(item => {
      const date = new Date(item.timestamp * 1000);
      const fullTime = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
      };

      item.accurateTime = fullTime;
    });

    return data.map((item, index) => {
      return <Article {...item} key={item.article_id} />;
    });
  }
  return <div className="article_section">{renderArticle(props)}</div>;
};

function mapStateToProps(state) {
  console.log(state);
  return {
    bulletinData: state.bulletinData,
  };
}

export default connect(
  mapStateToProps,
  { fetchBulletin },
)(ArticleList);

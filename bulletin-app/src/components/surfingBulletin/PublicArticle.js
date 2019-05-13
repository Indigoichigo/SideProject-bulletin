import React, { useState } from 'react';
import useInput from '../../useHook/useInput';
import rootApi from '../../api/rootApi';
import { connect } from 'react-redux';
import { publicArticle } from '../../actions/publicArticleAction';
import { fetchBulletin } from '../../actions/bulletinAction';

const PublicArticle = props => {
  const authorName = useInput('');
  const articleTitle = useInput('');
  const articleContent = useInput('');
  const [uploadImage, setUploadImage] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('uploadfile', uploadImage);
    formData.append('username', authorName.value);
    formData.append('title', articleTitle.value);
    formData.append('text', articleContent.value);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${sessionStorage.getItem('bulletin_token')}`,
      },
    };

    props.publicArticle(formData, config).then(() => {
      props.fetchBulletin();
    });
  }

  function onFileChange(e) {
    setUploadImage(e.target.files[0]);
  }

  return (
    <div className="public_article_section">
      <div className="public_article_content">
        <p className="pa_title">發表文章</p>
        <form>
          <div className="pa_name_wrapper pa_item_wrapper">
            <label className="pa_label">名字</label>
            <input
              className="pa_input input_style"
              value={authorName.value}
              onChange={e => authorName.handleValueChange(e)}
            />
          </div>

          <div className="pa_title_wrapper pa_item_wrapper">
            <label className="pa_label">文章標題</label>
            <input
              className="pa_input  input_style"
              value={articleTitle.value}
              onChange={e => articleTitle.handleValueChange(e)}
            />
          </div>

          <div className="pa_content_wrapper pa_item_wrapper">
            <label className="pa_label">文章內容</label>
            <textarea
              className="pa_textarea"
              value={articleContent.value}
              onChange={e => articleContent.handleValueChange(e)}
            />
          </div>

          <div className="pa_file_upload_wrapper pa_item_wrapper">
            <label className="pa_label">上傳檔案</label>
            <input
              className="pa_upload_input pa_input"
              type="file"
              onChange={onFileChange}
            />
          </div>

          <div className="pa_item_wrapper pa_public_btn_wrapper">
            <button
              className="public_article button_style"
              onClick={e => onFormSubmit(e)}
            >
              發表文章
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { publicArticle, fetchBulletin },
)(PublicArticle);

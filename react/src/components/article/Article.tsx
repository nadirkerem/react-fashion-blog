import { ArticleData } from '../../data/data';

import './article.css';

interface ArticleProps {
  article: ArticleData;
}

export default function Article({ article }: ArticleProps) {
  return (
    <article>
      <h3 className='article-date'>{article.date}</h3>
      <h3 className='article-title'>{article.title}</h3>
      <div className='img-container'>
        <img src={article.imgSrc} className='article-image' alt='Article' />
      </div>
      <p className='article-text'>{article.text}</p>
      <p className='article-continues'>Continues ...</p>
    </article>
  );
}

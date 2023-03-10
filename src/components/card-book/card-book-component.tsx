import { useParams } from 'react-router-dom';

import noImage from '../../images/bgCat.png';
import { Button } from '../../shared/button';
import { Rate } from '../../shared/rating';

import { CardBookProps } from './card-book-interfaces';
import * as S from './card-book-styles';

export const CardBook = ({
  id,
  rating,
  image,
  title,
  authors,
  issueYear,
  isLinear,
}: CardBookProps): JSX.Element => {

const {category} = useParams();

return isLinear ? (
    <div>
      <S.WrapperCard to={`/books/${category}/${id}`} isLinear={isLinear}>
        <div>
          <S.ImgBook isLinear={isLinear} image={image.url === '' ? noImage : `https://strapi.cleverland.by${image.url}`} />
        </div>
        <S.WrapperContentLinearCard>
          <S.TitleBook isLinear={isLinear}>
            <S.TitleH2 isLinear={isLinear}>{title}</S.TitleH2>
          </S.TitleBook>
          <S.AuthorBook>
            <S.AuthorH2 isLinear={isLinear}>{`${authors.join(', ')}, ${issueYear}`}</S.AuthorH2>
          </S.AuthorBook>
          <S.WrapperCardRateAndButton>
            <Rate isLinear={isLinear} rating={rating || 0} />
            <Button width={174}>Забронировать</Button>
          </S.WrapperCardRateAndButton>
        </S.WrapperContentLinearCard>
      </S.WrapperCard>
    </div>
  ) : (
    <S.WrapperCard to={`/books/${category}/${id}`} data-test-id='card'>
    <S.ImgBook image={image.url === '' ? noImage : `https://strapi.cleverland.by${image.url}`} />
      <Rate rating={rating || 0} />
      <S.TitleBook>
        <S.TitleH2>{title}</S.TitleH2>
      </S.TitleBook>
      <S.AuthorBook>
        <S.AuthorH2>{`${authors.join(', ')}, ${issueYear}`}</S.AuthorH2>
      </S.AuthorBook>
      <Button width={166}>Забронировать</Button>
    </S.WrapperCard>
  );
};

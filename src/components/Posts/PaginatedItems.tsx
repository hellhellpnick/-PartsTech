import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { BoxListPosts } from './Posts.styled';
import Post from './Post/Post';
import { IArrPosts, IPostOne, IPaginatedItems, IPostSelected } from '../../modules/InterfacePosts';

const Posts = ({ currentItems, type }: IArrPosts) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item: IPostOne, index: number) => (
          <Post item={item} key={index} type={type} />
        ))}
    </>
  );
};

const PaginatedItems = ({ itemsPerPage, postsArr, type }: IPaginatedItems) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(postsArr.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(postsArr.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, postsArr]);

  const handlePageClick = (e: IPostSelected) => {
    const newOffset = (e.selected * itemsPerPage) % postsArr.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <BoxListPosts>
      <Posts currentItems={currentItems} type={type} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </BoxListPosts>
  );
};

export default PaginatedItems;

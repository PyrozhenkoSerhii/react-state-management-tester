import styled from "styled-components";

export const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BlogListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const BlogListBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 100px);
`;

export const BlogListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
  flex-grow: 1;
`;

export const BlogListSidebar = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
`;

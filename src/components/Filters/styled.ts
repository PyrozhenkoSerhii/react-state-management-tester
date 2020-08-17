import styled from "styled-components";

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const FilterItem = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 20px;
`;

export const BooleanFilterItem = styled(FilterItem)`
  height: 60px;
`;

export const ValueFilterItem = styled(FilterItem)`
  height: 100px;
`;

export const RangeFilterItem = styled(FilterItem)`
  height: 100px;
  width: 100%;
`;

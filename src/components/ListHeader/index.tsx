import * as React from "react";

import { HeaderTitle, HeaderWrapper } from "./styled";

type TProps = {
  title: string
  sorting: [{
    title: string;
    value: 0;
  }]
}


export const ListHeader = ({ title }: TProps): JSX.Element => (
  <HeaderWrapper>
    <HeaderTitle>{title}</HeaderTitle>

  </HeaderWrapper>
);

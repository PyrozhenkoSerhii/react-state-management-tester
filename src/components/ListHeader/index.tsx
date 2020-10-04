import * as React from "react";

import { HeaderTitle, HeaderWrapper } from "./styled";

type TProps = {
  title: string
}

export const ListHeader = ({ title }: TProps): JSX.Element => (
  <HeaderWrapper>
    <HeaderTitle>{title}</HeaderTitle>

  </HeaderWrapper>
);

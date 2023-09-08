import { CardBoxImg } from "../portifolio/portfolio.styles.ts";
import React from "react";

interface NlwCardsInterface {
  content: any
}

export const NlwCards: React.FC<NlwCardsInterface> = ({content}) => {
  return (
    <>
      <CardBoxImg>
        {content}
      </CardBoxImg>
    </>
  );
};

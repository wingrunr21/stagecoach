import React from 'react';

export const useDocumentTitle = (title) => {
  const [pageTitle, setPageTitle] = React.useState();
  const sitePrefix = `Stagecoach Meat Co &bull; Wiggins, Colorado &bull; ${pageTitle}`;

  React.useEffect(() => {
    document.title = sitePrefix + pageTitle;
  }, [pageTitle]);

  return [pageTitle, setPageTitle]
};

import React, { ReactNode, useState } from 'react';
import TopBar from 'components/TopBar';
import Home from 'pages/Home';
import About from 'pages/About';

const pages = [
  {title: 'Home', component: <Home/>},
  {title: 'About', component: <About/>},
  {title: 'Skills', component: <Home/>},
  {title: 'Blog', component: <Home/>},
  {title: 'Contact', component: <Home/>},
];

const Root = () => {
  const [openedTab, setOpenedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, tabId: number) => {
    setOpenedTab(tabId);
  };

  return (
    <div className="App">
      <TopBar
        pages={pages.map(page => page.title)}
        openedTab={openedTab}
        handleChangeTab={handleChange}
      />
      {pages.map((page, index) => (
        <PageWrapper openedTab={openedTab} pageId={index}>
          {page.component}
        </PageWrapper>
      ))}
    </div>
  );
}

const PageWrapper = (props: { openedTab: number, pageId: number, children: ReactNode }) => {
  const { pageId, openedTab, children } = props;
  console.log("PageWrapper", pageId, openedTab);
  return (
    <div hidden={openedTab !== pageId}>
      { children }
    </div>
  );
}

export default Root;

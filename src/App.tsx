import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./UI/components/header";
import Home from "./pages/home";
import Category from "./pages/category";

import * as S from "./styles";
import { GlobalStyle } from "./global/globalStyle";

import { useSelector } from "react-redux";
import { RootState } from "./store";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import Loading from "./UI/components/loading";

const App = () => {
  const { allCategories } = useSelector((store: RootState) => store.categories);
  const { loading } = useSelector((store: RootState) => store.loading);

  return (
    <S.Container>
      <GlobalStyle />
      <Router>
        {loading && <Loading />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          {allCategories.map((category: string, index: number) => {
            return (
              <Route
                key={index}
                path={`/${category.replace(/'/, "").replace(" ", "")}`}
                element={<Category category={category} />}
              />
            );
          })}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </S.Container>
  );
};

export default App;
